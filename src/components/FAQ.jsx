import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from './SectionHeading';

const faqs = [
  {
    question: "What programs does Bright Minds offer?",
    answer: "We offer Abacus, Vedic Maths, Phonics, and Maths Tuition."
  },
  {
    question: "Who can join Bright Minds?",
    answer: "Age-appropriate classes are available for children based on their learning stage and requirements."
  },
  {
    question: "How can I enquire about classes?",
    answer: "Parents can contact Bright Minds through phone, email, or by filling out the enquiry form on our website."
  },
  {
    question: "Where is Bright Minds located?",
    answer: "We are located at House No. 2, Nehru Avenue, Bharathidasan Colony, K.K. Nagar, Chennai."
  },
  {
    question: "How can I get more information about the programs?",
    answer: "Parents can submit the enquiry form or contact the centre directly. We'd be happy to discuss the best program for your child."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Find quick answers to common questions about Bright Minds."
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
              >
                <span className={`font-heading font-medium text-lg pr-4 ${openIndex === index ? 'text-primary' : 'text-textMain'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-textMuted text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
