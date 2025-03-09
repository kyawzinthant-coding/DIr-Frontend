import { authApi } from '@/api';
import { redirect, ActionFunctionArgs } from 'react-router';
import { AxiosError } from 'axios';

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  const authData = {
    email,
    password,
  };

  try {
    const response = await authApi.post('auth/login', authData);

    if (response.status !== 200) {
      return { error: response.data || 'Login Failed!' };
    }

    const redirectTo = new URL(request.url).searchParams.get('redirect') || '/';

    return redirect(redirectTo);
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data || { error: 'Login failed' };
    }
  }
};
