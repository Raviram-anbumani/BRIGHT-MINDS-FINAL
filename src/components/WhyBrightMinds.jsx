import React from 'react';
import { motion } from 'framer-motion';
import { Puzzle, Target, Users, LayoutDashboard, Sparkles, Heart } from 'lucide-react';
import SectionHeading from './SectionHeading';
import BrandLogo from './BrandLogo';

const features = [
  {
    icon: Puzzle,
    title: 'Age-Appropriate Learning',
    description: 'Activities and teaching methods suited to children\'s learning stages.'
  },
  {
    icon: Target,
    title: 'Skill-Focused Approach',
    description: 'Every program is designed around measurable foundational skills.'
  },
  {
    icon: Users,
    title: 'Interactive Classes',
    description: 'Learning is made engaging instead of purely textbook-based.'
  },
  {
    icon: LayoutDashboard,
    title: 'Strong Foundations',
    description: 'Build essential academic skills early for long-term success.'
  },
  {
    icon: Sparkles,
    title: 'Confidence Building',
    description: 'Encourage children to participate, practise and improve.'
  },
  {
    icon: Heart,
    title: 'Supportive Environment',
    description: 'A positive environment where children can learn comfortably.'
  }
];

const WhyBrightMinds = () => {
  return (
    <section className="py-24 bg-bgLight relative overflow-hidden">
      {/* Decorative Brand Logo */}
      <div className="absolute left-[-10%] top-[10%] opacity-[0.02] pointer-events-none">
        <BrandLogo variant="icon" className="w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Why Parents Choose Bright Minds"
          subtitle="We focus on creating a positive, structured and engaging learning experience for every child."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-textMain">{feature.title}</h3>
              <p className="text-textMuted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBrightMinds;
