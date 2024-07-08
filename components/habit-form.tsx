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
import { createHabit, deleteHabit, updateHabit } from '@/actions/habits.actions';
import { habitSchema } from '@/lib/schemas';
import { HabitFormProps } from '@/types';
import { useToast } from './ui/use-toast';

export const HabitForm = ({ setIsOpen, habit, isEdit }: HabitFormProps) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof habitSchema>>({
    resolver: zodResolver(habitSchema),
    defaultValues: {
      habitName: habit?.habitName || 'Take a walk',
      habitDescription: habit?.habitDescription || 'Take a walk for 30 minutes',
      habitIcon: habit?.habitIcon || 'cap',
      habitList: habit?.habitList || 'Morning',
      habitFrequency: habit?.habitFrequency || 'Daily',
      habitUnit: habit?.habitUnit || 'Minutes',
      habitGoal: habit?.habitGoal || 30,
    },
    mode: 'onChange',
  });

  async function onSubmit(values: z.infer<typeof habitSchema>) {
    if (isEdit) {
      onEdit(values);
    } else {
      onCreate(values);
    }
  }

  async function onCreate(values: z.infer<typeof habitSchema>) {
    try {
      const response = await createHabit(values);
      if (response) {
        setIsOpen(false);
        toast({ description: response.data });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      });
    }
  }

  async function onEdit(values: z.infer<typeof habitSchema>) {
    try {
      const response = await updateHabit({ $id: habit?.$id, ...values });
      if (response) {
        setIsOpen(false);
        toast({ description: response.data });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      });
    }
  }

  async function onDelete(habitId: string) {
    try {
      const response = await deleteHabit(habitId);
      if (response.data) {
        setIsOpen(false);
        toast({
          description: response.data,
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      });
    }
  }

  const { isSubmitting, isDirty, isValid } = form.formState;

  return (
    <div className='flex flex-col w-full min-h-screen justify-start max-w-sm space-y-6 mt-6'>
      <h1 className='text-xl font-bold'>
        {isEdit ? 'Edit Habit' : 'Create a new Habit'}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
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
            isEdit={isEdit}
          />
          <div className='flex gap-2'>
            <CustomFormField name='habitGoal' label='Goal' placeholder='E.g., 8' />
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
            disabled={!isDirty || isSubmitting || !isValid}
          >
            <div className='flex flex-row items-center justify-center'>
              {isSubmitting && (
                <LoaderCircle className='h-4 w-4 mr-2 animate-spin' />
              )}
              <span>{isSubmitting ? 'Loading...' : 'Submit'}</span>
            </div>
          </Button>
          {isEdit && habit && (
            <Button
              className='w-full'
              variant={'destructive'}
              size={'default'}
              type='button'
              onClick={() => onDelete(habit.$id!)}
            >
              <div className='flex flex-row items-center justify-center'>
                {isSubmitting && (
                  <LoaderCircle className='h-4 w-4 mr-2 animate-spin' />
                )}
                Delete
              </div>
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
};
