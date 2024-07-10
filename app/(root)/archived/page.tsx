import { getArchivedHabits } from '@/actions/habits.actions';
import { ArchivedHabit } from '@/components/archived-habit';
import { Habit } from '@/components/habit';

const ArchivedPage = async () => {
  const { data, error } = await getArchivedHabits();
  return (
    <div className='flex flex-col gap-8 w-full'>
      <div>
        <span className='text-muted-foreground uppercase text-2xl font-thin'>
          Archived Habits
        </span>
      </div>
      <div className='grid grid-cols-2 gap-8'>
        {data?.documents?.map((item: any) => {
          return <ArchivedHabit key={item.$id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ArchivedPage;
