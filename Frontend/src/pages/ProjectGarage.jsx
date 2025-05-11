import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProjectGarage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white p-8 font-sans relative overflow-hidden">
            {/* Background Stars */}
            <div className="absolute inset-0 bg-[url('../textures/stars.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0" />

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



            {/* Container */}
            <div className="relative z-10 max-w-6xl mx-auto space-y-20">

                <h1 className="text-5xl font-bold text-center text-cyan-400 mb-10">🚀 Project Garage</h1>

                {/* MAJOR PROJECTS SECTION */}
                <section>
                    <h2 className="text-3xl text-green-300 mb-6 text-center">🛠️ Major Projects</h2>
                    <div className="space-y-8">
                        <ProjectCard
                            title="RANTIT"
                            role="Full Stack Developer - Solo"
                            link="https://github.com/KavyaMalhotra/RantIt"
                            details={[
                                "Developed a rant posting and discussion platform with user authentication via Email & Google OAuth.",
                                "Integrated NLP-based AI moderation and PostgreSQL for secure data handling.",
                                "Designed a responsive and accessible UI.",
                            ]}
                            tools="EJS, CSS, JavaScript, Node.js, Express, Flask, NLP, PostgreSQL"
                        />
                        <ProjectCard
                            title="2D Image to 3D Model"
                            role="Developer"
                            link="https://github.com/KavyaMalhotra/2d-image-to-3d-model"
                            details={[
                                "Converted grayscale 2D images into 3D models using depth-based algorithm and numpy-stl.",
                                "Used computational geometry and optimized triangulation techniques.",
                                "Improved performance via efficient memory handling.",
                            ]}
                            tools="Python, NumPy, Pillow, numpy-stl"
                        />
                        <ProjectCard
                            title="Automated Interview Website"
                            role="Full Stack Developer"
                            link="https://github.com/KavyaMalhotra/Interview-Website"
                            details={[
                                "Developed video/audio-based interview system with keyword spotting for scoring.",
                                "Backend supports multi-user concurrency with video & audio processing.",
                            ]}
                            tools="Flask, Node.js, HTML, CSS, JavaScript, REST API"
                        />
                        <ProjectCard
                            title="Smart Home Automation"
                            role="Leader"
                            demo={true}
                            details={[
                                "Voice-controlled Smart Lighting with Python-Arduino integration.",
                                "Real-time multi-device sync and automation efficiency.",
                                "Cost-effective and energy-conscious system design.",
                            ]}
                            tools="Python, Arduino UNO"
                        />
                    </div>
                </section>

                {/* HOSTED SITES SECTION */}
                <section>
                    <h2 className="text-3xl text-yellow-300 mt-16 mb-6 text-left">📡 Hosted Sites</h2>
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-gray-200 space-y-6">
                        <div>
                            <h3 className="text-2xl text-cyan-300 mb-4">🛰️ Static Sites</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="https://simongamekavya.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 text-lg font-medium">
                                        Simon Game
                                    </a>
                                    <p className="text-sm text-gray-400">A simple memory-based game built using vanilla JavaScript, inspired by the classic Simon toy.</p>
                                </li>
                                <li>
                                    <a href="https://ezdrumkit.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 text-lg font-medium">
                                        Drum Kit
                                    </a>
                                    <p className="text-sm text-gray-400">Interactive drum kit using keypress events and audio playback — pure HTML, CSS, and JS.</p>
                                </li>
                                <li>
                                    <a href="https://charming-concha-814ff3.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 text-lg font-medium">
                                        Music Player
                                    </a>
                                    <p className="text-sm text-gray-400">A minimal browser-based music player with playlist and control features.</p>
                                </li>
                                <li>
                                    <a href="https://warm-gecko-0d93c1.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 text-lg font-medium">
                                        Cultural Website Front Page
                                    </a>
                                    <p className="text-sm text-gray-400">Front page design for a cultural website with responsive layout and visual elements.</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl text-cyan-300 mt-8 mb-4">🚀 Dynamic Sites</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="https://joke-website-p1l5.onrender.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 text-lg font-medium">
                                        Jokes Website
                                    </a>
                                    <p className="text-sm text-gray-400">A full-stack app using EJS, Express, and REST API to serve random jokes dynamically.</p>
                                </li>
                                <li>
                                    <a href="https://student-job-tracker-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 text-lg font-medium">
                                        Job Tracker
                                    </a>
                                    <p className="text-sm text-gray-400">React and Express-powered job tracking tool with MongoDB backend for storing applications.</p>
                                </li>
                                <li>
                                    <a href="https://decoy-interview.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 text-lg font-medium">
                                        Interview Website (Login/Register)
                                    </a>
                                    <p className="text-sm text-gray-400">
                                        Frontend for an automated interview platform — login and register features using MongoDB.
                                        <span className="italic text-red-300 block">* Do not register — backend security not fully implemented.</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* IMPACT PROJECT SECTION */}
                <section>
                    <h2 className="text-3xl text-purple-300 mt-16 mb-6 text-left">🧠 A Personal Impact</h2>
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-gray-200">
                        <h3 className="text-2xl text-cyan-300 mb-2">
                            Psychology Research Support Tool
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Built to support a friend conducting research on child psychology and family environments. The study involved
                            analyzing responses from over 300 children to 69 questions across multiple categories (both positive and
                            negative). Manually calculating category-wise scores and personality conclusions was very time-consuming —
                            so I built a tool to automate the process.
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li>Automated score calculation across multiple psychological categories.</li>
                            <li>Instantly generated category-wise summaries and personality conclusions.</li>
                            <li>Increased research data processing speed by over 10×.</li>
                        </ul>
                        <p className="text-sm text-gray-400 mt-4 italic">
                            Due to copyright restrictions, the original question dataset is not included. However, the site marks the
                            category (positive/negative) of each question to demonstrate functionality.
                        </p>
                        <div className="mt-4">
                            <a
                                href="https://github.com/KavyaMalhotra/Psychology-Website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline hover:text-blue-200"
                            >
                                View Repository on GitHub
                            </a>
                        </div>
                        <p className="text-sm text-green-300 mt-2">Tools Used: HTML, CSS, JavaScript</p>
                    </div>
                </section>

            </div>
        </div>
    );
};

// ProjectCard with demo navigation
const ProjectCard = ({ title, role, link, details, tools, demo }) => {
    const navigate = useNavigate();

    const handleDemoClick = () => {
        window.open('https://demo-home-automation-site-production.up.railway.app/', '_blank');
    };

return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg space-y-2">
        <h3 className="text-2xl font-bold text-cyan-300">{title}</h3>
        <p className="italic text-gray-400">{role}</p>
        <ul className="list-disc list-inside text-gray-300">
            {details.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
        <p className="text-sm text-green-300 mt-2">Tools: {tools}</p>
        {(link || demo) && (
            <div className="mt-4 space-x-4">
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-200"
                    >
                        View Code
                    </a>
                )}
                {demo && (
                    <button
                        onClick={handleDemoClick}
                        className="px-4 py-2 bg-pink-500 rounded hover:bg-pink-600 transition"
                    >
                        Demo
                    </button>
                )}
            </div>
        )}
    </div>
);
};

export default ProjectGarage;
