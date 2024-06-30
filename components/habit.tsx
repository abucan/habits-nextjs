'use client';
import { Card } from './ui/card';
import { CircleProgressBar } from './circle-progress-bar';
import { getIcon } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { HabitItemProps } from '@/types';
import { createOrUpdateLog } from '@/actions/logs.actions';
import { useToast } from './ui/use-toast';

export const Habit = ({ habit, log, date }: HabitItemProps) => {
  const { toast } = useToast();
  const icon = getIcon(habit.habitIcon);
  const [progress, setProgress] = useState(
    log?.habitCurrentCount || 0,
  );

  const onProgressIncrease = async () => {
    if (progress >= habit.habitGoal) {
      return;
    } else {
      if (!habit.$id || !date) return;
      const response = await createOrUpdateLog({
        habitId: habit.$id!,
        date,
      });
      if (response.error) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
        });
      } else {
        toast({
          description: response.data,
        });
      }
      setProgress(progress + 1);
    }
  };

  useEffect(() => {
    setProgress(log?.habitCurrentCount || 0);
  }, [log?.habitCurrentCount]);

  return (
    <Card className='w-full max-w-md'>
      <div className='w-full p-4 flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-4'>
          <div className='rounded-full bg-gray-200 p-2 grid place-items-center'>
            {icon && icon({ className: 'h-6 w-6' })}
          </div>
          <div>
            <p className='font-medium'>{habit.habitName}</p>
            <p className='font-light text-[14px]'>
              Goal: {habit.habitGoal}{' '}
              <span className='lowercase'>{habit.habitUnit}</span>
            </p>
          </div>
        </div>
        <CircleProgressBar
          count={habit.habitGoal || 0}
          habitCurrentCount={progress}
          onProgressIncrease={onProgressIncrease}
        />
      </div>
    </Card>
  );
};
