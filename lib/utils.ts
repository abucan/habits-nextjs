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
