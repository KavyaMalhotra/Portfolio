import React from 'react';
import twitterIcon from '../assets/twitter-x.svg';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-black text-white px-6 py-12 relative overflow-hidden">
            {/* Stars in the background */}
            <div className="absolute inset-0 bg-[url('../textures/stars.jpg')] bg-cover bg-center opacity-20 z-0" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-12">
                <h1 className="text-5xl font-bold text-center text-cyan-400">📬 Contact Me</h1>

                {/* ← Back to Home Button */}
                <Link
                    to="/"
                    className="
          fixed top-4 left-4
          bg-white/10 text-white
          backdrop-blur-md rounded-md
          border border-cyan-400
          hover:bg-white/20 hover:text-black
          cursor-pointer
          px-3 py-1
          z-50
        "
                >
                    ← Home
                </Link>

                {/* Direct Links */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                    <a
                        href="mailto:kavyamalhotra2903@gmail.com"
                        className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:bg-white/20 transition"
                    >
                        <h2 className="text-2xl font-semibold">✉️ Email</h2>
                        <p className="mt-2 text-gray-300">kavyamalhotra2903@gmail.com</p>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kavya-malhotra-99901a34b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:bg-white/20 transition"
                    >
                        <h2 className="text-2xl font-semibold">🔗 LinkedIn</h2>
                        <p className="mt-2 text-gray-300">/in/kavya-malhotra-99901a34b</p>
                    </a>
                    <a
                        href="https://github.com/KavyaMalhotra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:bg-white/20 transition"
                    >
                        <h2 className="text-2xl font-semibold">💻 GitHub</h2>
                        <p className="mt-2 text-gray-300">/KavyaMalhotra</p>
                    </a>
                    <a
                        href="https://x.com/Kavya_2607"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:bg-white/20 transition"
                    >
                        <h2 className="inline-flex items-center justify-center mx-auto text-2xl font-semibold gap-1">
                            <img
                                src={twitterIcon}
                                alt="X (Twitter) Logo"
                                className="w-12 h-12 flex-shrink-0"
                            />
                            X (Twitter)
                        </h2>
                        <p className="text-gray-300 mt-0 leading-tight">@Kavya_2607</p>
                    </a>
                </section>

                {/* Contact Form via Formspree */}
                <section>
                    <h2 className="text-3xl font-semibold mb-4 text-center text-yellow-300">📡 Send a Signal</h2>
                    <form
                        action="https://formspree.io/f/mgvklzgq"
                        method="POST"
                        className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg"
                    >
                        <label className="block">
                            <span className="text-white">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                required
                                className="mt-1 block w-full p-3 bg-transparent border border-cyan-400 rounded-md text-white focus:outline-none"
                            />
                        </label>
                        <label className="block">
                            <span className="text-white">Your Email</span>
                            <input
                                type="email"
                                name="email"
                                required
                                className="mt-1 block w-full p-3 bg-transparent border border-cyan-400 rounded-md text-white focus:outline-none"
                            />
                        </label>
                        <label className="block">
                            <span className="text-white">Message</span>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                className="mt-1 block w-full p-3 bg-transparent border border-cyan-400 rounded-md text-white focus:outline-none"
                            />
                        </label>
                        <button
                            type="submit"
                            className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 rounded-md text-black font-semibold transition"
                        >
                            Send Message
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Contact;
