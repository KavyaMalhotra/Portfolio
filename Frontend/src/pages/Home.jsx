import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Footer from '../components/footer';

const Home = () => {
  const navigate = useNavigate();

  // Spacebar navigation for desktop
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === ' ') {
        navigate('/background');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);

  // Mobile tap handler
  const handleSurpriseClick = () => {
    if (window.innerWidth <= 768) {
      navigate('/background');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white">
      <Navbar />

      {/* Stars background */}
      <div className="absolute inset-0 bg-[url('../textures/stars.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0" />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 glow-text">
          Welcome to My Universe
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-8 font-light text-indigo-200">
          What you know today might be wrong tomorrow — that’s why you should never stop learning.
        </p>
        <Link
          to="/about"
          className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full shadow-lg hover:bg-cyan-300 transition duration-300"
        >
          About Me
        </Link>
      </main>

      {/* Surprise message visible only on desktop, and clickable for mobile */}
      <div
        onClick={handleSurpriseClick}
        className="hidden md:block text-center mb-4 text-lg font-semibold text-indigo-300 cursor-pointer hover:text-indigo-100 transition"
      >
        Press <span className="font-bold">Space</span> to get a surprise!
      </div>

      <Footer />
    </div>
  );
};

export default Home;
