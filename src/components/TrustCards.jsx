import React from 'react';
import { Brain, UserCheck, PlayCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const trustCards = [
  {
    icon: Brain,
    title: 'Skill Development',
    description: 'Build strong academic foundations.',
    color: 'bg-primary/10 text-primary'
  },
  {
    icon: UserCheck,
    title: 'Individual Attention',
    description: 'Learning designed around each child\'s pace.',
    color: 'bg-secondary/10 text-secondary'
  },
  {
    icon: PlayCircle,
    title: 'Interactive Learning',
    description: 'Make learning enjoyable and engaging.',
    color: 'bg-supporting/10 text-supporting'
  },
  {
    icon: Star,
    title: 'Confidence Building',
    description: 'Help children approach learning with confidence.',
    color: 'bg-accent/10 text-accent'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const TrustCards = () => {
  return (
    <section className="py-8 md:py-12 bg-white relative z-20 mt-4 md:-mt-10 mx-4 sm:mx-6 lg:mx-8 rounded-2xl shadow-xl shadow-gray-200/50 max-w-7xl xl:mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-heading font-bold text-textMain"
          >
            Helping Children Build Skills That Last.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-textMuted max-w-2xl mx-auto"
          >
            Bright Minds – Pre-Learning Skill Centre provides structured and engaging learning programs designed to strengthen children's foundational academic and cognitive skills.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustCards.map((card, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${card.color}`}>
                <card.icon size={28} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-textMuted text-sm">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustCards;
