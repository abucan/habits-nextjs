import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { icons } from './icons';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) =>
  JSON.parse(JSON.stringify(value));

export const getIcon = (value: string) => {
  const iconObj = icons.find((icon) => icon.iconName === value);
  return iconObj ? iconObj.icon : null;
};

export function formatDate(date: Date) {
  const normalizedDate = new Date(date);
  normalizedDate.setHours(0, 0, 0, 0); // Normalize time to the start of the day
  return normalizedDate.toISOString().split('T')[0]; // Returns 'YYYY-MM-DD'
}
