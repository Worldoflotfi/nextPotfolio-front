'use client';

import React, { useState } from 'react';
import ThemeSwitcher from '../utils/ThemeSwitcher'; // Adjust the path accordingly

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Prevent page reload on click for Home link and Branding
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('home');
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 shadow-lg transition-all ease-in-out duration-300 transform ${
        document.documentElement.classList.contains('dark') ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Branding */}
        <div className="text-2xl font-bold font-Josefin">
          <span
            className={`${
              document.documentElement.classList.contains('dark') ? 'text-teal-400' : 'text-teal-600'
            }`}
            onClick={handleHomeClick} // Prevent page refresh on branding click
            style={{ cursor: 'pointer' }}
          >
            Mohamed Amine
          </span>{' '}
          <span
            className={`${
              document.documentElement.classList.contains('dark') ? 'text-teal-200' : 'text-teal-400'
            }`}
            onClick={handleHomeClick} // Prevent page refresh on branding click
            style={{ cursor: 'pointer' }}
          >
            LOTFI
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className={`text-lg font-Poppins transition-colors duration-200 ${
                  document.documentElement.classList.contains('dark')
                    ? 'hover:text-teal-300'
                    : 'hover:text-teal-600 text-gray-800'
                }`}
              >
                {item.toUpperCase()}
              </a>
              <span
                className={`absolute left-0 bottom-0 block w-0 h-1 ${
                  document.documentElement.classList.contains('dark')
                    ? 'bg-teal-500'
                    : 'bg-teal-600'
                } group-hover:w-full transition-all duration-300`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Theme Switcher */}
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            type="button"
            className={`block ${
              document.documentElement.classList.contains('dark')
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-800'
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

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul
          className={`space-y-4 py-4 px-6 ${
            document.documentElement.classList.contains('dark') ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
          }`}
        >
          {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className={`text-lg font-Poppins transition-colors duration-200 ${
                  document.documentElement.classList.contains('dark')
                    ? 'hover:text-teal-300'
                    : 'hover:text-teal-600 text-gray-800'
                }`}
              >
                {item.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
