"use client"
import { useState } from 'react';
import { doc, updateDoc, deleteDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function RegistrationList({ users, onRefresh }) {
    const [loading, setLoading] = useState(false);

    const syncUserPaymentStatus = async (userIdField, confirmed) => {
        if (!userIdField) return;
        try {
            await updateDoc(doc(db, 'users', userIdField), {
                payment_confirmed: confirmed,
                payment_confirmed_at: confirmed ? new Date() : null,
                status: confirmed ? 'active' : 'pending',
            });
        } catch (error) {
            // users/{uid} may not exist for older records
            console.warn('Could not update users collection:', error);
        }
    };

    const handlePaymentConfirmation = async (registrationDocId, user, confirmed) => {
        setLoading(true);
        try {
            await updateDoc(doc(db, 'registrations', registrationDocId), {
                payment_confirmed: confirmed,
                payment_confirmed_at: confirmed ? new Date() : null,
                status: confirmed ? 'active' : 'pending',
            });
            await syncUserPaymentStatus(user.userId, confirmed);
            onRefresh();
        } catch (error) {
            console.error('Error updating payment status:', error);
            alert('Failed to update payment status.');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (registrationDocId, userIdField) => {
        if (!window.confirm('Are you sure you want to delete this registration? This action cannot be undone.')) {
            return;
        }

        setLoading(true);
        try {
            await deleteDoc(doc(db, 'registrations', registrationDocId));
            if (userIdField) {
                try {
                    await deleteDoc(doc(db, 'users', userIdField));
                } catch {
                    /* optional */
                }
                const papersQuery = query(collection(db, 'papers'), where('userId', '==', userIdField));
                const papersSnap = await getDocs(papersQuery);
                await Promise.all(papersSnap.docs.map((d) => deleteDoc(d.ref)));
            }
            onRefresh();
        } catch (error) {
            console.error('Error deleting registration:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Payment Proof
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="px-4 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">
                                    {user.fullName || user.name || '—'}
                                </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{user.email}</div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{user.category || '—'}</div>
                            </td>
                            <td className="px-4 py-4">
                                {user.paymentProofUrl ? (
                                    <div className="space-y-2">
                                        <a
                                            href={user.paymentProofUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary text-sm font-medium hover:underline"
                                        >
                                            View screenshot
                                        </a>
                                        {user.paymentProofFileName && (
                                            <div className="text-xs text-gray-500 break-all">
                                                {user.paymentProofFileName}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <span className="text-sm text-orange-600 font-medium">Not uploaded</span>
                                )}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                                <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        user.payment_confirmed
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-yellow-100 text-yellow-800'
                                    }`}
                                >
                                    {user.payment_confirmed ? 'Verified' : 'Pending'}
                                </span>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                                <div className="flex flex-col gap-2">
                                    <button
                                        type="button"
                                        disabled={loading || !user.paymentProofUrl}
                                        onClick={() =>
                                            handlePaymentConfirmation(user.id, user, !user.payment_confirmed)
                                        }
                                        className={`px-3 py-1.5 rounded text-white text-sm ${
                                            user.payment_confirmed
                                                ? 'bg-gray-600 hover:bg-gray-700'
                                                : 'bg-green-600 hover:bg-green-700'
                                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                        {user.payment_confirmed ? 'Revoke Verification' : 'Verify Payment'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(user.id, user.userId)}
                                        disabled={loading}
                                        className="text-red-600 hover:text-red-900 text-sm font-medium text-left"
                                    >
                                        Delete Registration
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {users.length === 0 && (
                <p className="text-center text-gray-500 py-8">No registrations found.</p>
            )}
        </div>
    );
}
