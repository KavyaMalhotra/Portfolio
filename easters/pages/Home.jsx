import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/about');
  };

  return (
    <div className="min-h-screen bg-transparent text-white px-6 py-12 flex flex-col justify-center items-center pt-16 relative">
      <Navbar />

      <h1 className="text-5xl font-extrabold text-cyan-400 mb-4 text-center">
        Welcome to My Tech Garage
      </h1>

      <p className="text-lg text-gray-300 max-w-xl text-center mb-8">
        “What you know today might be wrong tomorrow — that’s why you should never stop learning.”
      </p>

      <button
        onClick={handleNavigate}
        className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition duration-300 cursor-pointer"
      >
        About Me
      </button>
    </div>
  );
}
