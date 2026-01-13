// Force dynamic rendering for admin routes
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AdminLayout({ children }) {
  // This layout ensures admin routes bypass the main layout wrapper
  return <>{children}</>;
}

