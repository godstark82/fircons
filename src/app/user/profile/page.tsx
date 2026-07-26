'use client'

import { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db, auth } from '@/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { User, Mail, Phone, Building2, Globe, Calendar, FileText } from 'lucide-react'

export default function UserProfilePage() {
  const [registration, setRegistration] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined' || !auth) return

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const q = query(
            collection(db, 'registrations'),
            where('userId', '==', currentUser.uid)
          )
          const querySnapshot = await getDocs(q)

          if (!querySnapshot.empty) {
            const docSnap = querySnapshot.docs[0]
            setRegistration({ id: docSnap.id, ...docSnap.data() })
          }
        } catch (error) {
          console.error('Error fetching registration:', error)
        }
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="flex h-40 items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-primary"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">My Profile</h2>
        <p className="mt-1 text-sm text-gray-600">View your registration profile information</p>
      </div>

      {registration ? (
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <User className="h-5 w-5 text-primary" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <User className="h-4 w-4 shrink-0" />
                  Full Name
                </div>
                <p className="break-words text-sm font-medium text-gray-900">{registration.fullName}</p>
              </div>
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Mail className="h-4 w-4 shrink-0" />
                  Email Address
                </div>
                <p className="break-all text-sm font-medium text-gray-900">{registration.email}</p>
              </div>
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Phone className="h-4 w-4 shrink-0" />
                  Phone Number
                </div>
                <p className="break-words text-sm font-medium text-gray-900">{registration.phone}</p>
              </div>
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Building2 className="h-4 w-4 shrink-0" />
                  Affiliation
                </div>
                <p className="break-words text-sm font-medium text-gray-900">{registration.affiliation}</p>
              </div>
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Globe className="h-4 w-4 shrink-0" />
                  Country
                </div>
                <p className="break-words text-sm font-medium text-gray-900">{registration.country}</p>
              </div>
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FileText className="h-4 w-4 shrink-0" />
                  Registration Category
                </div>
                <p className="break-words text-sm font-medium text-gray-900">{registration.category}</p>
              </div>
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4 shrink-0" />
                  Days Attending
                </div>
                <p className="break-words text-sm font-medium capitalize text-gray-900">{registration.daysAttending}</p>
              </div>
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FileText className="h-4 w-4 shrink-0" />
                  Paper Submission
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {registration.presentingPaper ? 'Yes' : 'No'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-white shadow-sm">
          <CardContent className="pt-6">
            <p className="text-center text-gray-600">
              No registration found. Please complete your registration first.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
