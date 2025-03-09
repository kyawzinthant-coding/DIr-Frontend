import { createBrowserRouter } from 'react-router';
import Home from '@/page/Home';
import Contact from '@/page/Contact';
import ErrorPage from '@/page/Error';
import RootLayout from '@/page/RootLayout';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Collection from './page/Collection';
import { loginAction, logoutAction } from './router/action';

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
    ],
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/logout',
    action: logoutAction,
  },
]);
