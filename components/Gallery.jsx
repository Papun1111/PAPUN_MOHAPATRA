import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Stack from './Animation/Stack'

const Gallery = () => {
  const images = [
    { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
    { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
    { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
    { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
  ];

  // Set card dimensions responsively
  const [cardDimensions, setCardDimensions] = useState({ width: 300, height: 400 });

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 640) {
        setCardDimensions({ width: 200, height: 300 });
      } else if (window.innerWidth < 1024) {
        setCardDimensions({ width: 250, height: 350 });
      } else {
        setCardDimensions({ width: 300, height: 400 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-4 md:p-8"
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
      >
        Gallery
      </motion.h1>

      <Stack
        randomRotation={true}
        sensitivity={180}
        sendToBackOnClick={false}
        cardDimensions={cardDimensions}
        cardsData={images}
      />
    </motion.div>
  );
};

export default Gallery;
