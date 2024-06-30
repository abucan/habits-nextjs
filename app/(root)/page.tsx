import { getLoggedInUser } from '@/actions/auth.actions';
import { getHabits } from '@/actions/habits.actions';
import { HabitsContainer } from '@/components/habits-container';
import { HomeUserWidget } from '@/components/home-user-widget';
import { Models } from 'node-appwrite';
// import { RecentHabits } from '@/components/recent-habits';

const Home = async () => {
  const { data, error } = await getHabits();
  const user: Models.User<Models.Preferences> =
    await getLoggedInUser();

  if (error || !data?.documents || data?.total === 0) {
    return (
      <div className='flex flex-row w-full justify-between gap-8'>
        <div className='flex flex-col gap-8 w-full'>
          <HomeUserWidget user={user} />
          <div>
            <span className='text-muted-foreground text-2xl font-thin'>
              {error}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-start justify-between gap-4'>
      <HabitsContainer data={data} user={user} />
    </div>
  );
};

export default Home;
