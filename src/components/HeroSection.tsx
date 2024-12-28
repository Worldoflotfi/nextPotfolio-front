'use client'
import Image from "next/image";
import 'boxicons/css/boxicons.min.css';
import React, { useEffect, useState } from 'react';

const HeroSection = () => {

     const [isDarkMode, setIsDarkMode] = useState(false);

    // const toggleDarkMode = () => {
    //     setIsDarkMode(!isDarkMode);
    // };

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
    
        useEffect(() => {
            if (isDarkMode) {
                localStorage.setItem('theme', 'dark');
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
            } else {
                localStorage.setItem('theme', 'light');
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
            }
        }, [isDarkMode]);

    return (
        <section className="bg-gray-900 text-white dark:bg-gray-900 dark:text-white bg-white text-gray-900 transition-colors duration-300">
            <div className="container mx-auto flex flex-col items-center justify-center px-5 py-16 text-center md:py-32 md:flex-row md:text-left">

                {/* Image and Heading Section */}
                <div className="flex flex-col items-center md:items-start md:flex-row mt-4 md:gap-10">

                    {/* Heading and Text */}
                    <div className="text-center mt-6 md:text-left md:w-[50%]">
                        <h1 className="text-4xl font-bold md:text-6xl font-Poppins">
                            Hi, I&apos;m
                            <br />
                            <span className="text-teal-400 dark:text-teal-400 font-Poppins">
                                Mohamed Amine LOTFI
                            </span>
                        </h1>
                        <p className="mt-4 text-lg md:text-2xl font-Poppins text-gray-500 dark:text-gray-300">
                            A passionate Full Stack Developer building modern web experiences.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-8 flex justify-center md:justify-start gap-6">
                            <a
                                href="#"
                                className="text-teal-500 dark:text-teal-400 hover:text-teal-300 dark:hover:text-teal-200 text-3xl"
                            >
                                <i className="bx bxs-phone"></i>
                            </a>
                            <a
                                href="#"
                                className="text-teal-500 dark:text-teal-400 hover:text-teal-300 dark:hover:text-teal-200 text-3xl"
                            >
                                <i className="bx bxl-linkedin-square"></i>
                            </a>
                            <a
                                href="#"
                                className="text-teal-500 dark:text-teal-400 hover:text-teal-300 dark:hover:text-teal-200 text-3xl"
                            >
                                <i className="bx bxl-twitter"></i>
                            </a>
                            <a
                                href="#"
                                className="text-teal-500 dark:text-teal-400 hover:text-teal-300 dark:hover:text-teal-200 text-3xl"
                            >
                                <i className="bx bxl-github"></i>
                            </a>
                        </div>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 text-lg font-semibold bg-teal-500 dark:bg-teal-400 hover:bg-teal-400 dark:hover:bg-teal-300 text-gray-900 rounded-lg transition-all duration-300"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 text-lg font-semibold border border-teal-500 dark:border-teal-400 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-300 rounded-lg transition-all duration-300"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative mb-8 md:mb-0 mt-6 md:w-[40%] ml-auto">
                        <Image
                            src="/images/me.png"
                            alt="Mohamed Amine Lotfi"
                            width={400}
                            height={400}
                            className="rounded-full border-4 border-teal-400 dark:border-teal-400 hover:shadow-[0_0_20px_4px_#00b8b8] dark:hover:shadow-[0_0_20px_4px_#00b8b8] transition-all duration-300"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
