import { getLoggedInUser } from '@/actions/auth.actions';
import { redirect } from 'next/navigation';

const Home = async () => {
  const user = await getLoggedInUser();
  if (!user) redirect('/login');

  return <div className='text-red-500'>Home</div>;
};

export default Home;
