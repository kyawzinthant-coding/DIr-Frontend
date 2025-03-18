import { createBrowserRouter, redirect } from 'react-router';
import Home from '@/page/Home';
import Contact from '@/page/Contact';
import ErrorPage from '@/page/Error';
import RootLayout from '@/page/RootLayout';
import Login from './features/auth/Login';
// import Register from './features/auth/Register';

import {
  createaccountAction,
  loginAction,
  logoutAction,
  registerAction,
} from './router/action';
import {
  CoursesLoader,
  emailCheckLoader,
  loginLoader,
  ProviderLoader,
  SeriesLoader,
} from './router/loader';
import SignUpPage from '@/features/auth/SignUp';
import AuthRootLayout from '@/features/auth/AuthRootLayout';
import Register from './features/auth/Register';
import Product from './page/Product';
import CollectionPage from './page/CollectionPage';
import ProviderLayout from './features/course/ProviderLayout';
import ProviderSeriesPage from './page/ProviderSeriesPage';
import SeriesCoursePage from './page/SeriesCoursePage';
import CourseDetailsPage from './page/CourseDetailsPage';
import { Suspense } from 'react';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'providers',
        element: <ProviderLayout />,
        children: [
          {
            index: true,
            loader: ProviderLoader,
            element: (
              <Suspense
                fallback={<div className="text-center">Loading...</div>}
              >
                <CollectionPage />
              </Suspense>
            ),
          },
          {
            path: ':providerId/series',
            loader: SeriesLoader,
            element: (
              <Suspense
                fallback={<div className="text-center">Loading...</div>}
              >
                <ProviderSeriesPage />
              </Suspense>
            ),
          },
          {
            path: ':providerId/series/:seriesId',
            loader: CoursesLoader,
            element: (
              <Suspense
                fallback={<div className="text-center">Loading...</div>}
              >
                <SeriesCoursePage />
              </Suspense>
            ),
          },
          {
            path: ':providerId/series/:seriesId/courses/:courseId',
            element: (
              <Suspense
                fallback={<div className="text-center">Loading...</div>}
              >
                <CourseDetailsPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'product',
        element: <Product />,
      },
      {
        path: 'collection-one',
        element: <CollectionPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction,
    loader: loginLoader,
  },
  {
    path: '/register',
    element: <AuthRootLayout />,
    children: [
      {
        index: true,
        element: <SignUpPage />,
        loader: loginLoader,
        action: registerAction,
      },
      {
        path: 'form',
        element: <Register />,
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
