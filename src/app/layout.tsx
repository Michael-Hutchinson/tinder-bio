import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GoogleAnalytics from './GoogleAnalytics';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Generate your Tinder bio',
  description: 'Use AI to generate your Tinder bio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
