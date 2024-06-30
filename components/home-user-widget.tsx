import { Avatar } from 'flowbite-react';
import { Card } from './ui/card';
import { AddHabitSidebar } from './add-habit-sidebar';
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from './ui/select';
import { Models } from 'node-appwrite';

export const HomeUserWidget = ({
  user,
}: {
  user: Models.User<Models.Preferences>;
}) => {
  return (
    <Card className='flex flex-row justify-between w-full p-4 items-center'>
      <div className='flex flex-row items-center justify-center gap-4'>
        <Avatar
          img='https://dummyimage.com/200x200/000/fff&text=AB'
          rounded
          bordered
        />
        <h2 className='font-bold text-xl'>Hi, {user?.name}</h2>
      </div>
      <div className='flex flex-row gap-2 items-center justify-center'>
        <AddHabitSidebar isHome />
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select a list' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>List</SelectLabel>
              <SelectItem value='apple'>Morning</SelectItem>
              <SelectItem value='banana'>Afternoon</SelectItem>
              <SelectItem value='blueberry'>Evening</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
};
