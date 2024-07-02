'use client';
import { Card } from './ui/card';
import { CircleProgressBar } from './circle-progress-bar';
import { getIcon } from '@/lib/utils';
import { useEffect, useMemo, useOptimistic, useState } from 'react';
import { HabitItemProps } from '@/types';
import { createOrUpdateLog } from '@/actions/logs.actions';
import { useToast } from './ui/use-toast';

export const Habit = ({ habit, log, date }: HabitItemProps) => {
  const { toast } = useToast();

  const icon = getIcon(habit.habitIcon);

  const [optimisticProgress, setOptimisticProgress] = useOptimistic(
    log?.habitCurrentCount || 0,
    (_, newValue: any) => newValue
  );

  const onProgressIncrease = async () => {
    if (optimisticProgress >= habit.habitGoal) {
      return;
    } else {
      if (!habit.$id || !date) return;
      setOptimisticProgress(optimisticProgress + 1);
      const response = await createOrUpdateLog({
        habitId: habit.$id!,
        date,
      });
      if (response.error) {
        setOptimisticProgress(optimisticProgress);
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
    }
  };

  const renderLogs = useMemo(() => {
    if (!date) return;
    const today = date;
    let filteredLogs = habit.logs;

    if (habit.habitFrequency === 'Daily') {
      filteredLogs = habit.logs.filter(
        (log) => new Date(log.date).toDateString() === today.toDateString()
      );
    } else if (habit.habitFrequency === 'Weekly') {
      const weekStart = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - today.getDay()
      );
      const weekEnd = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + (6 - today.getDay())
      );
      filteredLogs = habit.logs.filter((log) => {
        const logDate = new Date(log.date);
        return logDate >= weekStart && logDate <= weekEnd;
      });
    } else if (habit.habitFrequency === 'Monthly') {
      const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
      const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      filteredLogs = habit.logs.filter((log) => {
        const logDate = new Date(log.date);
        return logDate >= monthStart && logDate <= monthEnd;
      });
    }
    return filteredLogs;
  }, [habit.logs, date, habit.habitFrequency]);
  console.log(renderLogs);

  useEffect(() => {
    setOptimisticProgress(log?.habitCurrentCount || 0);
  }, [log?.habitCurrentCount, setOptimisticProgress]);

  return (
    <Card className='w-full'>
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
          habitCurrentCount={optimisticProgress}
          onProgressIncrease={onProgressIncrease}
        />
      </div>
    </Card>
  );
};
