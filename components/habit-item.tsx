import { LucideBike } from 'lucide-react';
import { Card } from './ui/card';
import { CircleProgressBar } from './circle-progress-bar';
import { HabitProps } from '@/types';

export const HabitItem = (habit: HabitProps) => {
  const progress = 60;
  const strokeWidth = 10;
  const size = 100;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Card className='w-[400px] max-w-md'>
      <div className='w-full p-4 flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-4'>
          <div className='rounded-full bg-gray-200 p-2 grid place-items-center'>
            <LucideBike />
          </div>
          <div>
            <p className='font-medium'>{habit.habitName}</p>
            <p className='font-light text-[14px]'>
              Goal: {habit.habitGoal}{' '}
              <span className='lowercase'>{habit.habitUnit}</span>
            </p>
          </div>
        </div>
        <CircleProgressBar />
      </div>
    </Card>
  );
};
