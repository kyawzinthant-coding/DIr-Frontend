import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/dirlogo.png';
import searchIcon from '../../assets/search_icon.png';

import cartIcon from '../../assets/cart_icon.png';

import AuthDropDown from './AuthDropDown';

const Navbar: React.FC = () => {
  // const user: User = {
  //   id: '1',
  //   username: 'Brian',
  //   email: 'kyawthant035@gmail.com',
  // };

  const user = null;

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background">
      <nav className="max-w-7xl mx-auto flex  items-center justify-between py-2 font-medium">
        <img src={logo} alt="Logo" className="w-20" />

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <img src={searchIcon} className="w-5 cursor-pointer" alt="Search" />

          <Link to="/cart" className="relative">
            <img src={cartIcon} className="w-5 min-w-5" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              10
            </p>
          </Link>
          {/* <img
          onClick={() => setVisible(true)}
          src={menuIcon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        /> */}
          <AuthDropDown user={user} />
        </div>

        {/* Sidebar menu for small screens */}
        {/* <div
      className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
        visible ? 'w-full' : 'w-0'
      }`}
    >
      <div className="flex flex-col text-gray-600">
        <div className="flex items-center gap-4 p-3">
          <img src={dropdownIcon} className="h-4 rotate-180" alt="Back" />
          <p>Back</p>
        </div>
        <NavLink className="py-4 pl-6 border" to="/">
          HOME
        </NavLink>
        <NavLink className="py-4 pl-6 border" to="/collection">
          COLLECTION
        </NavLink>
        <NavLink className="py-4 pl-6 border" to="/about">
          ABOUT
        </NavLink>
        <NavLink className="py-4 pl-6 border" to="/contact">
          CONTACT
        </NavLink>
      </div>
    </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
