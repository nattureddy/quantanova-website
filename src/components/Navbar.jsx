import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-90 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-2 py-2 flex justify-between items-center">
        {/* Title for Desktop Only */}
        <div className="hidden md:flex items-center space-x-3">
          <h1 className="text-xl md:text-2xl font-extrabold text-cyan-400 tracking-widest">
            Quantanova
          </h1>
        </div>

        {/* Navigation Links - Now Buttons */}
        <ul className="flex flex-wrap justify-center items-center gap-2 text-sm sm:text-base md:text-lg font-medium">
          <li>
            <Link
              to="/"
              className="px-3 py-1 border border-cyan-500 rounded-md hover:bg-cyan-600 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-3 py-1 border border-cyan-500 rounded-md hover:bg-cyan-600 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/timeline"
              className="px-3 py-1 border border-cyan-500 rounded-md hover:bg-cyan-600 transition"
            >
              Timeline
            </Link>
          </li>
          <li>
            <Link
              to="/prizes"
              className="px-3 py-1 border border-cyan-500 rounded-md hover:bg-cyan-600 transition"
            >
              Prizes
            </Link>
          </li>
          <li>
            <Link
              to="/tracks"
              className="px-3 py-1 border border-cyan-500 rounded-md hover:bg-cyan-600 transition"
            >
              Tracks
            </Link>
          </li>
          <li>
            <Link
              to="/others"
              className="px-3 py-1 border border-cyan-500 rounded-md hover:bg-cyan-600 transition"
            >
              Others
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-3 py-1 border border-cyan-500 rounded-md hover:bg-cyan-600 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
