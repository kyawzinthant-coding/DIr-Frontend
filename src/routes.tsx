import { createBrowserRouter, redirect } from 'react-router';
import { lazy, Suspense } from 'react';
import ErrorPage from '@/page/Utils/Error';
import RootLayout from '@/page/Utils/RootLayout';
import AuthRootLayout from '@/features/auth/AuthRootLayout';
import ProviderLayout from './features/course/ProviderLayout';
import CheckOut from './page/CheckOut';
import React from 'react';

const Contact = lazy(() => import('@/page/LandingPage/Contact'));
const Login = lazy(() => import('./features/auth/Login'));
const SignUpPage = lazy(() => import('@/features/auth/SignUp'));
const Register = lazy(() => import('./features/auth/Register'));

import {
  createaccountAction,
  loginAction,
  logoutAction,
  registerAction,
} from './router/action';
import {
  courseDetailsLoader,
  CoursesLoader,
  emailCheckLoader,
  loginLoader,
  ProviderLoader,
  SeriesLoader,
} from './router/loader';
import Home from './page/LandingPage/Home';
import Loader from './lib/Loader';

const Collection = lazy(() => import('./page/CollectionPage'));
const ProviderSeriesPage = lazy(() => import('./page/ProviderSeriesPage'));
const SeriesCoursePage = lazy(() => import('./page/SeriesCoursePage'));
const CourseDetailsPage = lazy(() => import('./page/CourseDetailsPage'));

const withSuspense = (Component: React.FC) => (
  <Suspense
    fallback={
      <div className="text-center h-[80vh] flex items-center justify-center">
        <Loader />
      </div>
    }
  >
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: ProviderLoader,
        element: <Home />,
      },
      {
        path: 'contact',
        element: withSuspense(Contact),
      },
      {
        path: 'checkout',
        element: <CheckOut />,
      },
      {
        path: 'providers',
        element: <ProviderLayout />,
        children: [
          {
            index: true,
            loader: ProviderLoader,
            element: withSuspense(Collection),
          },
          {
            path: ':providerId/series',
            loader: SeriesLoader,
            element: withSuspense(ProviderSeriesPage),
          },
          {
            path: ':providerId/series/:seriesId',
            loader: CoursesLoader,
            element: withSuspense(SeriesCoursePage),
          },
          {
            path: ':providerId/series/:seriesId/courses/:courseId',
            loader: courseDetailsLoader,
            element: withSuspense(CourseDetailsPage),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: withSuspense(Login),
    action: loginAction,
    loader: loginLoader,
  },
  {
    path: '/register',
    element: <AuthRootLayout />,
    children: [
      {
        index: true,
        element: withSuspense(SignUpPage),
        loader: loginLoader,
        action: registerAction,
      },
      {
        path: 'form',
        element: withSuspense(Register),
        loader: emailCheckLoader,
        action: createaccountAction,
      },
    ],
  },
  {
    path: '/logout',
    action: logoutAction,
    loader: () => redirect('/'),
  },
]);
