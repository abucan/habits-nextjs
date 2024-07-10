'use client';
import { Card } from './ui/card';
import { getIcon } from '@/lib/utils';
import { ArchivedHabitItemProps } from '@/types';
import { Button } from './ui/button';
import { ArchiveRestore } from 'lucide-react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { archiveHabit } from '@/actions/habits.actions';
import { useToast } from './ui/use-toast';

export const ArchivedHabit = ({ item }: ArchivedHabitItemProps) => {
  const Icon = getIcon(item.habitIcon);
  const { toast } = useToast();

  async function onUnArchive(itemId: string) {
    try {
      const response = await archiveHabit(itemId, false);
      if (response) {
        toast({ description: response.data });
      }
    } catch (error) {}
  }

  return (
    <Card className='w-full'>
      <div className='w-full p-4 flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-4'>
          <div className='rounded-full bg-gray-200 p-2 grid place-items-center cursor-pointer'>
            {Icon && Icon({ className: 'h-6 w-6' })}
          </div>
          <div>
            <p className='font-medium'>{item.habitName}</p>
            <p className='font-light text-[14px]'>
              Goal: {item.habitGoal}{' '}
              <span className='lowercase'>{item.habitUnit}</span>
            </p>
          </div>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant={'ghost'}>
              <ArchiveRestore />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action will restore the habit.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => onUnArchive(item.$id!)}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Card>
  );
};
