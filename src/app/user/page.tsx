'use client'

import { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db, auth } from '@/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LayoutDashboard, FileText, User, Calendar, CheckCircle2 } from 'lucide-react'

export default function UserDashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [registration, setRegistration] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const unsubscribe = onAuthStateChanged(auth!, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        
        // Fetch user's registration data
        try {
          const q = query(
            collection(db, 'registrations'),
            where('userId', '==', currentUser.uid)
          )
          const querySnapshot = await getDocs(q)
          
          if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0]
            setRegistration({ id: doc.id, ...doc.data() })
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
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Dashboard</h2>
        <p className="mt-1 break-all text-sm text-gray-600">Welcome back, {user?.email}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Registration Status</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-gray-900 md:text-2xl">
              {registration ? 'Registered' : 'Not Registered'}
            </div>
            <p className="mt-1 text-xs text-gray-500">
              {registration ? 'You are registered for the conference' : 'Complete your registration'}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Paper Submissions</CardTitle>
            <FileText className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-gray-900 md:text-2xl">
              {registration?.presentingPaper ? '1' : '0'}
            </div>
            <p className="mt-1 text-xs text-gray-500">
              {registration?.presentingPaper ? 'Paper submitted' : 'No papers submitted'}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Category</CardTitle>
            <User className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-base font-bold leading-snug text-gray-900 md:text-lg" title={registration?.category}>
              {registration?.category || 'N/A'}
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Registration category
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Days Attending</CardTitle>
            <Calendar className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold capitalize text-gray-900 md:text-2xl">
              {registration?.daysAttending || 'N/A'}
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Conference attendance
            </p>
          </CardContent>
        </Card>
      </div>

      {registration && (
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Registration Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-500">Full Name</p>
                <p className="break-words text-sm text-gray-900">{registration.fullName}</p>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="break-all text-sm text-gray-900">{registration.email}</p>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="break-words text-sm text-gray-900">{registration.phone}</p>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-500">Affiliation</p>
                <p className="break-words text-sm text-gray-900">{registration.affiliation}</p>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-500">Country</p>
                <p className="break-words text-sm text-gray-900">{registration.country}</p>
              </div>
              {registration.paymentProofUrl && (
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-500">Payment Proof</p>
                  <p className="text-sm font-medium text-green-600">Uploaded</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
