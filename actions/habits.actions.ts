'use server';

import { createAdminClient } from '@/appwrite/appwrite';
import { parseStringify } from '@/lib/utils';
import { HabitProps, Log } from '@/types';
import { ID, Query } from 'node-appwrite';
import { getLoggedInUser } from './auth.actions';
import { revalidatePath } from 'next/cache';

const {
  NEXT_APPWRITE_DATABASE_ID: DATABASE_ID,
  NEXT_APPWRITE_HABITS_COLLECTION_ID: HABITS_ID,
  NEXT_APPWRITE_LOGS_COLLECTION_ID,
} = process.env;

export const createHabit = async (values: HabitProps) => {
  try {
    const { database } = await createAdminClient();

    const user = await getLoggedInUser();

    const habit = await database.createDocument(
      DATABASE_ID!,
      HABITS_ID!,
      ID.unique(),
      {
        userId: user.$id,
        ...values,
      },
    );
    revalidatePath('/');
    return parseStringify(habit);
  } catch (error) {
    return null;
  }
};

export const getHabits = async () => {
  try {
    const { database } = await createAdminClient();

    const user = await getLoggedInUser();

    const habits = await database.listDocuments(
      DATABASE_ID!,
      HABITS_ID!,
      [Query.equal('userId', user.$id)],
    );

    // const selectedDateString = selectedDate
    //   .toISOString()
    //   .split('T')[0];

    // const habitsWithLogsForDate = habits.documents.map((habit) => {
    //   const filteredLogs = habit.logs.filter(
    //     (log: Log) =>
    //       log.date.toString().split('T')[0] === selectedDateString,
    //   );
    //   return {
    //     ...habit,
    //     logs: filteredLogs,
    //   };
    // });

    // return parseStringify({
    //   total: habits.total,
    //   documents: habitsWithLogsForDate,
    // });

    return parseStringify(habits);
  } catch (error) {
    return null;
  }
};
