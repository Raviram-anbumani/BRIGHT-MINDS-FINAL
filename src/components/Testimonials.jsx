import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    text: "Bright Minds creates a wonderful learning environment where children can learn with confidence and enthusiasm. We've seen a noticeable improvement in fundamental skills.",
    author: "Parent",
  },
  {
    text: "The structured approach and individual attention really help in building a strong foundation. My child looks forward to attending the classes every week.",
    author: "Parent",
  },
  {
    text: "A truly professional pre-learning centre. The educators are supportive, and the activities are engaging, making learning a joyful experience for kids.",
    author: "Parent",
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="What Parents Say" 
          subtitle="Hear from families who have chosen Bright Minds for their children's foundational learning."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-gray-100 w-12 h-12" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-6 relative z-10 text-base leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="relative z-10">
                <p className="font-heading font-semibold text-textMain">— {testimonial.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
