'use client';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';
import { CustomFormField } from './custom-form-field';
import { Button } from 'flowbite-react';
import { LoaderCircle } from 'lucide-react';
import { CustomIconSelect } from './icon-select';

export const HabitForm = () => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {}

  const { isSubmitting, isDirty } = form.formState;

  return (
    <div className='flex flex-col w-full min-h-screen justify-start max-w-sm space-y-6'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <CustomFormField
            name='habitName'
            label='Name'
            placeholder='E.g., Drink water'
          />
          <CustomFormField
            name='habitDescription'
            label='Description'
            placeholder='E.g., Drink 8 glasses of water every day'
          />
          <CustomIconSelect
            name='icon'
            label='Icon'
            placeholder='Select an icon'
          />
          <Button
            fullSized
            className='auth-btn'
            size={'sm'}
            type='submit'
            disabled={!isDirty || isSubmitting}
          >
            <div className='flex flex-row items-center justify-center'>
              {isSubmitting && (
                <LoaderCircle className='h-4 w-4 mr-2 animate-spin' />
              )}
              <span>{isSubmitting ? 'Loading...' : 'Submit'}</span>
            </div>
          </Button>
        </form>
      </Form>
    </div>
  );
};
