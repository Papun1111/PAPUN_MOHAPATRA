import React from 'react';
import TrueFocus from './Animation/TrueFocus';
import Lightning from './Animation/Lightning';

const Hero = () => {
  return (
    <div id='home' className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      {/* Background Lightning effect only visible in dark mode */}
      <div className="hidden dark:block absolute inset-0">
        <Lightning
          hue={220}
          xOffset={0}
          speed={1}
          intensity={1}
          size={1}
        />
      </div>

      <div className="relative z-10 max-w-2xl px-4 text-center opacity-0 animate-fadeIn">
        {/* Heading */}
        <h3 className="mb-3 text-3xl font-bold transition-transform duration-300 hover:scale-105">
          Hi, I’m{' '}
          <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            <TrueFocus 
              sentence="Papun Mohapatra"
              manualMode={false}
              blurAmount={5}
              borderColor="cyan"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </span>
        </h3>

        {/* Subheading */}
        <h2 className="mb-4 text-xl font-semibold transition-transform duration-300 hover:scale-105">
          Full-Stack Web Developer based in India
        </h2>

        {/* Description */}
        <p className="mb-6 text-gray-700 dark:text-gray-300 transition-colors duration-300 hover:text-teal-600 dark:hover:text-teal-400">
          I am a full-stack web developer from Odisha, India with 3 years of experience working with various frameworks and DevOps.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="px-6 py-2 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow hover:from-blue-600 hover:to-purple-600 hover:scale-105"
          >
            <a href="https://www.linkedin.com/in/papunm/">Connect with me</a>
          </button>
          <a
            href="/sample-resume.pdf"
            download
            className="px-6 py-2 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow hover:from-blue-600 hover:to-purple-600 hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Fade-in Keyframe and Utility Class */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(15rem);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1000ms ease-in 300ms forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
