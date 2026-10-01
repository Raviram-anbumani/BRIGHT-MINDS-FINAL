import React from 'react';
import { motion } from 'framer-motion';
import { Focus, Brain, Calculator, BookOpen, MessageCircle, Sigma, Sparkles, Lightbulb } from 'lucide-react';
import SectionHeading from './SectionHeading';
import BrandLogo from './BrandLogo';

const leftBenefits = [
  { text: 'Better concentration', icon: Focus },
  { text: 'Stronger memory', icon: Brain },
  { text: 'Faster calculations', icon: Calculator },
  { text: 'Improved reading', icon: BookOpen }
];

const rightBenefits = [
  { text: 'Better pronunciation', icon: MessageCircle },
  { text: 'Strong mathematical foundation', icon: Sigma },
  { text: 'Increased confidence', icon: Sparkles },
  { text: 'Independent learning habits', icon: Lightbulb }
];

const BenefitItem = ({ item, delay, side }) => (
  <motion.div 
    initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    className={`flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all ${side === 'left' ? 'lg:flex-row-reverse lg:text-right' : 'flex-row text-left'}`}
  >
    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-primary border border-blue-100/50">
      <item.icon size={22} strokeWidth={2} />
    </div>
    <span className="text-gray-700 font-medium text-lg">{item.text}</span>
  </motion.div>
);

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="More Than Just Classes" 
          subtitle="We focus on overall cognitive and academic growth."
        />

        {/* Benefits Grid Layout */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12 relative">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/3 flex flex-col gap-5 order-2 lg:order-1">
            {leftBenefits.map((item, index) => (
              <BenefitItem key={index} item={item} delay={index} side="left" />
            ))}
          </div>

          {/* Central Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="w-full sm:w-2/3 lg:w-1/3 order-1 lg:order-2 px-4 flex justify-center py-8 lg:py-0 relative"
          >
            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] w-full max-w-[300px] mx-auto opacity-60"></div>
            
            {/* Circular Branded Element */}
            <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] bg-white rounded-full flex flex-col items-center justify-center shadow-2xl border-[6px] border-white z-10">
              <BrandLogo variant="icon" className="w-[110px] h-[110px] md:w-[155px] md:h-[155px] transform hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 flex flex-col gap-5 order-3 lg:order-3">
            {rightBenefits.map((item, index) => (
              <BenefitItem key={index + 4} item={item} delay={index + 4} side="right" />
            ))}
          </div>

        </div>
        
        {/* Age Group Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center max-w-4xl mx-auto relative overflow-hidden"
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
