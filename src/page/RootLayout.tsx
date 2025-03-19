import { Outlet, useLocation } from 'react-router';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import { useEffect } from 'react';
import { fetchMe } from '@/api/query';
import { useAuthDataStore } from '@/store/authData';
import { useQuery } from '@tanstack/react-query';
import ProgressBar from '@/components/progress-bar';

function RootLayout() {
  const { data: user } = useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: false, // Don't retry if failed
  });

  useEffect(() => {
    useAuthDataStore.getState().setUser(user || null);
  }, [user]);

  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white/80 flex flex-col">
      <Navbar />

      <ProgressBar />
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
