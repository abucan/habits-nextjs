'use client';
import { HabitsContainerProps, Log } from '@/types';
import { Habit } from './habit';
import { Calendar } from './ui/calendar';
import { HomeUserWidget } from './home-user-widget';
import { useState } from 'react';
import { formatDate } from '@/lib/utils';

export const HabitsContainer = ({ data, user }: HabitsContainerProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

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
          {data?.documents?.map((item: any) => {
            if (date && formatDate(item.$createdAt) > formatDate(date)) return;
            return <Habit key={item.$id} item={item} date={date} />;
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
