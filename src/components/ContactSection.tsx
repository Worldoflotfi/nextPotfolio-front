'use client';

import React from 'react';

const ContactSection = () => {
    return (
        <section className="bg-gray-900 text-white py-16" id="contact">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-teal-400 mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-gray-400">
                        Feel free to reach out via the form below or connect with me on social media.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-1 block w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="mt-1 block w-full bg-gray-700 text-gray-300 border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-teal-400 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-teal-300 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Social Media */}
                    <div className="space-y-8">
                        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-teal-400 mb-4">
                                Contact Information
                            </h3>
                            <p className="text-gray-400 mb-4">
                                You can also reach me directly via email or phone:
                            </p>
                            <p className="text-gray-300">
                                <strong>Email:</strong> example@example.com
                            </p>
                            <p className="text-gray-300">
                                <strong>Phone:</strong> +123 456 7890
                            </p>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-teal-400 mb-4">
                                Connect with Me
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 hover:text-teal-300 transition duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="h-8 w-8"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.6 8.98H4V24H.6V8.98zM8.5 8.98H12v2.08h.05c.49-.93 1.68-1.91 3.45-1.91 3.7 0 4.38 2.44 4.38 5.62V24H16v-7.5c0-1.78-.03-4.08-2.48-4.08-2.48 0-2.86 1.94-2.86 3.94V24H8.5V8.98z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 hover:text-teal-300 transition duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="h-8 w-8"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2C6.477 2 2 6.485 2 12.012c0 4.423 2.865 8.17 6.839 9.504.5.091.682-.217.682-.482 0-.237-.01-1.023-.014-1.857-2.781.603-3.369-1.343-3.369-1.343-.455-1.16-1.11-1.469-1.11-1.469-.909-.622.069-.61.069-.61 1.003.07 1.531 1.033 1.531 1.033.891 1.53 2.341 1.088 2.911.832.092-.647.349-1.089.635-1.34-2.22-.253-4.555-1.113-4.555-4.953 0-1.094.39-1.99 1.029-2.691-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.025a9.57 9.57 0 012.5-.34c.848.004 1.705.115 2.5.34 1.91-1.296 2.75-1.025 2.75-1.025.544 1.377.202 2.394.1 2.647.64.7 1.028 1.597 1.028 2.691 0 3.848-2.337 4.696-4.564 4.944.36.31.683.921.683 1.854 0 1.338-.012 2.419-.012 2.745 0 .268.18.577.688.479C19.135 20.182 22 16.435 22 12.012 22 6.485 17.523 2 12 2z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 hover:text-teal-300 transition duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="h-8 w-8"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.444 4.834c-.815.362-1.69.605-2.606.713a4.515 4.515 0 001.98-2.49 9.03 9.03 0 01-2.865 1.097A4.506 4.506 0 0016.63 3c-2.493 0-4.515 2.03-4.515 4.526 0 .354.038.698.114 1.028a12.812 12.812 0 01-9.305-4.726 4.48 4.48 0 00-.612 2.278 4.526 4.526 0 002.014 3.764 4.465 4.465 0 01-2.045-.564v.056c0 2.13 1.513 3.917 3.521 4.322a4.487 4.487 0 01-2.04.077 4.53 4.53 0 004.227 3.148A9.06 9.06 0 010 19.45a12.775 12.775 0 006.917 2.036c8.303 0 12.839-6.893 12.839-12.88 0-.196-.005-.391-.014-.584A9.213 9.213 0 0024 4.6a9.07 9.07 0 01-2.556.7z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
