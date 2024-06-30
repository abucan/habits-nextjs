'use server';

import { createAdminClient } from '@/appwrite/appwrite';
import { parseStringify } from '@/lib/utils';
import { GetHabitsResponse, HabitProps, Log } from '@/types';
import { ID, Query } from 'node-appwrite';
import { getLoggedInUser } from './auth.actions';
import { revalidatePath } from 'next/cache';

const {
  NEXT_APPWRITE_DATABASE_ID: DATABASE_ID,
  NEXT_APPWRITE_HABITS_COLLECTION_ID: HABITS_ID,
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

export const getHabits = async (): Promise<GetHabitsResponse> => {
  try {
    const { database } = await createAdminClient();

    const user = await getLoggedInUser();

    if (!user) {
      return { error: 'You are not authorized to view this!' };
    }

    const habits = await database.listDocuments(
      DATABASE_ID!,
      HABITS_ID!,
      [Query.equal('userId', user.$id)],
    );

    if (habits.total === 0) {
      return { error: 'You have no habits. Start by adding one!' };
    }

    return { data: habits };
  } catch (error) {
    return { error: 'Something went wrong, please try again later.' };
  }
};
