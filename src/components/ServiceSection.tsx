'use client';
import React from 'react';
import { useTheme } from '../utils/ThemeContext'; // Assuming you have the theme context for dark mode and light mode

const ServiceSection = () => {
    const { isDarkMode } = useTheme(); // Get the current theme (dark or light)

    return (
        <section
            className={`services py-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}
            id="services"
        >
            <div className="container mx-auto text-center mb-12">
                <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-teal-400' : 'text-teal-600'} mb-6`}>
                    Services
                </h2>
            </div>
            <div className="services-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {/* Service Box */}
                {[
                    {
                        title: 'Dynamic Web Applications',
                        description:
                            'Expertise in building responsive web applications using modern technologies, focusing on scalability and performance.',
                        icon: '/icons/dynamic.png',
                    },
                    {
                        title: 'Front-End Development',
                        description:
                            'Creating user-friendly interfaces with React.js and Next.js for intuitive and seamless user experiences.',
                        icon: '/icons/front.png',
                    },
                    {
                        title: 'Back-End Solutions',
                        description:
                            'Developing robust and secure server-side solutions with Java Spring Boot to handle complex business logic.',
                        icon: '/icons/back.png',
                    },
                    {
                        title: 'MERN Stack Expertise',
                        description:
                            'Proficiency in MongoDB, Express.js, React.js, and Node.js for developing efficient full-stack applications.',
                        icon: '/icons/MERN-logo.png',
                    },
                    {
                        title: 'Clean Code Practices',
                        description:
                            'Commitment to writing maintainable code and ensuring best practices for long-term project success.',
                        icon: '/icons/clean.png',
                    },
                    {
                        title: 'User-Centric Design',
                        description:
                            'Designing applications that prioritize performance and usability to meet end-user needs effectively.',
                        icon: '/icons/user.png',
                    },
                ].map((service, index) => (
                    <div
                        key={index}
                        className={`service-box p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                            }`}
                    >
                        <div className="service-info text-center">
                            <img
                                src={service.icon}
                                alt={`${service.title} icon`}
                                className="w-30 h-16 mx-auto mb-4"
                            />
                            <h4
                                className={`text-2xl font-semibold mb-4 hover:underline ${isDarkMode ? 'text-teal-400' : 'text-teal-600'
                                    }`}
                            >
                                {service.title}
                            </h4>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceSection;
