import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-indigo-900 to-black text-white text-center p-6 shadow-inner">
      <p className="text-sm text-indigo-300">
        &copy; {new Date().getFullYear()} Made with ☕ & 🚀 by Kavya Malhotra. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
