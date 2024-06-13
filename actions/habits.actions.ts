'use server';

import { createAdminClient } from '@/appwrite/appwrite';
import { parseStringify } from '@/lib/utils';
import { CreateHabitProps } from '@/types';
import { ID } from 'node-appwrite';
import { getLoggedInUser } from './auth.actions';
import { revalidatePath } from 'next/cache';

const {
  NEXT_APPWRITE_DATABASE_ID: DATABASE_ID,
  NEXT_APPWRITE__HABITS_COLLECTION_ID: HABITS_ID,
} = process.env;

export const createHabit = async (values: CreateHabitProps) => {
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
