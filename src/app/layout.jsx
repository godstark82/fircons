import './globals.css';
import Layout from '../components/layout/Layout';

export const metadata = {
  title: 'IS-FMS 2026',
  description: 'International Symposium on Frontiers in Mathematical Sciences',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
