import React, { useEffect, useState } from "react";
import Carousel from "./Animation/Carousel";
import { FiFileText, FiCircle, FiLayers, FiLayout, FiCode } from "react-icons/fi";

const TechStack = () => {
  const DEFAULT_ITEMS = [
    {
      title: "Text Animations",
      description: "Cool text animations for your projects.",
      id: 1,
      icon: <FiFileText className="h-6 w-6 text-white" />,
    },
    {
      title: "Animations",
      description: "Smooth animations for your projects.",
      id: 2,
      icon: <FiCircle className="h-6 w-6 text-white" />,
    },
    {
      title: "Components",
      description: "Reusable components for your projects.",
      id: 3,
      icon: <FiLayers className="h-6 w-6 text-white" />,
    },
    {
      title: "Backgrounds",
      description: "Beautiful backgrounds and patterns for your projects.",
      id: 4,
      icon: <FiLayout className="h-6 w-6 text-white" />,
    },
    {
      title: "Common UI",
      description: "Common UI components are coming soon!",
      id: 5,
      icon: <FiCode className="h-6 w-6 text-white" />,
    },
  ];

  // Responsive carousel baseWidth
  const [carouselWidth, setCarouselWidth] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCarouselWidth(300);
      } else if (width < 768) {
        setCarouselWidth(350);
      } else if (width < 1024) {
        setCarouselWidth(400);
      } else {
        setCarouselWidth(500);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="techstack" className="bg-white dark:bg-gray-900 transition-colors duration-500 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl py-12 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-10">
          Tech Stack
        </h2>
        <div className="w-full flex justify-center items-center relative" style={{ height: "70vh" }}>
          <div className="w-full mx-auto" style={{ maxWidth: `${carouselWidth}px` }}>
            <Carousel
              baseWidth={carouselWidth}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              items={DEFAULT_ITEMS}
              loop={true}
              round={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
