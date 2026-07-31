import { collection, query, where, getDocs, limit, doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

/**
 * Returns true if the signed-in user has role === 'admin'
 * on their document in the users or registrations collection.
 */
export async function isAdminFromRegistration(userId: string, email?: string | null): Promise<boolean> {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId))
    if (userDoc.exists() && String(userDoc.data().role || '').toLowerCase() === 'admin') {
      return true
    }

    const byUserId = query(
      collection(db, 'registrations'),
      where('userId', '==', userId),
      limit(5)
    )
    const snap = await getDocs(byUserId)

    for (const docSnap of snap.docs) {
      const data = docSnap.data()
      if (String(data.role || '').toLowerCase() === 'admin') {
        return true
      }
    }

    if (email) {
      const byEmail = query(
        collection(db, 'registrations'),
        where('email', '==', email),
        limit(5)
      )
      const emailSnap = await getDocs(byEmail)
      for (const docSnap of emailSnap.docs) {
        const data = docSnap.data()
        if (String(data.role || '').toLowerCase() === 'admin') {
          return true
        }
      }
    }

    return false
  } catch (error) {
    console.error('Error checking admin role:', error)
    return false
  }
}

/**
 * Returns whether payment has been verified by an admin.
 * Admins are treated as verified.
 */
export async function isPaymentVerified(userId: string, email?: string | null): Promise<{
  verified: boolean
  hasProof: boolean
  isAdmin: boolean
}> {
  const isAdmin = await isAdminFromRegistration(userId, email)
  if (isAdmin) {
    return { verified: true, hasProof: true, isAdmin: true }
  }

  try {
    const userDoc = await getDoc(doc(db, 'users', userId))
    if (userDoc.exists()) {
      const data = userDoc.data()
      return {
        verified: Boolean(data.payment_confirmed),
        hasProof: Boolean(data.paymentProofUrl),
        isAdmin: false,
      }
    }

    const byUserId = query(
      collection(db, 'registrations'),
      where('userId', '==', userId),
      limit(1)
    )
    const snap = await getDocs(byUserId)
    if (!snap.empty) {
      const data = snap.docs[0].data()
      return {
        verified: Boolean(data.payment_confirmed),
        hasProof: Boolean(data.paymentProofUrl),
        isAdmin: false,
      }
    }

    return { verified: false, hasProof: false, isAdmin: false }
  } catch (error) {
    console.error('Error checking payment verification:', error)
    return { verified: false, hasProof: false, isAdmin: false }
  }
}
