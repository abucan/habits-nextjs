'use client';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';
import { CustomFormField } from './custom-form-field';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { AuthHeader } from './auth-header';
import { Logo } from './logo';
import { authFormSchema } from '@/lib/schemas';
import { login, register } from '@/actions/auth.actions';

import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const AuthForm = ({ type }: { type: 'login' | 'register' }) => {
  const formSchema = authFormSchema(type);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (type === 'login') {
      const response = await login(values);
      if (response) router.push('/');
    }

    if (type === 'register') {
      const response = await register(values);
      if (response) router.push('/');
    }
  }

  const { isSubmitting, isDirty } = form.formState;

  return (
    <div className='flex flex-col w-full min-h-screen justify-center max-w-sm space-y-6'>
      <div className='lg:hidden'>
        <Logo width={180} />
      </div>
      <AuthHeader type={type} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          {type === 'register' && (
            <CustomFormField
              name='username'
              label='Username'
              placeholder='john'
            />
          )}
          <CustomFormField
            name='email'
            label='Email'
            placeholder='johndoe@email.com'
          />
          <CustomFormField
            name='password'
            label='Password'
            placeholder='******'
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
      <footer className='w-full flex justify-center items-center space-x-1'>
        {type === 'login' ? (
          <>
            <p className='text-muted-foreground text-sm'>
              Do not have an account?
            </p>
            <Link
              href={'/register'}
              className=' text-primary_blue font-semibold text-sm'
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <p className='text-muted-foreground text-sm'>
              Already have an account?
            </p>
            <Link
              href={'/login'}
              className=' text-primary_blue font-semibold text-sm'
            >
              Login
            </Link>
          </>
        )}
      </footer>
    </div>
  );
};
