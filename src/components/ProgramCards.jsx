import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Zap, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import BrandLogo from './BrandLogo';

import abacusImg from '../assets/images/abacus-course.jpg';
import vedicMathsImg from '../assets/images/vedic-maths-course.jpg';
import phonicsImg from '../assets/images/phonics-course.jpg';
import mathTuitionImg from '../assets/images/math-tuition-course.jpg';

const programs = [
  {
    title: 'ABACUS',
    image: abacusImg,
    icon: Calculator,
    description: 'Build strong number sense, concentration, memory and mental calculation skills through structured Abacus learning.',
    benefits: ['Number skills', 'Concentration', 'Memory', 'Mental calculation'],
    color: 'primary'
  },
  {
    title: 'VEDIC MATHS',
    image: vedicMathsImg,
    icon: Zap,
    description: 'Discover faster and smarter calculation techniques while developing mathematical confidence and problem-solving ability.',
    benefits: ['Faster calculations', 'Mental maths', 'Problem solving', 'Mathematical confidence'],
    color: 'secondary'
  },
  {
    title: 'PHONICS',
    image: phonicsImg,
    icon: BookOpen,
    description: 'Develop strong reading, pronunciation and early language skills through systematic phonics-based learning.',
    benefits: ['Reading', 'Pronunciation', 'Vocabulary', 'Early literacy'],
    color: 'supporting'
  },
  {
    title: 'MATH TUITION',
    image: mathTuitionImg,
    icon: GraduationCap,
    description: 'Strengthen mathematical concepts with guided learning, practice and individual attention.',
    benefits: ['Concept clarity', 'Practice', 'Problem solving', 'Confidence'],
    color: 'accent'
  }
];

const getColorClasses = (color) => {
  switch (color) {
    case 'primary': return 'text-primary bg-primary/10 group-hover:bg-primary group-hover:text-white border-primary/20';
    case 'secondary': return 'text-secondary bg-secondary/10 group-hover:bg-secondary group-hover:text-white border-secondary/20';
    case 'supporting': return 'text-supporting bg-supporting/10 group-hover:bg-supporting group-hover:text-white border-supporting/20';
    case 'accent': return 'text-accent bg-accent/10 group-hover:bg-accent group-hover:text-white border-accent/20';
    default: return 'text-primary bg-primary/10 group-hover:bg-primary group-hover:text-white border-primary/20';
  }
};

const ProgramCards = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Explore Our Learning Programs" 
          subtitle="Purposefully designed programs that help children learn, practise and grow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
            >
              {/* Image Header */}
              <div className="w-full h-[220px] overflow-hidden relative">
                <img 
                  src={prog.image} 
                  alt={`${prog.title} class`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                
                {/* Icon overlaid on image */}
                <div className={`absolute bottom-4 left-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300 bg-white ${getColorClasses(prog.color).split(' ')[0]}`}>
                  <prog.icon size={24} />
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow relative">
                {/* Subtle Brand Mark background */}
                <div className="absolute right-2 top-2 opacity-[0.03] transform rotate-12 transition-transform group-hover:scale-110 duration-500 pointer-events-none">
                  <BrandLogo variant="icon" className="w-32 h-32" />
                </div>

                <h3 className="text-xl font-heading font-bold mb-3 text-textMain group-hover:text-primary transition-colors">{prog.title}</h3>
                <p className="text-textMuted text-sm mb-6 flex-grow">{prog.description}</p>
                
                <div className="mb-8 relative z-10">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {prog.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className={`w-1.5 h-1.5 rounded-full mr-2 bg-gray-300 group-hover:bg-gray-400`} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a href="#contact" className="mt-auto inline-flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition-colors relative z-10">
                  Learn More <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCards;
