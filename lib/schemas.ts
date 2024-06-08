import { z } from 'zod';

export const authFormSchema = (type: string) =>
  z.object({
    username:
      type === 'register' ? z.string().min(2) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(6),
  });
