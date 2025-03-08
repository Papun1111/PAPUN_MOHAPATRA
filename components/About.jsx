import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import profile_img from "../assets/profile_img.jpeg"
// Define skill data with the new gradient using your preferred colors
const skillData = [
  {
    name: 'HTML & CSS',
    level: '50%',
    gradient: 'bg-gradient-to-r from-[#504B38] via-[#EBE5C2] to-[#F8F3D9]',
  },
  {
    name: 'Javascript',
    level: '70%',
    gradient: 'bg-gradient-to-r from-[#504B38] via-[#EBE5C2] to-[#F8F3D9]',
  },
  {
    name: 'ReactJs',
    level: '85%',
    gradient: 'bg-gradient-to-r from-[#504B38] via-[#EBE5C2] to-[#F8F3D9]',
  },
  {
    name: 'MongoDB, Node, ExpressJs',
    level: '90%',
    gradient: 'bg-gradient-to-r from-[#504B38] via-[#EBE5C2] to-[#F8F3D9]',
  },
];

const About = () => {
  const [isVisible, setIsVisible] = useState({
    title: false,
    profile: false,
    aboutText: false,
    skills: false,
    achievements: false,
  });

  useEffect(() => {
    // Scroll handler to control which sections appear
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsVisible({
        title: scrollY > windowHeight * 0.1,
        profile: scrollY > windowHeight * 0.2,
        aboutText: scrollY > windowHeight * 0.3,
        skills: scrollY > windowHeight * 0.4,
        achievements: scrollY > windowHeight * 0.5,
      });
    };

    // Attach the scroll listener
    window.addEventListener('scroll', handleScroll);

    // Call once on mount to set initial visibility if already scrolled
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Helper function to produce transition classes
  const getTransitionClasses = (visible, direction = 'x') => {
    // direction can be 'x' for left-right or 'y' for up-down
    const hiddenClass =
      direction === 'x' ? '-translate-x-5 opacity-0' : '-translate-y-5 opacity-0';
    const visibleClass = 'translate-x-0 translate-y-0 opacity-100';

    return `transform transition-all duration-700 ${
      visible ? visibleClass : hiddenClass
    }`;
  };

  return (
    <div
      id="aboutme"
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 
                 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300
                 dark:bg-gradient-to-br dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700
                 text-zinc-800 dark:text-zinc-200"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Title Section */}
        <div className={`text-center mb-10 ${getTransitionClasses(isVisible.title, 'x')}`}>
          <h1 className="text-3xl md:text-4xl font-bold 
                         bg-gradient-to-r from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-600
                         bg-clip-text text-transparent">
            About Me
          </h1>
        </div>

        {/* Profile Image Centered at Top */}
        <div className={`flex justify-center mb-8 ${getTransitionClasses(isVisible.profile, 'x')}`}>
          <div
            className="relative w-56 h-56 rounded-full overflow-hidden shadow-md 
                       group transition-transform duration-300 hover:scale-105 
                       ring-2 ring-transparent hover:ring-blue-400"
          >
            <Image
              src={profile_img}
              alt="Profile"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-full transition-all duration-300"
            />
          </div>
        </div>

        {/* About Text and Skills */}
        <div className={`space-y-6 mb-8 ${getTransitionClasses(isVisible.aboutText, 'x')}`}>
          {/* About Content */}
          <div className="space-y-4 text-sm md:text-base">
            <p className="leading-relaxed hover:text-zinc-900 dark:hover:text-zinc-100 transition duration-300">
              Hi, I'm Papun, a passionate engineering student at ITER with a keen interest in full-stack
              development. My expertise lies in the MERN stack, where I enjoy creating dynamic and innovative
              web applications.
            </p>
            <p className="leading-relaxed hover:text-zinc-900 dark:hover:text-zinc-100 transition duration-300">
              I have a deep passion for basketball. Whether I'm hitting the court for a game or watching the latest
              match, the sport fuels my enthusiasm for teamwork and strategy.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            {skillData.map((skill, index) => (
              <div
                key={skill.name}
                className={`space-y-2 ${getTransitionClasses(isVisible.skills, 'x')}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <p className="text-zinc-700 dark:text-zinc-300 font-medium text-sm md:text-base">
                  {skill.name}
                </p>
                <div className="h-2 bg-zinc-300 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${skill.gradient} rounded-full transform origin-left transition-all duration-500 hover:scale-x-110`}
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div
          className={`grid md:grid-cols-3 gap-6 md:gap-8 mt-12 ${getTransitionClasses(
            isVisible.achievements,
            'y'
          )}`}
        >
          {[
            { number: '2+', text: 'YEARS OF EXPERIENCE' },
            { number: '10+', text: 'PROJECTS COMPLETED' },
            { number: '20+', text: 'HAPPY CLIENTS' },
          ].map((achievement, index) => (
            <div
              key={index}
              className="p-4 md:p-6 bg-zinc-50 dark:bg-zinc-800 rounded-xl shadow-md
                         hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
            >
              <h1 className="text-2xl font-bold 
                             bg-gradient-to-r from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-600
                             bg-clip-text text-transparent mb-1">
                {achievement.number}
              </h1>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs md:text-sm">
                {achievement.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
