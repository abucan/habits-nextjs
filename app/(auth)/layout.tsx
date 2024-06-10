import intro from '@/public/intro.png';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/logo';
import { getLoggedInUser } from '@/actions/auth.actions';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getLoggedInUser();
  if (user) redirect('/');

  return (
    <section className='w-full max-h-screen flex'>
      <div className='relative hidden items-center justify-center max-h-screen lg:flex flex-1'>
        <Image
          src={intro}
          alt='Intro BG'
          className='absolute inset-0 object-cover aspect-auto w-full h-full'
        />
        <div className='z-10 w-full max-w-md space-y-8'>
          <Logo isDark width={220} />
          <div className='flex flex-col space-y-4'>
            <h3 className='text-white text-3xl font-bold'>
              Start tracking your habits today.
            </h3>
            <p className='text-gray-300'>
              Create an account and get access to all features, no credit card
              required.
            </p>
            <Link href='/' className='link-btn self-start'>
              Visit Home
            </Link>
          </div>
        </div>
        <div className='custom-gradient' />
      </div>
      <div className='flex flex-1 items-center justify-center min-h-screen'>
        {children}
      </div>
    </section>
  );
}
