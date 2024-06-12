import { AuthHeaderProps } from '@/types';

export const AuthHeader = ({ type }: AuthHeaderProps) => {
  return (
    <header>
      <div className='grid gap-2 text-left'>
        <div>
          <h1 className='text-3xl font-bold'>
            {type === 'login' ? 'Login' : 'Register'}
          </h1>
        </div>
        <p className='text-balance text-muted-foreground'>
          {type === 'login'
            ? 'Enter your credentials to login'
            : 'Enter your details to register'}
        </p>
      </div>
    </header>
  );
};
