import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Use available images from project
import img1 from '../assets/images/8.jpeg';
import img2 from '../assets/images/3.jpeg';
import img3 from '../assets/images/9.jpeg';

const slides = [
  {
    id: 1,
    image: img1,
    badge: 'BUILDING STRONG FOUNDATIONS',
    headline: 'Where Young Minds Begin to Shine.',
    description: 'Fun, focused and skill-based learning designed to build confidence, curiosity and strong foundational skills.',
    primaryCTA: 'Explore Programs',
    primaryLink: '#programs',
    secondaryCTA: 'Enquire Now',
    secondaryLink: '#contact'
  },
  {
    id: 2,
    image: img2,
    badge: 'LEARN SMARTER',
    headline: 'Strong Skills Today. Confident Learners Tomorrow.',
    description: 'From Abacus and Vedic Maths to Phonics and Mathematics, we help children develop skills that stay with them.',
    primaryCTA: 'Discover Our Programs',
    primaryLink: '#programs',
    secondaryCTA: 'Talk to Us',
    secondaryLink: '#contact'
  },
  {
    id: 3,
    image: img3,
    badge: 'FUN • INTERACTIVE • SKILL-BASED',
    headline: 'Learning That Children Love.',
    description: 'Engaging activities, age-appropriate teaching and individual attention create a positive learning experience.',
    primaryCTA: 'Join Bright Minds',
    primaryLink: '#contact',
    secondaryCTA: 'Contact Us',
    secondaryLink: '#contact'
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div 
      className="relative w-full h-[85vh] min-h-[600px] mt-[72px] overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10">
              <div className="max-w-2xl">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-white text-xs md:text-sm font-semibold tracking-wider mb-6"
                >
                  {slides[current].badge}
                </motion.span>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6 text-balance"
                >
                  {slides[current].headline}
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl text-balance"
                >
                  {slides[current].description}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-wrap gap-4"
                >
                  <a 
                    href={slides[current].primaryLink}
                    className="bg-accent hover:bg-[#e6b44e] text-textMain px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105"
                  >
                    {slides[current].primaryCTA}
                  </a>
                  <a 
                    href={slides[current].secondaryLink}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105"
                  >
                    {slides[current].secondaryCTA}
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition-colors backdrop-blur-sm z-10 hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition-colors backdrop-blur-sm z-10 hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Pagination */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index ? 'w-8 h-2.5 bg-accent' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
