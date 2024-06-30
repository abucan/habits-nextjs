'use client';
import { BadgePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { HabitForm } from './habit-form';
import { useState } from 'react';

export const AddHabitSidebar = ({ isHome }: { isHome?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {isHome ? (
          <Button size='sm' className='home-btn shrink-0 rounded-md'>
            Add Habit
          </Button>
        ) : (
          <Button
            variant='outline'
            size='icon'
            className='shrink-0 rounded-full'
          >
            <BadgePlus className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        )}
      </SheetTrigger>
      <SheetContent side='right' className='flex flex-col'>
        <HabitForm setIsOpen={setIsOpen} />
      </SheetContent>
    </Sheet>
  );
};
