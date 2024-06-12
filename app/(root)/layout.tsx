import { Sidebar } from '@/components/sidebar';
import { Navbar } from '@/components/navbar';
import { getLoggedInUser } from '@/actions/auth.actions';
import { redirect } from 'next/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { RightSidebar } from '@/components/right-sidebar';

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getLoggedInUser();
  if (!user) redirect('/login');

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr_220px] lg:grid-cols-[280px_1fr_280px]'>
        <Sidebar />
        <div className='flex flex-col'>
          <Navbar />
          <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
            <div>{children}</div>
          </main>
        </div>
        <RightSidebar />
      </div>
    </ThemeProvider>
  );
}
