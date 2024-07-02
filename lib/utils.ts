import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { icons } from './icons';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const getIcon = (value: string) => {
  const iconObj = icons.find((icon) => icon.iconName === value);
  return iconObj ? iconObj.icon : null;
};

export function formatDate(date: Date) {
  const normalizedDate = new Date(date);
  normalizedDate.setHours(0, 0, 0, 0); // Normalize time to the start of the day
  return normalizedDate.toISOString().split('T')[0]; // Returns 'YYYY-MM-DD'
}

export const getWeekStartEnd = (date: Date) => {
  const start = new Date(date);
  start.setDate(start.getDate() - start.getDay());
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);

  return { start, end };
};

export const getMonthStartEnd = (date: Date) => {
  const start = new Date(date.getFullYear(), date.getMonth(), 1);
  start.setHours(0, 0, 0, 0);

  const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  end.setHours(23, 59, 59, 999);

  return { start, end };
};
