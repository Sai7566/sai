import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles, closeMenu }) => {
  const navlinks = [
    { path: "/", title: "Home" },
    { path: "/collection", title: "Collection" },
   
  ];

  return (
    <nav
      className={`${containerStyles} flex items-center justify-center gap-6 bg-gradient-to-r from-white via-[#f1f5f9] to-white shadow-md rounded-full px-6 py-3 backdrop-blur-md`}
    >
      {navlinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={closeMenu}
          className={({ isActive }) =>
            `px-4 py-2 rounded-full transition duration-300 ${
              isActive ? "bg-secondary text-white" : "text-gray-800"
            }`
          }
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
