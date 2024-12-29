'use client';
import React, { useState} from 'react';
import {useTheme} from '../utils/ThemeContext';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const { isDarkMode, toggleDarkMode } = useTheme();


    return (
        <nav
            className={`fixed w-full top-0 z-50 shadow-lg transition-all ease-in-out duration-300 transform ${
                isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <div className="text-2xl font-bold font-Josefin">
                    <span className={`${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                        Mohamed Amine
                    </span>{' '}
                    <span className={`${isDarkMode ? 'text-teal-200' : 'text-teal-400'}`}>
                        LOTFI
                    </span>
                </div>
                <ul className={`hidden md:flex space-x-8 ${isMobileMenuOpen ? 'block' : ''}`}>
                    {['HOME', 'ABOUT', 'SERVICES', 'PROJECTS', 'CONTACT'].map((item) => (
                        <li key={item} className="relative group">
                            <a
                                href={`#${item.toLowerCase()}`}
                                className={`text-lg font-Poppins transition-colors duration-200 ${
                                    isDarkMode
                                        ? 'hover:text-teal-300'
                                        : 'hover:text-teal-600 text-gray-800'
                                }`}
                            >
                                {item}
                            </a>
                            <span
                                className={`absolute left-0 bottom-0 block w-0 h-1 ${
                                    isDarkMode ? 'bg-teal-500' : 'bg-teal-600'
                                } group-hover:w-full transition-all duration-300`}
                            ></span>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    onClick={toggleDarkMode}
                    className={`focus:outline-none ${
                        isDarkMode ? 'text-teal-400' : 'text-teal-600'
                    }`}
                >
                    {isDarkMode ? (
                        <i className="bx bxs-sun text-2xl transition-all duration-200 transform hover:scale-110"></i>
                    ) : (
                        <i className="bx bxs-moon text-2xl transition-all duration-200 transform hover:scale-110"></i>
                    )}
                </button>

                <div className="md:hidden">
                    <button
                        type="button"
                        className={`block ${
                            isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'
                        } focus:outline-none`}
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            className="h-6 w-6 transition-all duration-200 transform hover:scale-110"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <ul
                    className={`space-y-4 py-4 px-6 ${
                        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
                    }`}
                >
                    {['HOME', 'ABOUT', 'SERVICES', 'PROJECTS', 'CONTACT'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className={`text-lg font-Poppins transition-colors duration-200 ${
                                    isDarkMode
                                        ? 'hover:text-teal-300'
                                        : 'hover:text-teal-600 text-gray-800'
                                }`}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
