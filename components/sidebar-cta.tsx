import { AlertCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export const SidebarCTA = () => {
  return (
    <Card x-chunk='dashboard-02-chunk-0' className='bg-blue-50 shadow-none'>
      <CardHeader className='p-2 pt-0 md:p-4 flex flex-row items-center justify-between'>
        <CardTitle>
          <span className='bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900'>
            Beta
          </span>
        </CardTitle>
        <CardDescription>
          <span className='ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800'>
            <AlertCircle className='w-4 h-4' />
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
        <p className='mb-3 text-sm text-blue-800 dark:text-blue-400'>
          Your feedback is crucial! Join our beta program and help us create the
          best habit tracking experience.
        </p>
        <p className='text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300'>
          Shape the Future with Us!
        </p>
      </CardContent>
    </Card>
  );
};
