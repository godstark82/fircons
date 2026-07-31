'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, FileText, LogOut, Shield, Menu, X, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { isAdminFromRegistration } from '@/lib/auth-helpers'
import { useEffect, useState } from 'react'

const menuItems = [
  { title: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { title: 'Registrations', icon: Users, href: '/admin/registrations' },
  { title: 'Submissions', icon: FileText, href: '/admin/submissions' },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !auth) return

    const checkAdminAndSetUser = async (currentUser: any) => {
      try {
        const isAdmin = await isAdminFromRegistration(currentUser.uid, currentUser.email)
        if (isAdmin) {
          setUser(currentUser)
        } else {
          router.push('/user')
        }
      } catch (error) {
        console.error('Error checking admin status:', error)
        router.push('/login')
      } finally {
        setLoading(false)
      }
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await checkAdminAndSetUser(currentUser)
      } else {
        router.push('/login')
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [router])

  const handleLogout = async () => {
    try {
      await signOut(auth!)
      sessionStorage.clear()
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex h-svh items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-primary" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) return null

  const SidebarNav = (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-gray-200 bg-white">
      <div className="flex items-center gap-2 border-b border-gray-200 p-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
          <Shield className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-gray-900">Admin Panel</p>
          <p className="truncate text-xs text-gray-500">{user?.email}</p>
        </div>
        <button
          type="button"
          className="rounded p-1 text-gray-500 hover:bg-gray-100 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? 'bg-primary/10 font-semibold text-primary'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className={`h-5 w-5 shrink-0 ${isActive ? 'text-primary' : 'text-gray-500'}`} />
              {item.title}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-gray-200 p-3">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 hover:bg-red-50 hover:text-red-600"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  )

  return (
    <div className="flex h-svh w-full overflow-hidden bg-gray-50">
      {/* Desktop sidebar */}
      <div className="hidden md:flex">{SidebarNav}</div>

      {/* Mobile overlay sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-y-0 left-0 z-10 shadow-xl">{SidebarNav}</div>
        </div>
      )}

      {/* Main content — always beside sidebar on desktop */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="flex h-14 shrink-0 items-center gap-3 border-b border-gray-200 bg-white px-4">
          <button
            type="button"
            className="rounded-md p-1.5 text-gray-700 hover:bg-gray-100 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="hidden h-5 w-px bg-gray-200 md:block" />
          <span className="text-sm font-semibold text-gray-900">
            {pathname === '/admin/submissions'
              ? 'Submissions'
              : pathname === '/admin/registrations'
                ? 'Registrations'
                : 'Dashboard'}
          </span>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-7xl p-4 md:p-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
