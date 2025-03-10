import { Outlet } from 'react-router';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import * as Toast from '@radix-ui/react-toast';
import { fetchMe } from '@/api/query';
import { useAuthDataStore } from '@/store/authData';
import { useQuery } from '@tanstack/react-query';

export default function RootLayout() {
  const { data: user } = useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: false, // Don't retry if failed
  });

  // Store user in Zustand
  const setUser = useAuthDataStore((state) => state.setUser);
  setUser(user || null);

  return (
    <Toast.Provider swipeDirection="right">
      {' '}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toast.Viewport className="fixed bottom-5 right-5 flex flex-col gap-2 w-96 max-w-full p-4 outline-none" />
    </Toast.Provider>
  );
}
