'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProjectSection = () => {
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

    const [currentIndex, setCurrentIndex] = useState(0);
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

    const totalSlides = projects.length;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + slidesPerView) % totalSlides);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - slidesPerView + totalSlides) % totalSlides
        );
    };

    return (
        <section className="projects bg-gray-900 text-white py-16" id="projects">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-teal-400 mb-6">Projects</h2>
            </div>

            <div className="relative">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            width: `${(100 / slidesPerView) * totalSlides}%`,
                            transform: `translateX(${-currentIndex * (100 / slidesPerView)}%)`,
                        }}
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="p-4"
                                style={{ width: `${100 / slidesPerView}%` }}
                            >
                                <div className="project-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover rounded-lg mb-4"
                                        width={500}
                                        height={300}
                                    />
                                    <h3 className="text-2xl font-semibold text-teal-400 mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6">{project.description}</p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-teal-400 hover:text-teal-300 text-lg font-medium transition duration-300"
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

                <button
                    className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 text-teal-400 hover:text-teal-300 cursor-pointer z-10 bg-gray-800 bg-opacity-50 rounded-full p-2"
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                >
                    Prev
                </button>
                <button
                    className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 text-teal-400 hover:text-teal-300 cursor-pointer z-10 bg-gray-800 bg-opacity-50 rounded-full p-2"
                    onClick={handleNext}
                    aria-label="Next Slide"
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default ProjectSection;
