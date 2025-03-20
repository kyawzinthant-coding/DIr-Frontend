import { queryClient } from '@/lib/queryClient';
import { Status } from './../../store/authStore';
import api, { authApi } from '@/api';
import useAuthStore from '@/store/authStore';

import { LoaderFunctionArgs, redirect } from 'react-router';
import {
  CourseDetailsQuery,
  fetchMe,
  providerQuery,
  ProviderSeriesQuery,
  SeriesCoursesQuery,
} from '@/api/query';
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
      retry: true,
    });

    useAuthDataStore.getState().setUser(user);
    return user;
  } catch {
    useAuthDataStore.getState().setUser(null);
    return null;
  }
};

export const collectionLoader = async () => {
  try {
    const response = await api.get('user/providers');
    console.log(response.data);
    return { providerData: response.data };
  } catch (error) {
    console.log('Collection Loader error', error);
  }
};

// it will cache the data
export const ProviderLoader = async () => {
  await queryClient.ensureQueryData(providerQuery('?limits=8'));
  return null;
};

export const SeriesLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.providerId) {
    throw new Error('No Post ID provided');
  }
  await queryClient.ensureQueryData(ProviderSeriesQuery(params.providerId));
  return { providerId: params.providerId };
};

export const CoursesLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.seriesId) {
    throw new Error('No Series ID provided');
  }

  if (!params.providerId) {
    throw new Error('No Series ID provided');
  }

  await queryClient.ensureQueryData(SeriesCoursesQuery(params.seriesId));
  return { seriesId: params.seriesId, providerId: params.providerId };
};

export const courseDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.courseId) {
    throw new Error('No Course ID provided');
  }
  await queryClient.ensureQueryData(CourseDetailsQuery(params.courseId));
  return { courseId: params.courseId };
};