'use client';

import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        // Switch to dark mode
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        // Switch to light mode
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newTheme;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="focus:outline-none text-2xl transition-all duration-200 transform hover:scale-110"
    >
      {isDarkMode ? (
        <i className="bx bxs-sun"></i> // Sun icon for dark mode
      ) : (
        <i className="bx bxs-moon"></i> // Moon icon for light mode
      )}
    </button>
  );
};

export default ThemeSwitcher;
