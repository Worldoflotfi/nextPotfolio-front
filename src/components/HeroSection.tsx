import React from "react";
import Image from "next/image";
import 'boxicons/css/boxicons.min.css';


const HeroSection = () => {
    return (
        <section className="bg-gray-900 text-white">
            <div className="container mx-auto flex flex-col items-center justify-center px-5 py-16 text-center md:py-32 md:flex-row md:text-left">

                {/* Image and Heading Section */}
                <div className="flex flex-col items-center md:items-start mr-3px md:flex-row mt-4 md:gap-10">

                    {/* Heading and Text */}
                    <div className="text-center mt-6 md:text-left md:w-[50%]">
                        <h1 className="text-4xl font-bold md:text-6xl">
                            Hi, I`m <span className="text-teal-400">Mohamed Amine Lotfi</span>
                        </h1>
                        <p className="mt-4 text-lg md:text-2xl text-gray-300">
                            A passionate Full Stack Developer building modern web experiences.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-8 flex justify-center md:justify-start gap-6">
                            <a href="#" className="text-teal-500 hover:text-teal-200 text-3xl">
                                <i className="bx bxs-phone"></i>
                            </a>
                            <a href="#" className="text-teal-500 hover:text-teal-200 text-3xl">
                                <i className="bx bxl-linkedin-square"></i>
                            </a>
                            <a href="#" className="text-teal-500 hover:text-teal-200 text-3xl">
                                <i className="bx bxl-twitter"></i>
                            </a>
                            <a href="#" className="text-teal-500 hover:text-teal-200 text-3xl">
                                <i className="bx bxl-github"></i>
                            </a>
                        </div>


                        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 text-lg font-semibold bg-teal-500 hover:bg-teal-400 rounded-lg"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 text-lg font-semibold border border-teal-500 hover:bg-teal-500 rounded-lg"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Image with neon border */}
                    <div className="relative mb-8 md:mb-0 mt-6 md:w-[40%]">
                        <Image
                            src="/images/me.png"
                            alt="Mohamed Amine Lotfi"
                            width={400}  // Adjusted width for smaller image
                            height={400} // Adjusted height for smaller image
                            className="rounded-full border-4 border-teal-400 hover:shadow-lg hover:shadow-teal-500/50"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
