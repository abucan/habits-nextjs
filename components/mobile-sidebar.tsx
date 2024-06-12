'use client';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { routes } from '@/lib/routes';
import { MobileSidebarItem } from './mobile-sidebar-item';
import { Logo } from './logo';
import { SidebarCTA } from './sidebar-cta';

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='flex flex-col'>
        <nav className='grid gap-2 text-lg font-medium'>
          <div className='mb-2'>
            <Logo />
          </div>
          {routes.map((item) => {
            return <MobileSidebarItem key={item.id} {...item} />;
          })}
        </nav>
        <div className='mt-auto'>
          <SidebarCTA />
        </div>
      </SheetContent>
    </Sheet>
  );
};
