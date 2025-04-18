import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import { TbBasket, TbUserCircle } from 'react-icons/tb';
import { RiUserLine } from "react-icons/ri";

import Navbar from './Navbar';

import searchIcon from "../assets/search_icon.png";
import logo from "../assets/logo.png";

import { ShopContext } from '../context/ShopContext';

const Header = () => {
  const location = useLocation();
  const isCollectionPage = location.pathname === "/collection";

  const { token, setToken, setShowSearch, getCartCount, navigate } = useContext(ShopContext);
  const [menuOpened, setMenuOpened] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken('');
    setDropdownOpen(false);
    navigate('/login');
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between py-3 px-4 sm:px-6 md:px-10">
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <FaBarsStaggered
            className="text-xl cursor-pointer"
            onClick={() => setMenuOpened(!menuOpened)}
          />
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => setMenuOpened(false)}>
          <img src={logo} alt="Virtual Shopping Assistant Logo" className="w-36 sm:w-44 object-contain" />
        </Link>

        {/* Navbar - Desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <Navbar containerStyles="flex gap-x-5 xl:gap-x-10 medium-15 rounded-full p-1" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          

          {/* Cart Icon */}
          <Link to="/cart" className="flex relative">
            <TbBasket className="text-[27px]" />
            <span className="bg-red-500 text-white text-[12px] font-semibold absolute left-1.5 -top-3.5 flexCenter w-4 h-4 rounded-full shadow-md">
              {getCartCount()}
            </span>
          </Link>

          {/* Login / Profile */}
          <div className="relative">
            {token ? (
              <>
                <TbUserCircle
                  className="text-[26px] sm:text-[29px] cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                {dropdownOpen && (
                  <ul className="absolute bg-white p-2 ring-1 ring-gray-300 rounded top-10 right-0 shadow-md z-50">
                   
                    <li
                      onClick={logout}
                      className="p-2 text-tertiary rounded-md hover:bg-gray-200 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                )}
              </>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-500 border border-gray-300 hover:border-transparent text-gray-700 hover:text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300 ease-in-out sm:px-6 sm:py-2.5"
              >
                <span className="transition-transform group-hover:-translate-y-0.5 tracking-wide">Login</span>
                <RiUserLine className="text-xl transition-transform group-hover:translate-x-1" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {menuOpened && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 md:hidden" onClick={() => setMenuOpened(false)}>
          <div
            className="absolute top-16 left-4 flex flex-col gap-y-4 bg-white rounded-lg shadow-lg p-6 w-52 ring-1 ring-gray-300 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <Navbar containerStyles="flex flex-col gap-y-4 text-center" closeMenu={() => setMenuOpened(false)} />
            <button
              className="text-red-500 font-semibold text-lg mt-2 hover:underline"
              onClick={() => setMenuOpened(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
