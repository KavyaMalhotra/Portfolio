import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-black text-white px-6 py-16 font-sans relative overflow-hidden">

            {/* Stars background layer */}
            <div className="absolute inset-0 bg-[url('../textures/stars.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0" />

            <div className="relative z-10 max-w-5xl mx-auto space-y-20">



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


                {/* Introduction */}
                <section className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">👩‍🚀 Hello, I’m Kavya Malhotra</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        I’m a Computer Science Graduate with a deep passion for building impactful tech solutions, researching emerging systems, and exploring how code can shape the world — or even help us reach beyond it.
                    </p>
                    <div className="mt-6 flex justify-center space-x-6">
                        {/* Skills Button */}
                        {/* Rocket Button */}
                        <Link to="/skills">
                            <button className="w-48 h-16 rounded-full bg-gradient-to-br from-red-700 to-red-900 text-white text-lg flex items-center justify-center border-2 border-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:from-red-600 hover:to-red-800 hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] hover:scale-105 transform transition-all duration-300 cursor-pointer relative overflow-hidden group px-4">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                                My Skills
                            </button>
                        </Link>

                        {/* UFO Button */}
                        <Link to="/projects">
                            <button className="w-48 h-16 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 text-white text-lg flex items-center justify-center border-2 border-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.5)] hover:from-blue-600 hover:to-blue-800 hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] hover:scale-105 transform transition-all duration-300 cursor-pointer relative overflow-hidden group px-4">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                                My Project Garage
                            </button>
                        </Link>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-3xl font-semibold mb-6 text-center">🎓 Education</h2>
                    <div className="space-y-6">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold">Chandigarh University, Mohali</h3>
                            <p className="text-gray-400">B.E. in Computer Science & Engineering | July 2021 – June 2025</p>
                            <p className="text-gray-400">GPA: 7.62/10.0</p>
                            <p className="text-gray-400">Courses: Algorithms, OS, Computer Architecture, Computation Theory</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold">Army Public School, Udhampur</h3>
                            <p className="text-gray-400">Higher Secondary (2019 – 2020): 83.6%</p>
                            <p className="text-gray-400">Secondary (2017 – 2018): 84%</p>
                        </div>
                    </div>
                </section>

                {/* Publications */}
                <section>
                    <h2 className="text-3xl font-semibold mb-6 text-center">📚 Publications</h2>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg space-y-4 text-gray-300">
                        <div>
                            <strong><a href="https://pubs.aip.org/aip/acp/article-abstract/2978/1/060009/3037443/Comprehensive-study-of-smart-home-automation?redirectedFrom=fulltext" target="_blank" rel="noopener noreferrer">Comprehensive Study of Smart Home Automation Techniques</a></strong><br />
                            <em>Kuldeep Singh Rathore, Kavya Malhotra, Gunjan Bagga – Jan 2024</em>
                        </div>
                        <div>
                            <strong><a href="https://ieeexplore.ieee.org/abstract/document/10664180" target="_blank" rel="noopener noreferrer">Exploration of 2D to 3D Image/Video Reconstruction Techniques</a></strong><br />
                            <em>Paras Saini, Kavya Malhotra, Moksh Kukreja – May 2024</em>
                        </div>
                    </div>
                </section>


                <section className="mb-16 text-center">
                    <h2 className="text-3xl font-semibold mb-4">🧬 Personal Log</h2>
                    <p className="text-gray-300 max-w-3xl mx-auto">
                        When I'm not coding, I’m usually diving into personal projects, learning new things, or getting lost in the worlds of video games and anime. Criminal series are my go-to for a good thrill, and nothing beats hanging out with friends. I love exploring both the digital and real worlds, always eager to learn and experience more. Music fuels my focus and moods — from the raw energy of Linkin Park to the nostalgic charm of old Bollywood classics.
                    </p>

                </section>

                {/* Personal Philosophy */}
                <section className="mb-16 text-center">
                    <h2 className="text-3xl font-semibold mb-6">🌌 Personal Philosophy</h2>
                    <blockquote className="text-xl italic text-gray-300 max-w-3xl mx-auto">
                        "Somewhere, something incredible is waiting to be known."
                        <span className="block mt-2 text-gray-500 text-sm">— Carl Sagan</span>
                    </blockquote>
                </section>


                {/* Contact */}
                <section className="text-center pt-10">
                    <h2 className="text-3xl font-semibold mb-4">📨 Connect With Me</h2>
                    <p className="text-gray-400 mb-2">Send a signal anytime:</p>
                    <p className="text-indigo-300">📧 kavyamalhotra2903@gmail.com</p>
                    <p className="text-indigo-300">🌐 <a href="https://github.com/KavyaMalhotra" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                    <p className="text-indigo-300">🔗 <a href="https://www.linkedin.com/in/kavya-malhotra-99901a34b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                </section>

            </div>
        </div>
    );
};

export default About;
