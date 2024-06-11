'use client';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { routes } from '@/lib/routes';
import { MobileSidebarItem } from './mobile-sidebar-item';
import { Logo } from './logo';

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
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size='sm' className='w-full'>
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
};
