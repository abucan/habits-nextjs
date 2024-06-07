import { Client, Account } from 'appwrite';

export const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6662d7f1002179d842ad');

export const account = new Account(client);
export { ID } from 'appwrite';
