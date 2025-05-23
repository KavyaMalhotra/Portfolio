import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-indigo-900 to-black text-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold tracking-wider glow-text">
          🚀 My Portfolio
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-cyan-300 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-cyan-300 transition duration-300">About</Link>
          <Link to="/projects" className="hover:text-cyan-300 transition duration-300">Projects</Link>
          <Link to="/contact" className="hover:text-cyan-300 transition duration-300">Contact</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 text-center text-lg">
          <Link onClick={toggleMenu} to="/" className="block hover:text-cyan-300">Home</Link>
          <Link onClick={toggleMenu} to="/about" className="block hover:text-cyan-300">About</Link>
          <Link onClick={toggleMenu} to="/projects" className="block hover:text-cyan-300">Projects</Link>
          <Link onClick={toggleMenu} to="/contact" className="block hover:text-cyan-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
