import { queryClient } from '@/lib/queryClient';
import { Status } from './../../store/authStore';
import { authApi } from '@/api';
import useAuthStore from '@/store/authStore';

import { redirect } from 'react-router';
import { fetchMe } from '@/api/query';
import { useAuthDataStore } from '@/store/authData';

export const loginLoader = async () => {
  try {
    const response = await authApi.get('auth/auth-check');

    if (response.status !== 200) {
      return null;
    }
    return redirect('/');
  } catch (error) {
    console.log('Loader error', error);
  }
};

export const emailCheckLoader = async () => {
  const authStore = useAuthStore.getState();

  if (authStore.status !== Status.email && authStore.email === null) {
    return redirect('/register');
  }

  return null;
};

export const authLoader = async () => {
  try {
    const user = await queryClient.fetchQuery({
      queryKey: ['me'],
      queryFn: fetchMe,
      staleTime: 1000 * 60 * 5,
      retry: false,
    });
    useAuthDataStore.getState().setUser(user);
    return user;
  } catch {
    useAuthDataStore.getState().setUser(null);
    return null;
  }
};
