'use client';
import React from 'react';
import TypingEffect from './TypingEffect';

const AboutSection = () => {
    return (
        <section
            className="about bg-teal-500 text-gray-900 dark:bg-gray-900 dark:text-teal-400 py-16"
            id="about"
        >
            <div className="container mx-auto flex flex-col items-center text-center">
                {/* Content Section */}
                <div className="about-content md:w-2/3">
                    <h2 className="text-4xl font-bold mb-6">
                        About <span className="text-white dark:text-teal-400">Me</span>
                    </h2>

                    {/* Typing Effect */}
                    <TypingEffect
                        texts={[
                            'Full-Stack Developer',
                            'Front End Developer | React.JS Next.JS',
                            'Back End Developer | Java Spring Boot',
                            'MERN Stack',
                        ]}
                        typingSpeed={100}
                        deletingSpeed={50}
                        pauseTime={1500}
                        className= 'text-gray-900'
                    />

                    <p className="text-white dark:text-teal-300 leading-relaxed mb-6 font-semibold">
                        I am a Full-Stack Developer with expertise in creating dynamic and responsive web applications. As a Front-End Developer, I specialize in React.js and Next.js, building intuitive and user-friendly interfaces. On the Back-End, I leverage Java Spring Boot for developing robust server-side solutions. With a strong foundation in the MERN Stack (MongoDB, Express.js, React.js, and Node.js), I excel at developing scalable and efficient solutions tailored to meet client needs, always with a focus on clean code and user-centric design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/images/resume-english.pdf"
                            download="resume-english.pdf"
                            className="px-6 py-3 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-700 dark:bg-teal-500 dark:text-gray-900 dark:hover:bg-teal-400 transition duration-300"
                        >
                            Download English Resume
                        </a>
                        <a
                            href="/images/resume-french.pdf"
                            download="resume-french.pdf"
                            className="px-6 py-3 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-700 dark:bg-teal-500 dark:text-gray-900 dark:hover:bg-teal-400 transition duration-300"
                        >
                            Download French Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
