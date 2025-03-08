import { Navigate, useRoutes } from 'react-router-dom';

export default function Admin() {
  return useRoutes([
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);
}
