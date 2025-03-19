import { Link, NavLink } from 'react-router';
import logo from '../../assets/dirlogoC.svg';

import AuthDropDown from './AuthDropDown';

import { useAuthDataStore } from '@/store/authData';
import { Button } from '../ui/button';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const { user } = useAuthDataStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="max-w-7xl mx-auto flex items-center justify-between  font-medium">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-28" />
        </Link>

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

        <div className=" items-center gap-6 hidden md:block">
          <AuthDropDown user={user} />
        </div>

        <div className="flex md:hidden items-center gap-4">
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                0
              </span>
            </Button>
          </Link>

          <div className=" items-center gap-6 flex md:hidden">
            <AuthDropDown user={user} />
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 z-10 mt-1 flex flex-col bg-background border-b shadow-lg md:hidden">
                <ul className="flex flex-col">
                  {['/', '/providers', '/about', '/contact'].map(
                    (path, index) => {
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
                    }
                  )}
                </ul>
              </div>
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
