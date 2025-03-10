import { createBrowserRouter } from 'react-router-dom';
import Home from '@/page/Home';
import Contact from '@/page/Contact';
import ErrorPage from '@/page/Error';
import RootLayout from '@/page/RootLayout';
import { Login } from './routes/elements';
import Register from './features/auth/Register';
import Collection from './page/Collection';
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
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
