import { Link, NavLink } from 'react-router';
import logo from '../../assets/dirlogoC.svg';
import searchIcon from '../../assets/search_icon.png';
import cartIcon from '../../assets/cart_icon.png';
import AuthDropDown from './AuthDropDown';

import { useAuthDataStore } from '@/store/authData';

const Navbar: React.FC = () => {
  const { user } = useAuthDataStore();

  console.log(user);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-2 font-medium">
        <img src={logo} alt="Logo" className="w-28" />

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          {['/', '/providers', '/about', '/contact'].map((path, index) => {
            const labels = ['HOME', 'PROVIDERS', 'ABOUT', 'CONTACT'];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 ${
                    isActive ? 'text-black font-semibold' : ''
                  }`
                }
              >
                <p>{labels[index]}</p>
                <hr
                  className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                    window.location.pathname === path ? '' : 'hidden'
                  }`}
                />
              </NavLink>
            );
          })}
        </ul>

        <div className="flex items-center gap-6">
          <img src={searchIcon} className="w-5 cursor-pointer" alt="Search" />

          <Link to="/cart" className="relative">
            <img src={cartIcon} className="w-5 min-w-5" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-blue-800 text-white aspect-square rounded-full text-[8px]">
              10
            </p>
          </Link>
          <AuthDropDown user={user} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
