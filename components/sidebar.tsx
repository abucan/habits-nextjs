'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { routes } from '@/lib/routes';
import { SidebarItem } from './sidebar-item';
import { Logo } from './logo';

export const Sidebar = () => {
  return (
    <div className='hidden border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Logo width={100} />
        </div>
        <div className='flex-1 mt-2'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4 gap-1'>
            {routes.map((item) => {
              return <SidebarItem key={item.id} {...item} />;
            })}
          </nav>
        </div>
        <div className='mt-auto p-4'>
          <Card x-chunk='dashboard-02-chunk-0'>
            <CardHeader className='p-2 pt-0 md:p-4'>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
              <Button size='sm' className='w-full'>
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
