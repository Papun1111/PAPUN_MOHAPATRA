import React, { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiMenu, FiArrowRight } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import DecryptedText from './Animation/DecryptedText'

const Navbar = () => {
  // State to toggle mobile menu open/close
  const [isOpen, setIsOpen] = useState(false)
  // State for dark/light mode (false = light mode, true = dark mode)
  const [darkMode, setDarkMode] = useState(false)

  // Handler to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  // Handler to toggle dark/light mode
  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDarkMode(true)
    }
  }

  // On mount, check localStorage and system preference to set the theme
  useEffect(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, [])

  return (
    <nav
      className="
        font-Outfit
        w-full 
        fixed 
        top-0 
        left-0 
        z-50
        flex 
        items-center 
        justify-between 
        px-4 
        py-4
        md:px-8
        bg-gradient-to-r 
        from-white via-gray-200 to-white 
        text-black 
        dark:from-black dark:via-gray-900 dark:to-black 
        dark:text-white
        shadow-md
        transition-colors ease-in duration-1000 delay-300
      "
    >
      {/* Name/Brand Section */}
      <a href="#" className="flex items-center">
        <DecryptedText
          text="Papun Mohapatra"
          animateOn="view"
          revealDirection="center"
        />
      </a>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
        {['Home', 'About Me', 'TechStack', 'My Work'].map((item, idx) => (
          <li key={idx} className="font-Ovo relative group">
            <a
              href={`#${item.replace(/\s/g, '').toLowerCase()}`}
              className="
                relative 
                inline-block 
                hover:text-gray-700 
                dark:hover:text-gray-300 
                transition-colors 
                duration-300
              "
            >
              {item}
              <span
                className="
                  absolute 
                  left-0 
                  bottom-0 
                  w-0 
                  h-0.5 
                  bg-gray-700 
                  dark:bg-gray-300 
                  transition-all 
                  duration-300 
                  group-hover:w-full
                "
              ></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Right Section (Theme Toggle, Contact, Menu for mobile) */}
      <div className="flex items-center space-x-3 md:space-x-4">
        {/* Theme Toggle Button (Visible on all screens) */}
        <button onClick={toggleTheme} className="focus:outline-none">
          {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>

        {/* Contact Button (Desktop) */}
        <a
          href="#contact"
          className="
            hidden
            md:flex
            items-center 
            space-x-2
            bg-gradient-to-r 
            from-gray-300 
            via-gray-200 
            to-gray-300
            text-black
            dark:from-gray-700 
            dark:via-gray-600 
            dark:to-gray-700
            dark:text-white
            px-5 
            py-2 
            rounded 
            hover:scale-105 
            transition-transform 
            duration-300
          "
        >
          <span>Contact</span>
          <FiArrowRight size={16} />
        </a>

        {/* Menu Icon (Mobile Only) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu (Dropdown/Overlay with Animation) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden
              absolute
              top-16
              left-0
              w-full
              bg-gradient-to-r
              from-white
              via-gray-200
              to-white
              text-black
              dark:from-black
              dark:via-gray-900
              dark:to-black
              dark:text-white
              flex
              flex-col
              items-center
              space-y-4
              py-4
              shadow-md
            "
          >
            {['Home', 'About Me', 'Tech Stack', 'My Work',].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.replace(/\s/g, '').toLowerCase()}`}
                onClick={toggleMenu}
                className="
                  font-Ovo
                  text-sm
                  uppercase
                  tracking-wider
                  hover:text-gray-700
                  dark:hover:text-gray-300
                  transition-colors
                  duration-300
                "
              >
                {item}
              </a>
            ))}

            {/* Optional: Contact button in mobile menu */}
            <a
              href="#contact"
              onClick={toggleMenu}
              className="
                mt-2
                flex
                items-center
                space-x-2
                bg-gradient-to-r
                from-gray-300
                via-gray-200
                to-gray-300
                text-black
                dark:from-gray-700
                dark:via-gray-600
                dark:to-gray-700
                dark:text-white
                px-5
                py-2
                rounded
                hover:scale-105
                transition-transform
                duration-300
              "
            >
              <span>Contact</span>
              <FiArrowRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
