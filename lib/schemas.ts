import { z } from 'zod';

export const authFormSchema = (type: string) =>
  z.object({
    username:
      type === 'register' ? z.string().min(2) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(6),
  });

export const habitSchema = z.object({
  habitName: z.string().min(3, { message: 'Name is too short' }),
  habitIcon: z.string().min(1),
  habitDescription: z
    .string()
    .min(3, { message: 'Description is too short' })
    .max(60, { message: 'Description is too long' }),
  habitList: z
    .enum(['Morning', 'Afternoon', 'Evening', 'None'])
    .default('None'),
  habitFrequency: z
    .enum(['Daily', 'Weekly', 'Monthly'])
    .default('Daily'),
  habitGoal: z.number().min(1).default(1),
  habitUnit: z.string().min(1),
});
