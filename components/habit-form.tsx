'use client';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';
import { CustomFormField } from './custom-form-field';
import { LoaderCircle } from 'lucide-react';
import { CustomIconSelect } from './icon-select';
import { CustomSelect } from './select-input';
import { Button } from './ui/button';
import { AuthHeader } from './auth-header';

/* 
  name - input
  icon - select
  description - input
  list - morning, afternoon, evening - select
  frequency - daily, weekly, monthly - select

  goal - number of times - number input
  unit - times, minutes, hours - select
  
*/

export const HabitForm = () => {
  const formSchema = z.object({
    habitName: z.string().min(3, { message: 'Name is too short' }),
    habitIcon: z.string().min(1),
    habitDescription: z
      .string()
      .min(3, { message: 'Description is too short' })
      .max(60, { message: 'Description is too long' }),
    habitList: z.string().min(1),
    habitFrequency: z.string().min(1),
    habitGoal: z.number().min(1),
    habitUnit: z.string().min(1),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      habitName: 'Take a walk',
      habitDescription: 'Take a walk for 30 minutes',
      habitIcon: 'cap',
      habitList: 'Morning',
      habitFrequency: 'Daily',
      habitUnit: 'Minutes',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const { isSubmitting, isDirty } = form.formState;

  return (
    <div className='flex flex-col w-full min-h-screen justify-start max-w-sm space-y-6 mt-6'>
      <h1 className='text-xl font-bold'>Add a new habit</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <div className='flex gap-2'>
            <CustomFormField
              name='habitName'
              label='Name'
              placeholder='E.g., Drink water'
            />
            <CustomIconSelect
              name='habitIcon'
              label='Icon'
              placeholder='Select an icon'
            />
          </div>
          <CustomFormField
            name='habitDescription'
            label='Description'
            placeholder='E.g., Drink 8 glasses of water every day'
            isTextArea
          />
          <CustomSelect
            name='habitList'
            label='List'
            list={['Morning', 'Afternoon', 'Evening']}
            placeholder='Select a list'
          />
          <CustomSelect
            name='habitFrequency'
            label='Frequency'
            list={['Daily', 'Weekly', 'Monthly']}
            placeholder='Select a frequency'
          />
          <div className='flex gap-2'>
            <CustomFormField
              name='habitGoal'
              label='Goal'
              placeholder='E.g., 8'
            />
            <CustomSelect
              name='habitUnit'
              label='Unit'
              list={['Times', 'Minutes', 'Hours']}
              placeholder='Select a unit'
            />
          </div>
          <Button
            className='auth-btn w-full'
            size={'default'}
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
