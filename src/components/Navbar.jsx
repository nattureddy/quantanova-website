import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg"; // Make sure the path is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-90 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Quantanova Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-2xl font-extrabold text-cyan-400 tracking-widest">
            Quantanova
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><Link to="/" className="hover:text-cyan-300 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-cyan-300 transition">About</Link></li>
          <li><Link to="/timeline" className="hover:text-cyan-300 transition">Timeline</Link></li>
          <li><Link to="/prizes" className="hover:text-cyan-300 transition">Prizes</Link></li>
          <li><Link to="/tracks" className="hover:text-cyan-300 transition">Tracks</Link></li>
          <li><Link to="/others" className="hover:text-cyan-300 transition">Others</Link></li>
          <li><Link to="/contact" className="hover:text-cyan-300 transition">Contact</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 px-6 py-6 space-y-4 text-center font-medium text-cyan-300">
          <Link to="/" onClick={closeMenu} className="block">Home</Link>
          <Link to="/about" onClick={closeMenu} className="block">About</Link>
          <Link to="/timeline" onClick={closeMenu} className="block">Timeline</Link>
          <Link to="/prizes" onClick={closeMenu} className="block">Prizes</Link>
          <Link to="/tracks" onClick={closeMenu} className="block">Tracks</Link>
          <Link to="/others" onClick={closeMenu} className="block">Others</Link>
          <Link to="/contact" onClick={closeMenu} className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
