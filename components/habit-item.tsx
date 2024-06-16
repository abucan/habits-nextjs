import { Card } from './ui/card';
import { CircleProgressBar } from './circle-progress-bar';
import { HabitProps } from '@/types';
import { getIcon } from '@/lib/utils';

export const HabitItem = (habit: HabitProps) => {
  const icon = getIcon(habit.habitIcon);

  return (
    <Card className='w-[400px] max-w-md'>
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
        <CircleProgressBar count={habit.habitGoal} />
      </div>
    </Card>
  );
};
