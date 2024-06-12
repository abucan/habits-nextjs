'use client';
import { BadgePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HabitForm } from './habit-form';

export const AddHabitSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon' className='shrink-0 rounded-full'>
          <BadgePlus className='h-5 w-5' />
          <span className='sr-only'>Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right' className='flex flex-col'>
        <HabitForm />
      </SheetContent>
    </Sheet>
  );
};
