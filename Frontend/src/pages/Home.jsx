import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
import Navbar from '../components/NavBar';
import Footer from '../components/footer';

const Home = () => {
  const navigate = useNavigate();  // useNavigate hook to navigate programmatically


  // Handle spacebar press
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === ' ') { // Space key
        navigate('/background');  // Redirect to the background route
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [navigate]);

  

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white">
      <Navbar />

     {/* Stars background layer */}
            <div className="absolute inset-0 bg-[url('../textures/stars.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0" />

            <div className="relative z-10 max-w-5xl mx-auto space-y-20"></div>


      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
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
        {/* Add the surprise text */}
        <p className="absolute bottom-6 right-6 text-lg font-semibold text-indigo-300">
          Press <span className="font-bold">Space</span> to get a surprise!
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
