import { Inter } from 'next/font/google';
import './globals.css';
import LayoutWrapper from '../components/LayoutWrapper';
import Layout from '../components/layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'IC-AMESF 2026',
  description: 'International Conference on Advanced Materials & Engineering for Sustainable Future',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}