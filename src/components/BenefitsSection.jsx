import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import benefitsImg from '../assets/images/4.jpeg'; // Ensure this matches an available image

const benefits = [
  'Better concentration',
  'Stronger memory',
  'Faster calculations',
  'Improved reading',
  'Better pronunciation',
  'Strong mathematical foundation',
  'Increased confidence',
  'Independent learning habits'
];

const BenefitsSection = () => {
  // Split benefits into two columns for desktop layout around the image
  const leftBenefits = benefits.slice(0, 4);
  const rightBenefits = benefits.slice(4, 8);

  const BenefitItem = ({ text, delay }) => (
    <motion.div 
      initial={{ opacity: 0, x: delay % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-50"
    >
      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
        <Check size={16} strokeWidth={3} />
      </div>
      <span className="text-gray-700 font-medium">{text}</span>
    </motion.div>
  );

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="More Than Just Classes" 
          subtitle="We focus on overall cognitive and academic growth."
        />

        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-8 relative">
          
          {/* Left Column (Desktop) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4 order-2 lg:order-1">
            {leftBenefits.map((benefit, index) => (
              <BenefitItem key={index} text={benefit} delay={index} />
            ))}
          </div>

          {/* Central Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full sm:w-2/3 lg:w-1/3 order-1 lg:order-2 px-4"
          >
            <div className="relative rounded-full aspect-square overflow-hidden shadow-2xl shadow-primary/20 border-8 border-white">
              <img 
                src={benefitsImg} 
                alt="Child enjoying learning" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right Column (Desktop) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4 order-3 lg:order-3">
            {rightBenefits.map((benefit, index) => (
              <BenefitItem key={index + 4} text={benefit} delay={index + 4} />
            ))}
          </div>

        </div>
        
        {/* Age Group Section inside Benefits for cohesive flow */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-32 h-32 bg-supporting/10 rounded-full blur-2xl"></div>
          <div className="absolute left-0 bottom-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-textMain mb-4">Learning Designed for Growing Minds</h3>
          <p className="text-textMuted mb-8 max-w-2xl mx-auto text-lg">
            Programs are structured according to the child's age, current level and learning needs. We ensure that every student gets age-appropriate classes for maximum benefit.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3.5 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Ask About the Right Program
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default BenefitsSection;
