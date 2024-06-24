import { getHabits } from '@/actions/habits.actions';
import { HabitsList } from '@/components/habits-list';
import { RecentHabits } from '@/components/recent-habits';

const Home = async () => {
  const habits = await getHabits();
  return (
    <div className='flex flex-col items-start justify-between gap-4'>
      <HabitsList habits={habits} />
      <RecentHabits />
    </div>
  );
};

export default Home;
