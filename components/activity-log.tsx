import { ActivityLogItem } from './activity-log-item';

/* eslint-disable @next/next/no-img-element */
export const ActivityLog = () => {
  return (
    <ol className='relative border-s border-gray-200 dark:border-gray-700'>
      <ActivityLogItem />
      <ActivityLogItem />
      <ActivityLogItem />
    </ol>
  );
};
