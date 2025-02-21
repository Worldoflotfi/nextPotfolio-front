'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useTheme } from '../utils/ThemeContext'; // Adjust the path accordingly

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const handleNavigationClick = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div>
      <nav
        className={`fixed w-full top-0 z-50 shadow-lg transition-transform ease-in-out duration-300 transform ${isNavVisible ? 'translate-y-0' : '-translate-y-full'
          } ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Branding */}
          <Link href="/">
            <div className="text-2xl font-bold font-Josefin cursor-pointer">
              <span className={`${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>Mohamed Amine</span>{' '}
              <span className={`${isDarkMode ? 'text-teal-200' : 'text-teal-400'}`}>LOTFI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
              <li key={item} className="relative group">
                <button
                  onClick={() => handleNavigationClick(item)}
                  className={`text-lg font-Poppins ${isDarkMode ? 'hover:text-teal-300 text-white' : 'hover:text-teal-600 text-gray-900'}`}
                >
                  {item.toUpperCase()}
                </button>
                <span className={`absolute left-0 bottom-0 block w-0 h-1 ${isDarkMode ? 'bg-teal-500' : 'bg-teal-600'} group-hover:w-full transition-all duration-300`}></span>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className={`focus:outline-none ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}
          >
            {isDarkMode ? (
              <i className="bx bxs-sun text-2xl transition-all duration-200 transform hover:scale-110"></i>
            ) : (
              <i className="bx bxs-moon text-2xl transition-all duration-200 transform hover:scale-110"></i>
            )}
          </button>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              type="button"
              className={`block ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'} focus:outline-none`}
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
          <ul className={`space-y-4 py-4 px-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
            {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavigationClick(item)}
                  className={`text-lg font-Poppins ${isDarkMode ? 'hover:text-teal-300 text-white' : 'hover:text-teal-600 text-black'}`}
                >
                  {item.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Arrow for Navbar */}
      <div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer transition-all ${isNavVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        onMouseEnter={() => setIsNavVisible(true)}
      >
        <i className="bx bxs-chevrons-down text-4xl text-teal-500 hover:text-teal-700 transition-transform duration-300"></i>
      </div>
    </div>
  );
};

export default NavBar;
