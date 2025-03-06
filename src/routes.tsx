import { createBrowserRouter } from 'react-router-dom';
import Home from '@/page/Home';
import Contact from '@/page/Contact';
import RootLayout from '@/page/RootLayout';
import ErrorPage from '@/page/Error';

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
    ],
  },
]);
