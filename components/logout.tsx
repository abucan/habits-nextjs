'use client';

import { logout } from '@/actions/auth.actions';

export const Logout = () => {
  return (
    <div>
      <h1>Logout</h1>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};
