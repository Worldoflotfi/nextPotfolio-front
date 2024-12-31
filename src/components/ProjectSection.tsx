'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from '../utils/ThemeContext'; 

const ProjectSection = () => {
    const { isDarkMode } = useTheme(); //current theme (dark or light)

    const projects = [
        {
            image: '/images/blog8.jpg',
            title: 'Project 1',
            description: 'A dynamic web application built with React and Node.js.',
            link: 'https://example.com',
        },
        {
            image: '/images/blog9.jpg',
            title: 'Project 2',
            description: 'A responsive e-commerce platform using Next.js and MongoDB.',
            link: 'https://example.com',
        },
        {
            image: '/images/blog15.jpg',
            title: 'Project 3',
            description: 'A social networking site using React.js and Express.js.',
            link: 'https://example.com',
        },
        {
            image: '/images/blog15.jpg',
            title: 'Project 4',
            description: 'A content management system built with React and Node.js.',
            link: 'https://example.com',
        },
    ];

    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const updateSlidesPerView = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setSlidesPerView(3);
            } else if (width >= 640) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);
        return () => window.removeEventListener('resize', updateSlidesPerView);
    }, []);

    return (
        <section
            className={`projects py-16 ${
                isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
            }`}
            id="projects"
        >
            <div className="container mx-auto text-center mb-12">
                <h2
                    className={`text-4xl font-bold ${
                        isDarkMode ? 'text-teal-400' : 'text-teal-600'
                    } mb-6`}
                >
                    Projects
                </h2>
            </div>

            <div className="relative">
                <div className="overflow-x-scroll scrollbar-custom">
                    <div
                        className="flex space-x-4"
                        style={{
                            minWidth: `${100 * (projects.length / slidesPerView)}%`,
                        }}
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="min-w-[300px]"
                                style={{
                                    width: `calc(100% / ${slidesPerView})`,
                                }}
                            >
                                <div
                                    className={`project-card p-6 rounded-lg shadow-lg hover:shadow-xl ${
                                        isDarkMode
                                            ? 'bg-gray-800 text-gray-200'
                                            : 'bg-teal-500 text-gray-800'
                                    }`}
                                    style={{
                                        boxShadow: isDarkMode
                                            ? '5px 5px 10px rgba(0, 0, 0, 0.8), 0 10px 20px rgba(0, 0, 0, 0.6)' // Shadow from left and bottom in dark mode
                                            : '5px 5px 10px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1)', // Shadow from left and bottom in light mode
                                    }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover rounded-lg mb-4"
                                        width={500}
                                        height={300}
                                    />
                                    <h3
                                        className={`text-2xl font-semibold ${
                                            isDarkMode
                                                ? 'text-teal-400'
                                                : 'text-gray-800'
                                        } mb-4`}
                                    >
                                        {project.title}
                                    </h3>
                                    <p
                                        className={`${
                                            isDarkMode
                                                ? 'text-gray-400'
                                                : 'text-gray-200'
                                        } mb-6`}
                                    >
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center ${
                                            isDarkMode
                                                ? 'text-teal-400 hover:text-teal-300'
                                                : 'text-gray-800 hover:text-gray-100'
                                        } text-lg font-medium transition duration-300`}
                                    >
                                        <span>Visit Website</span>
                                        <svg
                                            className="w-5 h-5 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 12h14M12 5l7 7-7 7"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p
                    className={`absolute right-4 -bottom-10 flex items-center text-sm ${
                        isDarkMode ? 'text-teal-400' : 'text-teal-600'
                    }`}
                >
                    <span>Scroll to see more</span>
                    <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </p>
            </div>
        </section>
    );
};

export default ProjectSection;
