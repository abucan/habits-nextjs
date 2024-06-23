import { ActivityLog } from './activity-log';
import { Card, CardContent, CardHeader } from './ui/card';
import { HiClipboardCheck } from 'react-icons/hi';

export const RecentHabits = () => {
  return (
    <Card className='bg-gray-50 shadow-none w-[340px] ml-auto'>
      <CardHeader className='flex flex-row items-center justify-between gap-4'>
        <div>
          <h3 className='font-semibold'>Last</h3>
          <p className='text-muted-foreground text-sm'>
            Recently completed habits
          </p>
        </div>
        <HiClipboardCheck className='w-6 h-6' />
      </CardHeader>
      <CardContent className='px-6 pb-0'>
        <ActivityLog />
      </CardContent>
    </Card>
  );
};
