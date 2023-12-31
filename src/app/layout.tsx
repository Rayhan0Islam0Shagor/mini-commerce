import Navbar from '@/components/Layout/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Layout/Footer';
import CartProvider from '@/context/Cart';
import ToastProvider from '@/components/common/ToastProvider';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mini Commerce',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US/',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastProvider />
        <CartProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
