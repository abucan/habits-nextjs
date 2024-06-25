'use server';

import { createAdminClient } from '@/appwrite/appwrite';
import {
  formatDatabaseDate,
  formatDate,
  formatDateToISOString,
  parseStringify,
} from '@/lib/utils';
import { HabitProps, Log } from '@/types';
import { ID, Query } from 'node-appwrite';
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
}) => {
  try {
    const { database } = await createAdminClient();
    const user = await getLoggedInUser();

    if (!user) return null;

    const habit = await database.getDocument(DATABASE_ID!, HABITS_ID!, habitId);

    if (!habit) return null;

    const currentLog =
      habit.logs &&
      habit?.logs?.find(
        (log: Log) => formatDate(log.date).trim() === formatDate(date).trim()
      );

    if (currentLog) {
      await database.updateDocument(DATABASE_ID!, LOGS_ID!, currentLog.$id, {
        isCompleted:
          currentLog.habitCurrentCount + 1 === habit.habitGoal ? true : false,
        habitCurrentCount: currentLog.habitCurrentCount + 1,
      });
    } else {
      await database.createDocument(DATABASE_ID!, LOGS_ID!, ID.unique(), {
        habitCurrentCount: 1,
        date,
        isCompleted: habit.habitGoal === 1 ? true : false,
        habitGoal: habit.habitGoal,
        habit: habit.$id,
      });
    }
  } catch (error) {
    return null;
  }
};
