import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Ensure the path is correct

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-90 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Quantanova Logo"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
          <h1 className="hidden md:block text-2xl font-extrabold text-cyan-400 tracking-widest">
            Quantanova
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-end gap-3 text-sm sm:text-base md:text-lg font-medium">
          <li><Link to="/" className="hover:text-cyan-300 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-cyan-300 transition">About</Link></li>
          <li><Link to="/timeline" className="hover:text-cyan-300 transition">Timeline</Link></li>
          <li><Link to="/prizes" className="hover:text-cyan-300 transition">Prizes</Link></li>
          <li><Link to="/tracks" className="hover:text-cyan-300 transition">Tracks</Link></li>
          <li><Link to="/others" className="hover:text-cyan-300 transition">Others</Link></li>
          <li><Link to="/contact" className="hover:text-cyan-300 transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
