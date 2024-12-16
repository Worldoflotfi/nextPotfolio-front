'use client'
import React, { useState } from 'react';

const NavBar = () => {
    // State to manage mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle the mobile menu visibility
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white fixed w-full top-0 z-50 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <div className="text-2xl font-bold">
                    Mohamed Amine <span className="text-teal-400">Lotfi</span>
                </div>
                <ul className={`hidden md:flex space-x-6 ${isMobileMenuOpen ? 'block' : ''}`}>
                    <li>
                        <a href="#home" className="hover:text-teal-200 text-bold">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-teal-200 text-bold">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="hover:text-teal-200 text-bold">
                            SERVICES
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-teal-200 text-bold">
                            PROJECTS
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-teal-200 text-bold">
                            CONTACT
                        </a>
                    </li>
                </ul>
                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        type="button"
                        className="block text-gray-400 hover:text-white focus:outline-none"
                        onClick={toggleMobileMenu} // Toggle mobile menu
                    >
                        <svg
                            className="h-6 w-6"
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
                <ul className="space-y-4 py-4 px-6 bg-gray-800 text-white">
                    <li>
                        <a href="#home" className="hover:text-teal-200">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-teal-200">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="hover:text-teal-200">
                            SERVICES
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-teal-200">
                            PROJECTS
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-teal-200">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
