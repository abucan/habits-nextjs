import { LucideIcon } from 'lucide-react';
import { Models } from 'node-appwrite';

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
  logs: Log[] | [];
}

declare interface Log {
  $id?: string;
  isCompleted: boolean;
  habitGoal: number;
  habitCurrentCount: number;
  date: Date;
  $createdAt?: Date;
  $updatedAt?: Date;
}

declare interface HabitFormProps {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

declare interface CircleProgressBarProps {
  count: number;
  habitCurrentCount: number;
  onProgressIncrease: () => void;
}

declare interface HabitsContainerProps {
  data?: Models.DocumentList<Models.Document>;
  user: Models.User<Models.Preferences>;
}

declare interface HabitItemProps {
  habit: HabitProps;
  log: Log;
  date: Date | undefined;
}

declare interface GetHabitsResponse {
  data?: Models.DocumentList<Models.Document>;
  error?: string;
}

declare interface CreateOrUpdateLogResponse {
  data?: string;
  error?: string;
}
