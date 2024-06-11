import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className='flex h-screen w-full'>
      <Navbar />
      <Sidebar />
      <div className='p-4 sm:ml-64 mt-14'>{children}</div>
    </section>
  );
}
