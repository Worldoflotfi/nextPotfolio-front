'use client';

import React from 'react';
import { useTheme } from '../utils/ThemeContext';

const ContactSection = () => {
    const { isDarkMode } = useTheme();

    return (
        <section
            className={`py-16 ${
                isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
            }`}
            id="contact"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2
                        className={`text-4xl font-bold ${
                            isDarkMode ? 'text-teal-400' : 'text-teal-600'
                        } mb-4`}
                    >
                        Get in Touch
                    </h2>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-700'}>
                        Feel free to reach out via the form below or connect with me on social
                        media.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div
                        className={`p-8 rounded-lg shadow-lg ${
                            isDarkMode ? 'bg-gray-800' : 'bg-white'
                        }`}
                    >
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className={`block text-sm font-medium ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className={`mt-1 block w-full ${
                                        isDarkMode
                                            ? 'bg-gray-700 text-gray-300 border-gray-600'
                                            : 'bg-gray-100 text-gray-800 border-gray-300'
                                    } border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400`}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className={`block text-sm font-medium ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className={`mt-1 block w-full ${
                                        isDarkMode
                                            ? 'bg-gray-700 text-gray-300 border-gray-600'
                                            : 'bg-gray-100 text-gray-800 border-gray-300'
                                    } border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400`}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className={`block text-sm font-medium ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className={`mt-1 block w-full ${
                                        isDarkMode
                                            ? 'bg-gray-700 text-gray-300 border-gray-600'
                                            : 'bg-gray-100 text-gray-800 border-gray-300'
                                    } border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400`}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`w-full ${
                                    isDarkMode
                                        ? 'bg-teal-400 text-gray-900 hover:bg-teal-300'
                                        : 'bg-teal-600 text-white hover:bg-teal-500'
                                } font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300`}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Social Media */}
                    <div className="space-y-8">
                        <div
                            className={`p-8 rounded-lg shadow-lg ${
                                isDarkMode ? 'bg-gray-800' : 'bg-white'
                            }`}
                        >
                            <h3
                                className={`text-2xl font-semibold ${
                                    isDarkMode ? 'text-teal-400' : 'text-teal-600'
                                } mb-4`}
                            >
                                Contact Information
                            </h3>
                            <p className={isDarkMode ? 'text-gray-400 mb-4' : 'text-gray-700 mb-4'}>
                                You can also reach me directly via email or phone:
                            </p>
                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-800'}>
                                <strong>Email:</strong> example@example.com
                            </p>
                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-800'}>
                                <strong>Phone:</strong> +123 456 7890
                            </p>
                        </div>

                        <div
                            className={`p-8 rounded-lg shadow-lg ${
                                isDarkMode ? 'bg-gray-800' : 'bg-white'
                            }`}
                        >
                            <h3
                                className={`text-2xl font-semibold ${
                                    isDarkMode ? 'text-teal-400' : 'text-teal-600'
                                } mb-4`}
                            >
                                Connect with Me
                            </h3>
                            <div className="flex space-x-4">
                                {['linkedin', 'github', 'twitter'].map((platform) => (
                                    <a
                                        key={platform}
                                        href={`https://${platform}.com`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`transition duration-300 ${
                                            isDarkMode
                                                ? 'text-teal-400 hover:text-teal-300'
                                                : 'text-teal-600 hover:text-teal-500'
                                        }`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="h-8 w-8"
                                            viewBox="0 0 24 24"
                                        >
                                            {/* Example path, customize based on actual platform */}
                                            <path d="..." />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
