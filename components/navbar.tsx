import { Logo } from './logo';
import { MobileSidebar } from './mobile-sidebar';
import { UserButton } from './user-button';

export const Navbar = () => {
  return (
    <header className='flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
      <div className='flex flex-row gap-4 items-center justify-center'>
        <MobileSidebar />
        <div className='md:hidden'>
          <Logo width={104} />
        </div>
      </div>
      <UserButton />
    </header>
  );
};
