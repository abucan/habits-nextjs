import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { getLoggedInUser } from '@/actions/auth.actions';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daily',
  description:
    'Daily is a habit tracking app that helps you build good habits and break bad ones.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getLoggedInUser();
  // if (!user) redirect('/login');

  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
