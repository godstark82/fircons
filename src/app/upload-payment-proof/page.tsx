'use client'

import { useState } from 'react'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, query, where, getDocs, doc, updateDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { auth, db, storage } from '@/lib/firebase'
import { isPaymentVerified } from '@/lib/auth-helpers'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { AlertCircle, CheckCircle2, Loader2, Upload } from 'lucide-react'
import Link from 'next/link'
import { CONSTANTS } from '@/lib/constants'

export default function UploadPaymentProofPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({
    type: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: '', message: '' })

    if (!email || !password || !file) {
      setStatus({ type: 'error', message: 'Email, password, and payment screenshot are required.' })
      return
    }

    if (!auth) {
      setStatus({ type: 'error', message: 'Authentication is unavailable. Please refresh the page.' })
      return
    }

    setLoading(true)
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password)
      const user = credential.user

      const paymentStatus = await isPaymentVerified(user.uid, user.email)
      if (paymentStatus.verified) {
        await signOut(auth)
        setStatus({
          type: 'success',
          message: 'Your payment is already verified. You can log in to your user panel.',
        })
        return
      }

      const timestamp = Date.now()
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_')
      const fileName = `payment_proof_${timestamp}_${safeName}`
      const storageRef = ref(storage, `payment-proofs/${user.uid}/${fileName}`)
      await uploadBytes(storageRef, file)
      const fileUrl = await getDownloadURL(storageRef)

      const proofFields = {
        paymentProofUrl: fileUrl,
        paymentProofFileName: file.name,
        paymentProofStorageFileName: fileName,
        paymentProofUploadedAt: serverTimestamp(),
        paymentMethod: 'manual',
        payment_confirmed: false,
        status: 'pending',
      }

      await setDoc(
        doc(db, 'users', user.uid),
        {
          uid: user.uid,
          email: user.email,
          ...proofFields,
        },
        { merge: true }
      )

      const regQuery = query(collection(db, 'registrations'), where('userId', '==', user.uid))
      const regSnap = await getDocs(regQuery)
      if (!regSnap.empty) {
        await updateDoc(doc(db, 'registrations', regSnap.docs[0].id), proofFields)
      }

      await signOut(auth)
      setFile(null)
      setStatus({
        type: 'success',
        message:
          'Payment screenshot uploaded successfully. An admin will verify it soon. You can log in after verification.',
      })
    } catch (error: any) {
      console.error(error)
      if (auth?.currentUser) {
        try {
          await signOut(auth)
        } catch {
          /* ignore */
        }
      }
      let message = error?.message || 'Failed to upload payment proof.'
      if (error?.code === 'auth/invalid-credential' || error?.code === 'auth/wrong-password') {
        message = 'Invalid email or password.'
      } else if (error?.code === 'auth/user-not-found') {
        message = 'No account found with this email. Please register first.'
      }
      setStatus({ type: 'error', message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Upload Payment Proof</CardTitle>
          <CardDescription>
            Sign in with your registration credentials to upload your bank-transfer screenshot for {CONSTANTS.CONFERENCE_ABBR}.
            This does not unlock login until an admin verifies your payment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Registered Email *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="proof">Payment Screenshot (image/PDF) *</Label>
              <Input
                id="proof"
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                required
              />
            </div>

            {status.message && (
              <div
                className={`flex items-start gap-2 p-3 rounded-lg border text-sm ${
                  status.type === 'error'
                    ? 'bg-destructive/10 border-destructive/20 text-destructive'
                    : 'bg-green-50 border-green-200 text-green-800'
                }`}
              >
                {status.type === 'error' ? (
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                )}
                <p>{status.message}</p>
              </div>
            )}

            <Button type="submit" disabled={loading} className="w-full" size="lg">
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Uploading...
                </span>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Screenshot
                </>
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already verified?{' '}
              <Link href="/login" className="text-primary hover:underline font-medium">
                Login
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
