import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, align = 'center', light = false }) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  
  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${light ? 'text-white' : 'text-textMain'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-lg ${light ? 'text-white/80' : 'text-textMuted'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
