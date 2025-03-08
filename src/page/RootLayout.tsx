import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
