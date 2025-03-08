import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import project1_img from "../assets/project1_main.png";
import project4_img from "../assets/project1_admin.png";
import project5_img from "../assets/project2_img.png";
import project7_img from "../assets/project3_main.png";
import project8_img from "../assets/project3_admin.png";
import project9_img from "../assets/project4_img.png";

const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const xRotation = useMotionValue(0);
  const yRotation = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 20 };
  const smoothXRotation = useSpring(xRotation, springConfig);
  const smoothYRotation = useSpring(yRotation, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const maxTilt = 15;
    const tiltX = (deltaY / centerY) * maxTilt;
    const tiltY = (deltaX / centerX) * -maxTilt;
    xRotation.set(tiltX);
    yRotation.set(tiltY);
  };

  const handleMouseLeave = () => {
    xRotation.set(0);
    yRotation.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX: smoothXRotation,
        rotateY: smoothYRotation,
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

function Works() {
  const items = [
    {
      image: project1_img,
      link: "https://vitalson.onrender.com/",
      title: "VitalsOn",
      description: "Appointment Booking Site",
    },
    {
      image: project4_img,
      link: "https://vitalspanel.onrender.com/",
      title: "VitalsOn Panel",
      description: "Appointment Booking Admin/Doctor Panel",
    },
    {
      image: project5_img,
      link: "https://bluecourt.onrender.com/",
      title: "Bluecourt",
      description: "Social Media Site",
    },
    {
      image: project7_img,
      link: "https://pamotradelivery.onrender.com/",
      title: "Pamotra",
      description: "Food Delivery Site",
    },
    {
      image: project8_img,
      link: "https://fooddeliveryadminpage.onrender.com/",
      title: "Pamotra Admin",
      description: "Food Delivery Site Admin Panel",
    },
    {
      image: project9_img,
      link: "https://bluelinksaga.onrender.com/",
      title: "BlueLink",
      description: "Video Call Site",
    },
  ];

  return (
    <div
      id="mywork"
      className="p-4 bg-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black transition-colors delay-300 duration-1000 ease-in-out"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white hover:text-indigo-500 hover:scale-105 transition-transform duration-300">
        My Work
      </h2>
      {/* Masonry Gallery Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <TiltCard>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group overflow-hidden transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="responsive"
                  objectFit="cover"
                  className="w-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    {item.title}
                  </h3>
                  <p className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                    {item.description}
                  </p>
                </div>
              </a>
            </TiltCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
