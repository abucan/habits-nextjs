'use server';

import { createAdminClient } from '@/appwrite/appwrite';
import {
  formatDate,
  getMonthStartEnd,
  getWeekStartEnd,
} from '@/lib/utils';
import { CreateOrUpdateLogResponse, Log } from '@/types';
import { ID } from 'node-appwrite';
import { getLoggedInUser } from './auth.actions';
import { revalidatePath } from 'next/cache';

const {
  NEXT_APPWRITE_DATABASE_ID: DATABASE_ID,
  NEXT_APPWRITE_HABITS_COLLECTION_ID: HABITS_ID,
  NEXT_APPWRITE_LOGS_COLLECTION_ID: LOGS_ID,
} = process.env;

export const createOrUpdateLog = async ({
  habitId,
  date,
}: {
  habitId: string;
  date: Date;
}): Promise<CreateOrUpdateLogResponse> => {
  try {
    const { database } = await createAdminClient();
    const user = await getLoggedInUser();

    if (!user)
      return { error: 'You are not authorized to view this!' };

    const habit = await database.getDocument(
      DATABASE_ID!,
      HABITS_ID!,
      habitId,
    );

    if (!habit) return { error: 'Habit not found!' };

    let dateFilter = formatDate(date).trim();
    let logCondition;

    if (habit?.habitFrequency === 'Daily') {
      logCondition = (log: Log) =>
        formatDate(log.date).trim() === dateFilter;
    } else if (habit?.habitFrequency === 'Weekly') {
      const { start, end } = getWeekStartEnd(date);
      logCondition = (log: Log) => {
        const logDate = new Date(log.date);
        return logDate >= start && logDate <= end;
      };
    } else if (habit?.habitFrequency === 'Monthly') {
      const { start, end } = getMonthStartEnd(date);
      logCondition = (log: Log) => {
        const logDate = new Date(log.date);
        return logDate >= start && logDate <= end;
      };
    }

    const currentLog = habit.logs && habit.logs.find(logCondition);

    if (currentLog) {
      await database.updateDocument(
        DATABASE_ID!,
        LOGS_ID!,
        currentLog.$id,
        {
          isCompleted:
            currentLog.habitCurrentCount + 1 === habit.habitGoal
              ? true
              : false,
          habitCurrentCount: currentLog.habitCurrentCount + 1,
        },
      );
      revalidatePath('/');
      return { data: 'Log updated!' };
    } else {
      console.log('Creating new log');
      await database.createDocument(
        DATABASE_ID!,
        LOGS_ID!,
        ID.unique(),
        {
          habitCurrentCount: 1,
          date,
          isCompleted: habit.habitGoal === 1 ? true : false,
          habitGoal: habit.habitGoal,
          habit: habit.$id,
        },
      );
      revalidatePath('/');
      return { data: 'Log updated!' };
    }
  } catch (error) {
    return { error: 'Something went wrong, please try again later.' };
  }
};
