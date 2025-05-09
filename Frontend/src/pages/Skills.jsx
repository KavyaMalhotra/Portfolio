import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const skillCategories = {
    '👨‍💻 Programming Languages': [
        { name: 'C++', description: 'Efficient, high-performance programming for system-level and OOP tasks.' },
        { name: 'Python', description: 'Versatile language for automation, scripting, and AI applications.' }
    ],
    '🧠 Problem Solving': [
        { name: 'DSA', description: 'Strong grasp of data structures and algorithms for optimized coding.' }
    ],
    '🚀 Full Stack Web Development': [
        { name: 'HTML', description: 'Standard markup for structuring web pages.' },
        { name: 'CSS', description: 'Styling the web with responsive and aesthetic designs.' },
        { name: 'JavaScript', description: 'Dynamic behavior and logic for interactive web apps.' },
        { name: 'Node.js', description: 'JavaScript runtime for scalable backend development.' },
        { name: 'Express.js', description: 'Minimal web framework for handling API routes and middleware.' },
        { name: 'EJS', description: 'Template engine for rendering HTML with JS on server side.' },
        { name: 'React.js', description: 'Component-based frontend framework for building UIs.' },
        { name: 'MongoDB', description: 'NoSQL database for storing flexible, JSON-like documents.' },
        { name: 'PostgreSQL', description: 'Relational DB for structured, ACID-compliant storage.' },
        { name: 'Git', description: 'Version control system for tracking code changes collaboratively.' },
        { name: 'REST', description: 'Designing scalable APIs using RESTful principles.' },
        { name: 'Flask', description: 'Lightweight Python web framework I often use to build external APIs that power and extend the functionality of my projects.' }
    ],
    '🧑‍🚀 Interpersonal Skills': [
        { name: 'Teamwork', description: 'Collaborative mindset for efficient group problem solving.' },
        { name: 'Leadership', description: 'Guiding teams, taking ownership, and ensuring success.' },
        { name: 'Adaptive', description: 'Quick learner who adjusts fast in changing environments.' },
        { name: 'Conflict Resolution', description: 'Mediating disagreements with calm and clarity.' }
    ]
};

const Skills = () => {
    const [activeSkill, setActiveSkill] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-12 overflow-hidden">
            {/* Starfield background */}
            <div
                className="absolute inset-0 bg-[url('/textures/stars.jpg')] bg-cover bg-center opacity-20 pointer-events-none"
            />

            <div className="relative z-10 max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-center text-cyan-400">
                    🛠️ Welcome to My Spaceship Workshop
                </h1>

                {/* Skill categories */}
                {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category} className="space-y-4">
                        <h2 className="text-2xl text-indigo-300">{category}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="relative bg-white/10 p-4 rounded-lg border border-cyan-500 shadow-md cursor-pointer hover:bg-cyan-900/20 transition duration-300"
                                    onMouseEnter={() => setActiveSkill(skill)}
                                    onMouseLeave={() => setActiveSkill(null)}
                                >
                                    <p className="text-lg font-semibold text-center">{skill.name}</p>
                                    {activeSkill?.name === skill.name && (
                                        <div className="absolute z-20 top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-gray-800 p-3 rounded-md border border-cyan-400 shadow-xl text-sm text-cyan-200">
                                            {skill.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                {/* Vent-like backend button */}
                <div className="flex flex-col items-center space-y-2 mt-16">
                    {/* Text above the button */}
                    <span className="text-cyan-300 text-sm font-bold">
                        Wanna Meet My Backend?
                    </span>

                    {/* Button */}
                    <button
                        onClick={() => navigate('/backend')}
                        className="relative w-32 h-32 cursor-pointer focus:outline-none"
                    >
                        <img
                            src="/textures/among-us-vent.svg"
                            alt="Vent Button"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default Skills;
