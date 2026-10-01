import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import aboutImg from '../assets/images/6.jpeg'; // Ensure this matches an appropriate available image
import BrandLogo from './BrandLogo';

const focusPoints = [
  'Concept clarity',
  'Mental calculation',
  'Reading skills',
  'Pronunciation',
  'Mathematical confidence',
  'Concentration',
  'Logical thinking',
  'Learning confidence'
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/3]">
              <img 
                src={aboutImg} 
                alt="Children learning in a classroom" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Small decorative bulb */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
               <BrandLogo variant="icon" className="w-12 h-12" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <BrandLogo variant="icon" className="w-6 h-6 scale-75 transform origin-left" />
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">About Bright Minds</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textMain mb-6 text-balance leading-tight">
              A Strong Beginning Creates a Strong Future.
            </h2>
            
            <p className="text-textMuted text-lg mb-8">
              Bright Minds is a pre-learning skill centre focused on developing essential academic and cognitive skills in children through structured, interactive and age-appropriate learning.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {focusPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#programs" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Know More About Us
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
