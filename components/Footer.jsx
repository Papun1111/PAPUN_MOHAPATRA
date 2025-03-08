import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.div
      id="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="footer bg-white dark:bg-gradient-to-r dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 text-gray-800 dark:text-white py-10 transition-colors delay-300 duration-1000 ease-in-out"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Papun</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            I'm Papun, a web developer from India with two years of experience in MERN stack and Data Structures & Algorithms (DSA). I am passionate about basketball and enjoy listening to Arctic Monkeys.
          </p>
        </div>
        <div className="flex-1 mt-6 md:mt-0 flex items-center justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/papunm/"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-white transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://github.com/Papun1111"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      <hr className="border-gray-400 dark:border-gray-600 my-6" />
      <div className="flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">&copy; 2025 Papun Mohapatra. All rights reserved.</p>
        <div className="flex space-x-6">
          <p className="text-sm hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer transition-colors duration-300">
            Terms of Service
          </p>
          <p className="text-sm hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer transition-colors duration-300">
            Privacy Policy
          </p>
          <p className="text-sm hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer transition-colors duration-300">
            Connect With Me
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
