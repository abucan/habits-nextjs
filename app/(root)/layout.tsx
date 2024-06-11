import { Sidebar } from '@/components/sidebar';
import { Navbar } from '@/components/navbar';

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <Sidebar />
      <div className='flex flex-col'>
        <Navbar />
        <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
          <div className='flex items-center'>
            <h1 className='text-lg font-semibold md:text-2xl'>Inventory</h1>
          </div>
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
}
