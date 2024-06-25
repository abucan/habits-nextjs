'use client';
import { HabitProps, HabitsContainerProps } from '@/types';
import { Avatar } from 'flowbite-react';
import { HabitItem } from './habit-item';
import { Calendar } from './ui/calendar';
import { useCallback, useEffect, useState } from 'react';
import { formatDateToISOString } from '@/lib/utils';

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
        ...habit,
        logs: filteredLogs,
      };
    });
    setHabitsWithLogs(habitsWithLogsForDate);
  }, [date, habits]);

  useEffect(() => {
    changeHabits();
  }, [changeHabits, date]);

  return (
    <div
      className='flex flex-row items-center justify-between w-full'
      onClick={() => console.log('clicked')}
    >
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
        {habitsWithLogs?.map((habit: HabitProps) => {
          return (
            <HabitItem
              key={habit.$id}
              habit={habit}
              log={habit.logs[0]}
              date={date}
            />
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
