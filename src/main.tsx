import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { QueryProviders } from './provider/QueryProvider.tsx';
import { router } from './routes.tsx';
import { Toaster } from 'sonner';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProviders>
      <Toaster />
      <RouterProvider router={router} />
    </QueryProviders>
  </StrictMode>
);
