import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16 text-center md:py-32">
        <h1 className="text-4xl font-bold md:text-6xl">
          Hi, I`m <span className="text-teal-400"> Mohamed Amine Lotfi</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300">
          A passionate Full Stack Developer building modern web experiences.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
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
    </section>
  );
};

export default HeroSection;
