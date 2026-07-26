import { collection, query, where, getDocs, limit } from 'firebase/firestore'
import { db } from '@/lib/firebase'

/**
 * Returns true if the signed-in user has role === 'admin'
 * on their document in the registrations collection.
 */
export async function isAdminFromRegistration(userId: string, email?: string | null): Promise<boolean> {
  try {
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

    // Fallback: match by email if userId docs have no admin role
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
