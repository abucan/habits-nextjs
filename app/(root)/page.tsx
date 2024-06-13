import { ActivityLog } from '@/components/activity-log';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar } from 'flowbite-react';
import { HiClipboardCheck } from 'react-icons/hi';

const Home = async () => {
  return (
    <div className='flex items-start justify-between'>
      <div className='flex flex-col gap-8 items-start justify-center'>
        <div className='flex flex-row items-center justify-center gap-4'>
          <Avatar
            img='https://dummyimage.com/200x200/000/fff&text=AB'
            rounded
            bordered
          />
          <h2 className='font-bold text-xl'>Hi, User</h2>
        </div>
        <p className='text-muted-foreground uppercase text-2xl font-thin'>
          Your Habits
        </p>
      </div>
      <div className='flex flex-col-reverse gap-4'>
        <Card className='bg-gray-50 shadow-none w-[340px]'>
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
        <Calendar
          mode='single'
          className='rounded-md border flex items-center justify-center bg-gray-50'
        />
      </div>
    </div>
  );
};

export default Home;
