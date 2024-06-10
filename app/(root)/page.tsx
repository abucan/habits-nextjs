import { getLoggedInUser } from '@/actions/auth.actions';
import { Logout } from '@/components/logout';
import { redirect } from 'next/navigation';

const Home = async () => {
  const user = await getLoggedInUser();
  console.log(user);

  if (!user) redirect('/login');

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <Logout />
    </div>
  );
};

export default Home;
