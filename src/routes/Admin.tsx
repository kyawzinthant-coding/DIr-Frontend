import { Navigate, useRoutes } from 'react-router-dom';
import Home from './Home';

export default function Admin() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },

    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);
}
