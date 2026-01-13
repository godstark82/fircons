export default function AdminLayout({ children }) {
  // This layout ensures admin routes bypass the main layout wrapper
  return <>{children}</>;
}

