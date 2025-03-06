import Navbar from '@/components/layouts/Navbar';

import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="">
      <Navbar />
      <main className="mt-16 flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
