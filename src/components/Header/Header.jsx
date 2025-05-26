import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition duration-200 ${
      isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          Store
        </NavLink>
        <nav className="flex gap-2 md:gap-4 text-sm font-medium">
          <NavLink to="/" className={navLinkStyle}>
            Products
          </NavLink>
          <NavLink to="/recipes" className={navLinkStyle}>
            Recipes
          </NavLink>
          <NavLink to="/users" className={navLinkStyle}>
            Users
          </NavLink>
          <NavLink to="/post" className={navLinkStyle}>
            Posts
          </NavLink>
          <NavLink to="/login" className={navLinkStyle}>
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
