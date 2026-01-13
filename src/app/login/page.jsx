"use client"
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AdminLogin from '../../components/admin/AdminLogin';

function LoginContent() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const searchParams = useSearchParams();
    const auth = getAuth();
    const redirectTo = searchParams.get('redirect') || '/admin';

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is already authenticated, redirect to admin
                router.push(redirectTo);
            } else {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [auth, router, redirectTo]);

    const handleLogin = () => {
        // Redirect to admin after successful login
        router.push(redirectTo);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <AdminLogin onLogin={handleLogin} />
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        }>
            <LoginContent />
        </Suspense>
    );
}

