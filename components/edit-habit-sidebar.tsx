'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HabitForm } from './habit-form';
import { useState } from 'react';
import { HabitProps } from '@/types';

export const EditHabitSidebar = ({
  children,
  habit,
}: {
  children: React.ReactNode;
  habit: HabitProps;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side='right' className='flex flex-col'>
        <HabitForm setIsOpen={setIsOpen} habit={habit} isEdit />
      </SheetContent>
    </Sheet>
  );
};
