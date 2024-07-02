'use client';
import { HabitProps, HabitsContainerProps, Log } from '@/types';
import { Habit } from './habit';
import { Calendar } from './ui/calendar';
import { useCallback, useEffect, useState } from 'react';
import { formatDate } from '@/lib/utils';
import { HomeUserWidget } from './home-user-widget';

export const HabitsContainer = ({ data, user }: HabitsContainerProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [habitsWithLogs, setHabitsWithLogs] = useState<any>(data?.documents);

  const changeHabits = useCallback(() => {
    if (!date) return;

    const selectedDateString = formatDate(date);

    const habitsWithLogsForDate = data?.documents.map((habit) => {
      const filteredLogs = habit.logs.filter(
        (log: Log) => formatDate(log.date) === selectedDateString
      );
      return {
        ...habit,
        logs: filteredLogs,
      };
    });
    setHabitsWithLogs(habitsWithLogsForDate);
  }, [date, data]);

  useEffect(() => {
    changeHabits();
  }, [changeHabits, date]);

  return (
    <div className='flex flex-row w-full justify-between gap-8'>
      <div className='flex flex-col gap-8 w-full'>
        <HomeUserWidget user={user} />
        <div>
          <span className='text-muted-foreground uppercase text-2xl font-thin'>
            Your Habits
          </span>
        </div>
        <div className='grid grid-cols-2 gap-8'>
          {habitsWithLogs?.map((habit: HabitProps) => {
            return (
              <Habit
                key={habit.$id}
                habit={habit}
                log={habit.logs[0]}
                date={date}
              />
            );
          })}
        </div>
      </div>
      <Calendar
        mode='single'
        className='rounded-md border flex items-center justify-center bg-gray-50 w-[340px]'
        selected={date}
        onSelect={setDate}
      />
    </div>
  );
};
