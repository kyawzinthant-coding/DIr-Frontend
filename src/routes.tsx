import { createBrowserRouter, redirect } from 'react-router';
import Home from '@/page/Home';
import Contact from '@/page/Contact';
import ErrorPage from '@/page/Error';
import RootLayout from '@/page/RootLayout';
import Login from './features/auth/Login';
// import Register from './features/auth/Register';
import Collection from './page/Collection';
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
        path: 'collection',
        element: <Collection />,
      },
      {
        path: 'product',
        element: <Product />,
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
