import { authApi } from '@/api';
import { redirect } from 'react-router';

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
