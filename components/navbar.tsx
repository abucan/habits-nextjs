import { getLoggedInUser } from '@/actions/auth.actions';
import { Logo } from './logo';
import { MobileSidebar } from './mobile-sidebar';
import { ModeToggle } from './mode-toggle';
import { UserButton } from './user-button';
import { AddHabitSidebar } from './add-habit-sidebar';

export const Navbar = async () => {
  const user = await getLoggedInUser();

  return (
    <header className='flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
      <div className='flex flex-row gap-4 items-center justify-center'>
        <MobileSidebar />
        <div className='md:hidden'>
          <Logo width={104} />
        </div>
      </div>
      <div className='flex gap-2'>
        <AddHabitSidebar />
        <ModeToggle />
        <UserButton user={user} />
      </div>
    </header>
  );
};
