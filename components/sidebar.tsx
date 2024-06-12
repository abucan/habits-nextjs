'use client';
import { routes } from '@/lib/routes';
import { SidebarItem } from './sidebar-item';
import { Logo } from './logo';
import { SidebarCTA } from './sidebar-cta';

export const Sidebar = () => {
  return (
    <div className='hidden border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Logo width={128} />
        </div>
        <div className='flex-1 mt-4'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4 gap-1'>
            {routes.map((item) => {
              return <SidebarItem key={item.id} {...item} />;
            })}
          </nav>
        </div>
        <div className='mt-auto p-4'>
          <SidebarCTA />
        </div>
      </div>
    </div>
  );
};
