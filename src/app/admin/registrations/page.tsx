'use client'

import { useEffect, useMemo, useState } from 'react'
import { collection, getDocs, doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db, auth } from '@/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Search,
  Eye,
  CheckCircle2,
  Clock,
  Mail,
  User,
  Tag,
  Loader2,
  ExternalLink,
} from 'lucide-react'

type Registration = {
  id: string
  userId?: string
  fullName?: string
  name?: string
  email?: string
  phone?: string
  affiliation?: string
  country?: string
  category?: string
  role?: string
  paymentProofUrl?: string
  paymentProofFileName?: string
  payment_confirmed?: boolean
  payment_confirmed_at?: any
  status?: string
  registeredAt?: any
}

export default function AdminRegistrationsPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<'all' | 'pending' | 'verified'>('all')
  const [selected, setSelected] = useState<Registration | null>(null)
  const [verifying, setVerifying] = useState(false)

  const fetchRegistrations = async () => {
    setLoading(true)
    try {
      const snapshot = await getDocs(collection(db, 'registrations'))
      const data = snapshot.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .filter((r: any) => r.role !== 'admin') as Registration[]
      data.sort((a, b) => {
        const aPending = a.payment_confirmed ? 1 : 0
        const bPending = b.payment_confirmed ? 1 : 0
        if (aPending !== bPending) return aPending - bPending
        return (a.fullName || a.name || '').localeCompare(b.fullName || b.name || '')
      })
      setRegistrations(data)
    } catch (error) {
      console.error('Error fetching registrations:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined' || !auth) return
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await fetchRegistrations()
      } else {
        setLoading(false)
      }
    })
    return () => unsubscribe()
  }, [])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return registrations.filter((r) => {
      if (filter === 'pending' && r.payment_confirmed) return false
      if (filter === 'verified' && !r.payment_confirmed) return false
      if (!q) return true
      return (
        (r.fullName || r.name || '').toLowerCase().includes(q) ||
        (r.email || '').toLowerCase().includes(q) ||
        (r.category || '').toLowerCase().includes(q) ||
        (r.affiliation || '').toLowerCase().includes(q)
      )
    })
  }, [registrations, search, filter])

  const pendingCount = registrations.filter((r) => !r.payment_confirmed).length
  const verifiedCount = registrations.filter((r) => r.payment_confirmed).length

  const handleVerify = async (registration: Registration, confirmed: boolean) => {
    setVerifying(true)
    try {
      await updateDoc(doc(db, 'registrations', registration.id), {
        payment_confirmed: confirmed,
        payment_confirmed_at: confirmed ? serverTimestamp() : null,
        status: confirmed ? 'active' : 'pending',
      })

      if (registration.userId) {
        try {
          await updateDoc(doc(db, 'users', registration.userId), {
            payment_confirmed: confirmed,
            payment_confirmed_at: confirmed ? serverTimestamp() : null,
            status: confirmed ? 'active' : 'pending',
          })
        } catch (error) {
          console.warn('Could not update users collection:', error)
        }
      }

      await fetchRegistrations()
      setSelected((prev) =>
        prev && prev.id === registration.id
          ? { ...prev, payment_confirmed: confirmed, status: confirmed ? 'active' : 'pending' }
          : prev
      )
    } catch (error) {
      console.error('Error verifying payment:', error)
      alert('Failed to update verification status.')
    } finally {
      setVerifying(false)
    }
  }

  const isImageProof = (url?: string, fileName?: string) => {
    const value = `${fileName || ''} ${url || ''}`.toLowerCase()
    return /\.(png|jpe?g|gif|webp|bmp)(\?|$)/.test(value)
  }

  if (loading) {
    return (
      <div className="flex h-40 items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-primary" />
          <p className="text-gray-600">Loading registrations...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Registrations</h2>
        <p className="mt-1 text-sm text-gray-600">
          Review payment screenshots and verify registrations for login access
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{registrations.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Verification</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">{pendingCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Verified</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{verifiedCount}</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            className="pl-9"
            placeholder="Search name, email, category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {(['all', 'pending', 'verified'] as const).map((key) => (
            <Button
              key={key}
              variant={filter === key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(key)}
            >
              {key === 'all' ? 'All' : key === 'pending' ? 'Pending' : 'Verified'}
            </Button>
          ))}
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Registrant
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Payment Proof
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {filtered.map((registration) => (
                  <tr key={registration.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <div className="font-medium text-gray-900">
                        {registration.fullName || registration.name || '—'}
                      </div>
                      <div className="text-sm text-gray-500">{registration.email}</div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700">
                      {registration.category || '—'}
                    </td>
                    <td className="px-4 py-4">
                      {registration.paymentProofUrl ? (
                        <button
                          type="button"
                          onClick={() => setSelected(registration)}
                          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                        >
                          <Eye className="h-4 w-4" />
                          View screenshot
                        </button>
                      ) : (
                        <span className="text-sm font-medium text-orange-600">Not uploaded</span>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      {registration.payment_confirmed ? (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          Verified
                        </Badge>
                      ) : (
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                          <Clock className="mr-1 h-3 w-3" />
                          Pending
                        </Badge>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelected(registration)}
                        >
                          Details
                        </Button>
                        <Button
                          size="sm"
                          disabled={verifying || (!registration.paymentProofUrl && !registration.payment_confirmed)}
                          onClick={() =>
                            handleVerify(registration, !registration.payment_confirmed)
                          }
                          className={
                            registration.payment_confirmed
                              ? 'bg-gray-700 hover:bg-gray-800'
                              : 'bg-green-600 hover:bg-green-700'
                          }
                        >
                          {verifying ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : registration.payment_confirmed ? (
                            'Revoke'
                          ) : (
                            'Verify'
                          )}
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <p className="py-10 text-center text-gray-500">No registrations found.</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Registration & Payment Proof</DialogTitle>
            <DialogDescription>
              Review the payment screenshot and verify this registration to allow login.
            </DialogDescription>
          </DialogHeader>

          {selected && (
            <div className="space-y-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border p-3">
                  <div className="mb-1 flex items-center gap-2 text-xs font-medium uppercase text-gray-500">
                    <User className="h-3.5 w-3.5" /> Name
                  </div>
                  <p className="font-medium">{selected.fullName || selected.name || '—'}</p>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="mb-1 flex items-center gap-2 text-xs font-medium uppercase text-gray-500">
                    <Mail className="h-3.5 w-3.5" /> Email
                  </div>
                  <p className="font-medium break-all">{selected.email || '—'}</p>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="mb-1 flex items-center gap-2 text-xs font-medium uppercase text-gray-500">
                    <Tag className="h-3.5 w-3.5" /> Category
                  </div>
                  <p className="font-medium">{selected.category || '—'}</p>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="mb-1 text-xs font-medium uppercase text-gray-500">Status</div>
                  <p className="font-medium">
                    {selected.payment_confirmed ? 'Verified — login allowed' : 'Pending verification'}
                  </p>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-gray-900">Payment Screenshot</h3>
                  {selected.paymentProofUrl && (
                    <a
                      href={selected.paymentProofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Open full size <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>

                {selected.paymentProofUrl ? (
                  <div className="space-y-2">
                    {selected.paymentProofFileName && (
                      <p className="text-sm text-gray-500">{selected.paymentProofFileName}</p>
                    )}
                    {isImageProof(selected.paymentProofUrl, selected.paymentProofFileName) ? (
                      <img
                        src={selected.paymentProofUrl}
                        alt="Payment screenshot"
                        className="max-h-[420px] w-full rounded-md border object-contain bg-gray-50"
                      />
                    ) : (
                      <div className="rounded-md border bg-gray-50 p-6 text-center">
                        <p className="mb-3 text-sm text-gray-600">
                          This proof is not a previewable image (likely PDF).
                        </p>
                        <Button asChild>
                          <a href={selected.paymentProofUrl} target="_blank" rel="noopener noreferrer">
                            Open payment proof
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-orange-600 font-medium">
                    No payment screenshot uploaded for this registration.
                  </p>
                )}
              </div>
            </div>
          )}

          <DialogFooter className="gap-2 sm:gap-2">
            <Button variant="outline" onClick={() => setSelected(null)}>
              Close
            </Button>
            {selected && (
              <Button
                disabled={verifying || (!selected.paymentProofUrl && !selected.payment_confirmed)}
                onClick={() => handleVerify(selected, !selected.payment_confirmed)}
                className={
                  selected.payment_confirmed
                    ? 'bg-gray-700 hover:bg-gray-800'
                    : 'bg-green-600 hover:bg-green-700'
                }
              >
                {verifying ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Saving...
                  </span>
                ) : selected.payment_confirmed ? (
                  'Revoke Verification'
                ) : (
                  'Verify Registration'
                )}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
