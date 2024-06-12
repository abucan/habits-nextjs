import { GlassWater } from 'lucide-react';

export const ActivityLogItem = () => {
  return (
    <li className='mb-10 ms-4'>
      <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
      <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
        February 2022
      </time>
      <div className='text-sm font-semibold text-gray-900 flex flex-row items-center dark:text-white bg-white p-2 border-l-4 border-lime-500 rounded-md'>
        <GlassWater className='h-4 w-4 mr-2' /> Drink a glass of water
      </div>
    </li>
  );
};
