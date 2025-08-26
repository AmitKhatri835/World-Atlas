import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="w-full m-auto bg-[#202020]">
      <nav className="w-[70%] sm:w-[80%] md:w-[70%] m-auto flex justify-between items-center py-5">
        <div className="sm:w-[40%]">
          <NavLink to="/">
            <h1 className="text-[16px] sm:text-2xl md:text-3xl">World Atlas</h1>
          </NavLink>
        </div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden font-bold text-xl hover:text-gray-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {/* Desktop Menu */}
        <ul className="sm:w-[50%] hidden md:flex justify-around list-none">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/country">
            <li>Country</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
        {/* Mobile Menu */}
        {/* Backdrop (click outside to close) */}
        {showMenu && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
            onClick={() => setShowMenu(false)}
          ></div>
        )}
        {/* Mobile Menu - Slide in from Right */}
        <div
          className={`list-none fixed top-0 left-0 w-full bg-[#202020] flex flex-col items-center gap-6 py-20 transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
            showMenu ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <NavLink to="/" onClick={() => setShowMenu(false)}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" onClick={() => setShowMenu(false)}>
            <li>About</li>
          </NavLink>
          <NavLink to="/country" onClick={() => setShowMenu(false)}>
            <li>Country</li>
          </NavLink>
          <NavLink to="/contact" onClick={() => setShowMenu(false)}>
            <li>Contact</li>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
