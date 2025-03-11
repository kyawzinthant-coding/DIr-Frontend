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
import { emailCheckLoader, loginLoader } from './router/loader';
import SignUpPage from '@/features/auth/SignUp';
import AuthRootLayout from '@/features/auth/AuthRootLayout';
import Register from './features/auth/Register';
import Product from './page/Product';
import CollectionPage from './page/CollectionPage';
import ProviderLayout from './features/course/ProviderLayout';
import ProviderSeriesPage from './page/ProviderSeriesPage';
import SeriesCoursePage from './page/SeriesCoursePage';
import CourseDetailsPage from './page/CourseDetailsPage';

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
        // element: <Collection />,
        element: <ProviderLayout />,
        children: [
          {
            index: true,
            element: <CollectionPage />,
          },
          {
            path: ':providerId/series',
            element: <ProviderSeriesPage />,
          },
          {
            path: ':providerId/series/:seriesId',
            element: <SeriesCoursePage />,
          },
          {
            path: ':providerId/series/:seriesId/courses/:courseId',
            element: <CourseDetailsPage />,
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
