'use client';
import { HabitProps, HabitsContainerProps } from '@/types';
import { Avatar } from 'flowbite-react';
import { HabitItem } from './habit-item';
import { Calendar } from './ui/calendar';
import { useEffect, useMemo, useState } from 'react';

export const HabitsContainer = ({ habits }: HabitsContainerProps) => {
  const [date, setDate] = useState<Date>();
  const [filteredHabits, setFilteredHabits] = useState<any>([]);

  useEffect(() => {
    if (habits) {
      const updatedFilteredHabits = habits?.documents?.map(
        (habit: HabitProps) => {
          const filteredLogs = habit?.logs.find(
            (log) =>
              log.date.toString().split('T')[0] ===
              date?.toISOString().split('T')[0],
          );
          console.log('filteredLogs', filteredLogs);
          return {
            ...habit,
            logs:
              filteredLogs !== undefined
                ? filteredLogs
                : { habitCurrentCount: 0 },
          };
        },
      );
      setFilteredHabits(updatedFilteredHabits);
    }
  }, [habits, date]);

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
          filteredHabits.map((habit: HabitProps) => {
            return <HabitItem key={habit.$id} habit={habit} />;
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
