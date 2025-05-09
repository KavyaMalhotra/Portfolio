import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Backend() {
    const navigate = useNavigate(); // ✅ useNavigate hook

    const [showAuthForm, setShowAuthForm] = useState(false);
    const [showDatabaseForm, setShowDatabaseForm] = useState(false);
    const [showExpressMessage, setShowExpressMessage] = useState(false);
    const [authInput, setAuthInput] = useState('');
    const [hashedPassword, setHashedPassword] = useState('');
    const [dbName, setDbName] = useState('');
    const [dbRating, setDbRating] = useState('');
    const [dbResponse, setDbResponse] = useState('');
    const [showDbResponse, setShowDbResponse] = useState(false);
    const [joke, setJoke] = useState('');

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const handleAuthClick = () => {
        setShowAuthForm(true);
        setShowDatabaseForm(false);
        setShowExpressMessage(false);
        setJoke('');
    };

    const handleDatabaseClick = () => {
        setShowAuthForm(false);
        setShowDatabaseForm(true);
        setShowExpressMessage(false);
        setJoke('');
    };

    const handleExpressClick = () => {
        setShowAuthForm(false);
        setShowDatabaseForm(false);
        setShowExpressMessage(true);
        setJoke('');
    };

    const handleApiClick = async () => {
        setShowAuthForm(false);
        setShowDatabaseForm(false);
        setShowExpressMessage(false);
        try {
            const res = await fetch(`${backendUrl}/api/joke`);
            const data = await res.json();
            setJoke(data.joke);
        } catch {
            setJoke('⚠️ Failed to fetch joke.');
        }
    };

    const submitAuth = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${backendUrl}/backend`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: authInput })
            });
            const data = await res.json();
            setHashedPassword(data.hashedPassword);
        } catch {
            setHashedPassword('Error hashing password.');
        }
    };

    const submitDatabase = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${backendUrl}/save-rating`, {
                name: dbName,
                rating: dbRating,
            });

            setShowDatabaseForm(false);
            setDbResponse({
                message: res.data.message,
                totalRatings: res.data.totalRatings,
            });
            setShowDbResponse(true); // ✅ show message only after submit
        } catch (error) {
            console.error('Error submitting rating:', error);
            setDbResponse({ message: 'There was an error saving your rating. Please try again.' });
            setShowDbResponse(true);
        }
    };

    return (
        <div className="min-h-screen bg-black text-green-400 font-mono flex justify-center items-center">
            <div className="w-full max-w-4xl p-6">
                {/* Heading */}
                <h1 className="text-2xl mb-4">
                    <span className="text-green-400">[</span>
                    <span className="text-white">{'{'}</span>
                    <span className="text-green-400">"Hello from the backend"</span>
                    <span className="text-white">{'}'}</span>
                    <span className="text-green-400">]</span>
                </h1>

                {/* Prompt */}
                <p className="text-lg mb-6">
                    What skills would you like me to demonstrate?
                    <span className="animate-pulse">|</span>
                </p>

                {/* Buttons */}
                <div className="flex justify-center space-x-6 mb-8 flex-wrap">
                    <button
                        className="w-48 p-6 text-left text-lg bg-transparent border border-green-400 hover:bg-green-400 hover:text-black transition duration-300"
                        onClick={handleAuthClick}
                    >
                        Authentication
                    </button>
                    <button
                        className="w-48 p-6 text-left text-lg bg-transparent border border-green-400 hover:bg-green-400 hover:text-black transition duration-300"
                        onClick={handleDatabaseClick}
                    >
                        Database
                    </button>
                    <button
                        className="w-48 p-6 text-left text-lg bg-transparent border border-green-400 hover:bg-green-400 hover:text-black transition duration-300"
                        onClick={handleExpressClick}
                    >
                        Express Routing
                    </button>
                    <button
                        className="w-48 p-6 text-left text-lg bg-transparent border border-green-400 hover:bg-green-400 hover:text-black transition duration-300"
                        onClick={handleApiClick}
                    >
                        API
                    </button>
                </div>

                {showAuthForm && !hashedPassword && (
                    <div className="mt-6 text-white">
                        <h2 className="text-xl mb-4">Enter Password:</h2>
                        <form className="flex flex-col space-y-4" onSubmit={submitAuth}>
                            <input
                                type="text"
                                placeholder="Enter password"
                                value={authInput}
                                onChange={(e) => setAuthInput(e.target.value)}
                                className="p-4 text-white rounded-md border border-green-400 bg-transparent"
                            />
                            <button
                                type="submit"
                                className="p-4 bg-green-400 text-black rounded-md border border-green-400 hover:bg-green-500 transition duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                )}

                {hashedPassword && (
                    <div className="mt-6 text-white text-center">
                        <p className="text-xl mb-2">This is how your password will look inside a database  <span className="text-green-400">;)</span> </p>
                        <p className="text-green-400 font-mono break-words">{hashedPassword}</p>
                    </div>
                )}

                {/* Database Form */}
                {showDatabaseForm && (
                    <div className="mt-6 text-white">
                        <h2 className="text-xl mb-4">Enter Your Details:</h2>
                        <form
                            className="flex flex-col space-y-4"
                            onSubmit={submitDatabase}
                        >
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={dbName}
                                onChange={(e) => setDbName(e.target.value)}
                                className="p-4 text-white rounded-md border border-green-400 bg-transparent"
                            />
                            <input
                                type="number"
                                placeholder="Rating (1-5)"
                                min="1"
                                max="5"
                                value={dbRating}
                                onChange={(e) => setDbRating(e.target.value)}
                                className="p-4 text-white rounded-md border border-green-400 bg-transparent"
                            />
                            <button
                                type="submit"
                                className="p-4 bg-green-400 text-black rounded-md border border-green-400 hover:bg-green-500 transition duration-300"
                            >
                                Submit
                            </button>
                        </form>

                    </div>

                )}
                {showDbResponse && dbResponse && (
                    <div className="mt-6 text-white">
                        <p className="mt-4">{dbResponse.message}</p>
                        <p className="mt-2 text-green-400">Total Ratings: {dbResponse.totalRatings}</p>
                    </div>
                )}


                {/* Express Routing Message */}
                {showExpressMessage && (
                    <div className="mt-6 text-white text-lg leading-relaxed">
                        All these messages you are sending to or getting from the backend, like your password,
                        your ratings, or the jokes from the API, are done by me{' '}
                        <span className="text-green-400">:)</span> You can count on me to send any message to
                        the backend.
                    </div>
                )}

                {/* API Joke */}
                {joke && (
                    <>
                        <p className="mt-6 text-yellow-400 text-lg">{joke}</p>
                        <p className="mt-4 text-white">
                            Guess what? Your trusty backend, powered by REST architecture, just did all the heavy lifting to fetch this joke from an external API and bring it straight to you! :') With REST, I handle all the hard work while you get smooth, seamless results. You can always count on me to keep things running like clockwork! ;)
                        </p>
                    </>
                )}


                {/* ✅ Back to Home Button */}
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={() => navigate('/')}
                        className="absolute top-4 left-4 px-4 py-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition duration-300 z-50"
                    >
                        ← Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
