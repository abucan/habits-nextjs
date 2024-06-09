'use server';

import {
  createAdminClient,
  createSessionClient,
} from '@/appwrite/appwrite';
import { parseStringify } from '@/lib/utils';
import { cookies } from 'next/headers';
import { ID } from 'node-appwrite';

export const login = async (values: LoginProps) => {
  try {
    const { account } = await createAdminClient();

    const user = await account.createEmailPasswordSession(
      values.email,
      values.password,
    );

    return parseStringify(user);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const register = async (values: RegisterProps) => {
  try {
    const { account } = await createAdminClient();

    const user = await account.create(
      ID.unique(),
      values.email,
      values.password,
      values.username,
    );
    const session = await account.createEmailPasswordSession(
      values.email,
      values.password,
    );

    cookies().set('appwrite-session', session.secret, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    });

    return parseStringify(user);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    return null;
  }
}

export async function logout() {
  try {
    const { account } = await createSessionClient();
    cookies().delete('appwrite-session');

    await account.deleteSession('current');
  } catch (error) {
    return null;
  }
}
