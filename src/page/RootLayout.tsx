import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';

import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className=" main-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>

      <main className=" flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
