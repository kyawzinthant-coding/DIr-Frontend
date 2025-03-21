import { Link, NavLink, useLocation } from 'react-router';
import React, { Suspense, useCallback, useMemo, useState } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { Button } from '../ui/button';
import logo from '../../assets/dirlogoC.svg';
import { useAuthDataStore } from '@/store/authData';

const AuthDropDown = React.lazy(() => import('./AuthDropDown'));
const CartSheet = React.lazy(() => import('./CartSheet'));

const Navbar: React.FC = () => {
  const { user } = useAuthDataStore();

  console.log(user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Memoize navigation links
  const navLinks = useMemo(
    () => [
      { path: '/', label: 'HOME' },
      { path: '/providers', label: 'PROVIDERS' },
      { path: '/about', label: 'ABOUT' },
      { path: '/contact', label: 'CONTACT' },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="max-w-7xl mx-auto flex items-center justify-between font-medium p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt="Logo" loading="lazy" className="w-28" />
          </Link>
          <p className="text-lg font-semibold">Digital Information Resources</p>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          {navLinks.map(({ path, label }) => (
            <NavItem
              key={path}
              path={path}
              label={label}
              activePath={pathname}
            />
          ))}
        </ul>

        {/* Auth & Cart Section */}
        <div className="items-center gap-6 hidden md:flex">
          <Suspense fallback={null}>
            <CartSheet />
            <AuthDropDown user={user} />
          </Suspense>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                0
              </span>
            </Button>
          </Link>

          <Suspense fallback={null}>
            <AuthDropDown user={user} />
          </Suspense>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 z-10 bg-background border-b shadow-lg md:hidden">
          <ul className="flex flex-col p-4">
            {navLinks.map(({ path, label }) => (
              <NavItem
                key={path}
                path={path}
                label={label}
                activePath={pathname}
              />
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

// Extracted NavItem Component for Performance Optimization
const NavItem: React.FC<{
  path: string;
  label: string;
  activePath: string;
}> = ({ path, label, activePath }) => (
  <NavLink
    to={path}
    className={`flex flex-col items-center gap-1 ${
      activePath === path ? 'text-black font-semibold' : ''
    }`}
  >
    <p>{label}</p>
    <hr
      className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
        activePath === path ? '' : 'hidden'
      }`}
    />
  </NavLink>
);

export default Navbar;
