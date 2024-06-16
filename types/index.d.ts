import { LucideIcon } from 'lucide-react';

declare interface CustomFormFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  isTextArea?: boolean;
  list?: string[];
}

declare interface AuthHeaderProps {
  type: 'login' | 'register';
  title?: string;
  description?: string;
}

declare interface RegisterProps {
  username?: string;
  email: string;
  password: string;
}

declare interface LoginProps {
  email: string;
  password: string;
}

declare interface SidebarItemProps {
  icon: IconType;
  label: string;
  href: string;
  isPro?: boolean;
  isDisabled?: boolean;
}

declare interface User {
  $id: string;
  email: string;
  userId: string;
  name: string;
}

declare interface UserButtonProps {
  user: User;
}

declare interface HabitProps {
  $id?: string;
  userId?: string;
  habitName: string;
  habitDescription: string;
  habitIcon: string;
  habitList: string;
  habitFrequency: string;
  habitGoal: number;
  habitUnit: string;
  $createdAt?: Date;
  $updatedAt?: Date;
}

declare interface HabitFormProps {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

declare interface CircleProgressBarProps {
  count: number;
}
