import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const steps = [
  {
    num: '01',
    title: 'Discover',
    description: 'Understand the child\'s current learning level.',
    color: 'bg-primary text-primary'
  },
  {
    num: '02',
    title: 'Learn',
    description: 'Introduce concepts through structured teaching.',
    color: 'bg-secondary text-secondary'
  },
  {
    num: '03',
    title: 'Practise',
    description: 'Reinforce skills through activities and guided practice.',
    color: 'bg-supporting text-supporting'
  },
  {
    num: '04',
    title: 'Grow',
    description: 'Build confidence and apply skills independently.',
    color: 'bg-accent text-accent'
  }
];

const LearningApproach = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Approach to Learning" 
          subtitle="A structured pathway to ensure every child understands, remembers, and applies their learning."
        />
        
        <div className="relative mt-16">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className={`w-24 h-24 rounded-full bg-white border-4 border-gray-50 shadow-lg flex items-center justify-center mb-6 relative z-10 ${step.color.split(' ')[1]}`}>
                   {/* We use text color class for text and bg for a subtle glow or just styling */}
                   <span className="font-heading font-bold text-3xl opacity-80">{step.num}</span>
                </div>
                
                <h3 className="text-xl font-heading font-semibold mb-3 text-textMain">{step.title}</h3>
                <p className="text-textMuted text-sm px-4">{step.description}</p>
                
                {/* Mobile connecting line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-10 bg-gray-200 my-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningApproach;
