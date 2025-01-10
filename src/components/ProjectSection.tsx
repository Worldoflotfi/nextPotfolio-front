'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from '../utils/ThemeContext';
import ScrollReveal from '@/utils/ScrollReveal';

const ProjectSection = () => {
    const { isDarkMode } = useTheme(); // INFO: current theme (dark or light)

    const projects = [
        {
            image: '/projects/blog.JPG',
            title: 'Blog App',
            description: 'A dynamic platform for creating and managing blog posts using React.js and Node.js.',
            link: 'https://github.com/Worldoflotfi/React-blog-app-frontend',
        },
        {
            image: '/projects/hidaya.JPG',
            title: 'Hidaya Store',
            description: 'An online marketplace for Islamic products built with the MERN stack.',
            link: 'https://example.com',
        },
        {
            image: '/projects/real estate.JPG',
            title: 'Al-Mokhbir Al-Aqari',
            description: 'A learning management system for real estate students using Next.js, Node.js, and MongoDB.',
            link: 'https://github.com/Worldoflotfi/RE-agengy-front',
        },
        {
            image: '/images/blog15.jpg',
            title: 'ATM Management App',
            description: 'A comprehensive application for managing ATM operations using React.js and Java Spring Boot.',
            link: 'https://github.com/Worldoflotfi/ATM-management',
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
            className={`projects py-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
                }`}
            id="projects"
        >
            <ScrollReveal>
                <div className="container mx-auto text-center mb-12">

                    <h2
                        className={`text-4xl font-bold ${isDarkMode ? 'text-teal-400' : 'text-teal-600'
                            } mb-6`}
                    >
                        Projects
                    </h2>
                </div>

                <div className="relative">
                    <div className="overflow-x-scroll scrollbar-custom">
                        <div
                            className="flex space-x-4 mb-6"
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
                                        className={`project-card p-6 rounded-lg shadow-lg hover:shadow-xl ${isDarkMode
                                            ? 'bg-gray-800 text-gray-200'
                                            : 'bg-gray-200 text-gray-800'
                                            }`}
                                        style={{
                                            boxShadow: isDarkMode
                                                ? '3px 3px 6px rgba(0, 0, 0, 0.5), 0 6px 12px rgba(0, 0, 0, 0.3)'  // Reduced shadow for dark mode
                                                : '3px 3px 6px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.05)'  // Reduced shadow for light mode

                                        }}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-64 object-cover rounded-lg mb-4"
                                            width={500}
                                            height={200}
                                        />
                                        <h3
                                            className={`text-2xl font-semibold ${isDarkMode
                                                ? 'text-teal-400'
                                                : 'text-teal-600'
                                                } mb-4`}
                                        >
                                            {project.title}
                                        </h3>
                                        <p
                                            className={`${isDarkMode
                                                ? 'text-gray-400'
                                                : 'text-gray-700'
                                                } mb-6`}
                                        >
                                            {project.description}
                                        </p>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center ${isDarkMode
                                                ? 'text-teal-400 hover:text-teal-300'
                                                : 'text-teal-500 hover:text-teal-300'
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
                        className={`absolute right-4 -bottom-10 flex items-center pt-0 text-sm ${isDarkMode ? 'text-teal-400' : 'text-teal-600'
                            } animate-bounce`}
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
            </ScrollReveal>
        </section>

    );
};

export default ProjectSection;
