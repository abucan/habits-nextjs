'use client';
import { HabitProps, HabitsContainerProps } from '@/types';
import { Avatar } from 'flowbite-react';
import { HabitItem } from './habit-item';
import { Calendar } from './ui/calendar';
import { useCallback, useEffect, useState } from 'react';
import { Card } from './ui/card';
import { CircleProgressBar } from './circle-progress-bar';
import { formatDateToISOString, getIcon } from '@/lib/utils';

export const HabitsList = ({ habits }: HabitsContainerProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [habitsWithLogs, setHabitsWithLogs] = useState<any>([]);

  const changeHabits = useCallback(() => {
    if (!date) return;

    const selectedDateString = formatDateToISOString(date);

    const habitsWithLogsForDate = habits.documents.map((habit: HabitProps) => {
      const filteredLogs = habit.logs.filter(
        (log) => log.date.toString().split('T')[0] === selectedDateString
      );
      return {
        logs: filteredLogs,
      };
    });
    setHabitsWithLogs(habitsWithLogsForDate);
  }, [date, habits]);

  useEffect(() => {
    changeHabits();
  }, [changeHabits, date]);

  return (
    <div className='flex flex-row items-center justify-between w-full'>
      <div className='flex flex-col gap-8 items-start justify-center w-full'>
        <div className='flex flex-row items-center justify-center gap-4'>
          <Avatar
            img='https://dummyimage.com/200x200/000/fff&text=AB'
            rounded
            bordered
          />
          <h2 className='font-bold text-xl'>Hi, User</h2>
        </div>
        <p className='text-muted-foreground uppercase text-2xl font-thin'>
          Your Habits
        </p>
        {habits?.total > 0 &&
          habits?.documents?.map((habit: HabitProps, ind: any) => {
            const fuck = habitsWithLogs[ind]?.logs[0]?.habitCurrentCount || 0;
            const icon = getIcon(habit.habitIcon);

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
                  <CircleProgressBar count={10} habitCurrentCount={fuck} />
                </div>
              </Card>
            );
          })}
      </div>
      <Calendar
        mode='single'
        className='rounded-md border flex items-center justify-center bg-gray-50'
        selected={date}
        onSelect={setDate}
      />
    </div>
  );
};
