// src/components/navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-cyan-400">My Tech Garage</Link>
                </div>
                <div className="flex gap-6">
                    <Link to="/contact" className="hover:text-cyan-400">Contact Me</Link>
                </div>
            </div>
        </nav>
    );
}
