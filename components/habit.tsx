'use client';
import { Card } from './ui/card';
import { CircleProgressBar } from './circle-progress-bar';
import { formatDate, getIcon } from '@/lib/utils';
import { useEffect, useMemo, useState } from 'react';
import { HabitItemProps } from '@/types';
import { createOrUpdateLog } from '@/actions/logs.actions';
import { useToast } from './ui/use-toast';
import { useFilteredLogs } from '@/hooks/useFilteredLogs';
import { EditHabitSidebar } from './edit-habit-sidebar';

export const Habit = ({ item, date }: HabitItemProps) => {
  const { toast } = useToast();

  const Icon = getIcon(item.habitIcon);

  const filteredLog = useFilteredLogs(
    item.logs!,
    date,
    item.habitFrequency,
    item.habitGoal,
  );

  const [optimisticProgress, setOptimisticProgress] = useState(
    filteredLog?.habitCurrentCount || 0,
  );

  const currentHabitGoal = filteredLog?.habitGoal || item.habitGoal;

  const onProgressIncrease = async () => {
    if (optimisticProgress >= currentHabitGoal || !date || !item.$id) {
      setOptimisticProgress(item.habitGoal);
    } else {
      setOptimisticProgress((prev) => prev + 1);
      const response = await createOrUpdateLog({
        habitId: item.$id!,
        date,
      });
      if (response.error) {
        setOptimisticProgress(optimisticProgress - 1);
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

  const isButtonDisabled = useMemo(
    () => formatDate(date!) > formatDate(new Date()),
    [date],
  );

  useEffect(() => {
    setOptimisticProgress(filteredLog?.habitCurrentCount || 0);
  }, [filteredLog?.habitCurrentCount]);

  // const currentProgress = filteredLog?.habitCurrentCount || 0;

  return (
    <Card className='w-full'>
      <div className='w-full p-4 flex flex-row items-center justify-between'>
        <EditHabitSidebar habit={item}>
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
        </EditHabitSidebar>
        <CircleProgressBar
          count={item.habitGoal || 0}
          habitCurrentCount={optimisticProgress}
          onProgressIncrease={onProgressIncrease}
          isButtonDisabled={isButtonDisabled || false}
        />
      </div>
    </Card>
  );
};
