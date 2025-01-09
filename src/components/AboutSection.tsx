'use client';
import React from 'react';
import TypingEffect from '../utils/TypingEffect';
import ScrollReveal from '@/utils/ScrollReveal';
// import AnimateSection from '@/utils/AnimateSection';

const AboutSection = () => {

    return (
        <ScrollReveal>
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
                            className='text-gray-900'
                        />

                        <p className="text-white dark:text-teal-300 leading-relaxed mb-6 font-semibold">
                            I am an experienced Full-Stack Developer with a proven track record of creating dynamic
                            and responsive web applications.
                            <br />
                            <br />
                            On the Front-End, I specialize in
                            <a
                                href="https://reactjs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:text-teal-400 text-gray-900 underline hover:dark:text-teal-600 hover:text-teal-600 transition duration-300"
                                title="Visit React.js"
                            >
                                React.js
                            </a>
                            and
                            <a
                                href="https://nextjs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:text-teal-400 text-gray-900 underline hover:dark:text-teal-600 hover:text-teal-600 transition duration-300"
                                title="Visit Next.js"
                            >
                                Next.js
                            </a>
                            , building intuitive, user-friendly interfaces.
                            <br />
                            <br />
                            On the Back-End, I bring expertise in
                            <a
                                href="https://spring.io/projects/spring-boot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:text-teal-400 text-gray-900 underline hover:dark:text-teal-600 hover:text-teal-600 transition duration-300"
                                title="Visit Java Spring Boot"
                            >
                                Java Spring Boot
                            </a>
                            , delivering robust, scalable, and secure server-side solutions. Additionally, I have extensive
                            experience with the
                            <a
                                href="https://www.mongodb.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:text-teal-400 text-gray-900 underline hover:dark:text-teal-600 hover:text-teal-600 transition duration-300"
                                title="Visit MongoDB"
                            >
                                MongoDB
                            </a>
                            ,
                            <a
                                href="https://expressjs.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:text-teal-400 text-gray-900 underline hover:dark:text-teal-600 hover:text-teal-600 transition duration-300"
                                title="Visit Express.js"
                            >
                                Express.js
                            </a>
                            ,
                            <a
                                href="https://reactjs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:text-teal-400 text-gray-900 underline hover:dark:text-teal-600 hover:text-teal-600 transition duration-300"
                                title="Visit React.js"
                            >
                                React.js
                            </a>
                            , and
                            <a
                                href="https://nodejs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:text-teal-400 text-gray-900 underline hover:dark:text-teal-600 hover:text-teal-600 transition duration-300"
                                title="Visit Node.js"
                            >
                                Node.js
                            </a>
                            , enabling me to develop comprehensive and efficient full-stack solutions.
                            <br />
                            <br />
                            I am committed to writing clean, maintainable code and designing user-centric applications
                            that provide exceptional performance and usability.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/cv/cven10'24.pdf"
                                download="resume-english.pdf"
                                className="px-6 py-3 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-700 dark:bg-teal-500 dark:text-gray-900 dark:hover:bg-teal-400 transition duration-300"
                            >
                                Download English Resume
                            </a>
                            <a
                                href="/cv/cvfr1124.pdf"
                                download="resume-french.pdf"
                                className="px-6 py-3 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-700 dark:bg-teal-500 dark:text-gray-900 dark:hover:bg-teal-400 transition duration-300"
                            >
                                Download French Resume
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollReveal>
    );
};

export default AboutSection;
