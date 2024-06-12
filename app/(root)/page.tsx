import { ActivityLog } from '@/components/activity-log';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar } from 'flowbite-react';
import { BadgePlus } from 'lucide-react';
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
        {/* <Button variant={'outline'} type='submit'>
          <BadgePlus className='h-4 w-4 mr-2 animate-pulse' />
          Add Habit
        </Button> */}
        <p className='text-muted-foreground uppercase text-2xl font-thin'>
          Your Habits
        </p>
      </div>
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
    </div>
  );
};

export default Home;
