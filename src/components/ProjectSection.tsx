'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import Swiper navigation styles
import 'swiper/css/pagination'; // Import Swiper pagination styles
import Image from 'next/image';
import { Swiper as SwiperType } from 'swiper'; // Import the correct Swiper type for ref

const ProjectSection = () => {
    const swiperRef = useRef<SwiperType | null>(null); // Correctly type the ref as SwiperType

    const projects = [
        {
            image: '/images/blog8.jpg',
            title: 'Project 1',
            description: 'A dynamic web application built with React and Node.js. It offers great features for seamless user experience.',
            link: 'https://example.com',
        },
        {
            image: '/images/blog9.jpg',
            title: 'Project 2',
            description: 'A responsive e-commerce platform using Next.js and MongoDB. It provides a full-featured online shopping experience.',
            link: 'https://example.com',
        },
        {
            image: '/images/blog15.jpg',
            title: 'Project 3',
            description: 'A social networking site using React.js and Express.js. It connects users in a modern, user-friendly environment.',
            link: 'https://example.com',
        },
        {
            image: '/images/blog15.jpg',
            title: 'Project 4',
            description: 'A content management system built with React and Node.js. It offers seamless content creation and editing tools.',
            link: 'https://example.com',
        },
    ];

    // Handle Next Slide
    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();  // Accessing swiper instance
        }
    };

    // Handle Previous Slide
    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();  // Accessing swiper instance
        }
    };

    return (
        <section className="projects bg-gray-900 text-white py-16" id="projects">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-teal-400 mb-6">Projects</h2>
            </div>

            <Swiper
                ref={swiperRef}
                spaceBetween={30} // Default space between slides
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="swiper-container"
            >
                {projects.map((project, index) => (
                    <SwiperSlide
                        key={index}
                        className={`project-slide ${index === 0 ? 'pl-8' : ''} ${index === 1 ? 'pr-8' : ''}`}
                    >
                        <div className="project-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                                width={500}
                                height={300}
                            />
                            <h3 className="text-2xl font-semibold text-teal-400 mb-4">{project.title}</h3>
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
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Buttons */}
                <div
                    className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 text-teal-400 hover:text-teal-300 cursor-pointer z-10"
                    onClick={handleNext}
                >
                    Next
                </div>
                <div
                    className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 text-teal-400 hover:text-teal-300 cursor-pointer z-10"
                    onClick={handlePrev}
                >
                    Prev
                </div>
            </Swiper>
        </section>
    );
};

export default ProjectSection;
