import React from 'react';
import { Suspense, lazy, ElementType } from 'react';
import Loader from './lib/Loader';

const Loadable =
  <Props extends Record<string, unknown>>(Component: ElementType) =>
  (props: Props) => (
    <Suspense
      fallback={
        <div className="w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );

// Auth routes

// example lazy loading
export const Login = Loadable(lazy(() => import('./features/auth/Login')));
