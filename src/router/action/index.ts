import api, { authApi } from '@/api';
import { redirect, ActionFunctionArgs } from 'react-router';
import { AxiosError } from 'axios';
import useAuthStore, { Status } from '@/store/authStore';
import { useAuthDataStore } from '@/store/authData';
import { queryClient } from '@/lib/queryClient';

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
    await queryClient.invalidateQueries({ queryKey: ['me'] });
    const redirectTo = new URL(request.url).searchParams.get('redirect') || '/';

    return redirect(redirectTo);
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data || { error: 'Login failed' };
    }
  }
};

export const logoutAction = async () => {
  try {
    await api.post('auth/logout');
    useAuthDataStore.getState().setUser(null);
    return redirect('/login');
  } catch (error) {
    console.error('Logout failed:', error);
    return { error: 'Logout failed' };
  }
};

export const registerAction = async ({ request }: ActionFunctionArgs) => {
  const authStore = useAuthStore.getState();
  const formData = await request.formData();
  const email = formData.get('email');

  try {
    // Send request to check if email is available
    const response = await authApi.post('auth/check-email', { email });

    if (response.status !== 200) {
      return { error: response.data || 'Email check failed' };
    }

    authStore.setAuth(email as string, Status.email);
    // If no error, email is available → Continue registration
    return redirect('/register/form');
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 400) {
        // If email exists, redirect to login with pre-filled email
        return redirect(`/login?email=${encodeURIComponent(email as string)}`);
      }
      return error.response?.data || { error: 'Something went wrong!' };
    }
    throw error;
  }
};

export const createaccountAction = async ({ request }: ActionFunctionArgs) => {
  const authStore = useAuthStore.getState();
  const formData = await request.formData();
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  const authData = {
    username,
    email,
    password,
  };

  try {
    const response = await authApi.post('auth/register', authData);

    if (response.status !== 201 && response.status !== 200) {
      return { error: response.data || 'Registration failed' };
    }

    authStore.clearAuth();
    const redirectTo = new URL(request.url).searchParams.get('redirect') || '/';

    return redirect(redirectTo);
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data || { error: 'Registered Failed!' };
    }
    throw error;
  }
};
