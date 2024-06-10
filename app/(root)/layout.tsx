// import { getLoggedInUser } from '@/actions/auth.actions';
// import { redirect } from 'next/navigation';
import { SidebarMX } from '@/components/sidebar';

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className='w-full max-h-screen flex'>
      <SidebarMX />
    </section>
  );
}
