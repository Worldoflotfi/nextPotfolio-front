'use client'
import React, { useState, useEffect } from 'react';

const NavBar = () => {
    // State to manage mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // State to manage theme (light/dark)
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle the mobile menu visibility
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Toggle dark mode and set theme in localStorage
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Apply theme from localStorage when component mounts
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    // Update localStorage and apply dark mode
    useEffect(() => {
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <nav className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-lg transition-all ease-in-out duration-300 transform">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <div className="text-2xl font-bold font-poppins text-teal-400">
                    Mohamed Amine <span className="text-teal-500">Lotfi</span>
                </div>
                <ul className={`hidden md:flex space-x-8 ${isMobileMenuOpen ? 'block' : ''}`}>
                    <li className="relative group">
                        <a href="#home" className="hover:text-teal-300 text-lg transition-colors duration-200">
                            HOME
                        </a>
                        <span className="absolute left-0 bottom-0 block w-0 h-1 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className="relative group">
                        <a href="#about" className="hover:text-teal-300 text-lg transition-colors duration-200">
                            ABOUT
                        </a>
                        <span className="absolute left-0 bottom-0 block w-0 h-1 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className="relative group">
                        <a href="#services" className="hover:text-teal-300 text-lg transition-colors duration-200">
                            SERVICES
                        </a>
                        <span className="absolute left-0 bottom-0 block w-0 h-1 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className="relative group">
                        <a href="#projects" className="hover:text-teal-300 text-lg transition-colors duration-200">
                            PROJECTS
                        </a>
                        <span className="absolute left-0 bottom-0 block w-0 h-1 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li className="relative group">
                        <a href="#contact" className="hover:text-teal-300 text-lg transition-colors duration-200">
                            CONTACT
                        </a>
                        <span className="absolute left-0 bottom-0 block w-0 h-1 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                    </li>
                </ul>

                {/* Theme Toggle Icon */}
                <button
                    type="button"
                    onClick={toggleDarkMode}
                    className="text-teal-400 hover:text-teal-500 focus:outline-none"
                >
                    {isDarkMode ? (
                        <i className="bx bxs-sun text-2xl transition-all duration-200 transform hover:scale-110"></i>
                    ) : (
                        <i className="bx bxs-moon text-2xl transition-all duration-200 transform hover:scale-110"></i>
                    )}
                </button>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        type="button"
                        className="block text-gray-400 hover:text-white focus:outline-none"
                        onClick={toggleMobileMenu} // Toggle mobile menu
                    >
                        <svg
                            className="h-6 w-6 transition-all duration-200 transform hover:scale-110"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="space-y-4 py-4 px-6 bg-gray-900 text-white">
                    <li>
                        <a href="#home" className="hover:text-teal-300 text-lg font-Poppins transition-colors duration-200">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-teal-300 text-lg font-decorative transition-colors duration-200">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="hover:text-teal-300 text-lg font-Poppins transition-colors duration-200">
                            SERVICES
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-teal-300 text-lg font-semibold transition-colors duration-200">
                            PROJECTS
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-teal-300 text-lg font-semibold transition-colors duration-200">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
