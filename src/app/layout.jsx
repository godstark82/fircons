import './globals.css';
import Layout from '../components/layout/Layout';

export const metadata = {
  title: 'IS-A3M 2026',
  description: 'International Symposium on Applied Mathematics and Mathematical Modeling',
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
