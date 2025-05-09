import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-indigo-900 to-black text-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider glow-text">
          🚀 SpaceDev
        </Link>
        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-cyan-300 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-cyan-300 transition duration-300">About</Link>
          <Link to="/projects" className="hover:text-cyan-300 transition duration-300">Projects</Link>
          <Link to="/contact" className="hover:text-cyan-300 transition duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
