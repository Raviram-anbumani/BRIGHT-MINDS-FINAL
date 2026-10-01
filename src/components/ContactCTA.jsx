import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-white mb-6"
        >
          Ready to Help Your Child Learn, Grow & Shine?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto"
        >
          Reach out to us today and let's discuss the best program to build a strong foundation for your child's future.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a 
            href="tel:8105732962"
            className="flex items-center gap-2 bg-white text-primary hover:bg-gray-50 px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Phone size={18} /> Call Us
          </a>
          <a 
            href="#enquiry"
            className="flex items-center gap-2 bg-primary border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Send an Enquiry
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
            <Phone className="text-accent mb-4 w-8 h-8" />
            <h4 className="text-white font-semibold mb-2">Phone</h4>
            <a href="tel:8105732962" className="text-gray-200 hover:text-white transition-colors">8105732962</a>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
            <Mail className="text-accent mb-4 w-8 h-8" />
            <h4 className="text-white font-semibold mb-2">Email</h4>
            <a href="mailto:brightmindsplsc@gmail.com" className="text-gray-200 hover:text-white transition-colors">brightmindsplsc@gmail.com</a>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
            <MapPin className="text-accent mb-4 w-8 h-8" />
            <h4 className="text-white font-semibold mb-2">Location</h4>
            <p className="text-gray-200 text-center text-sm">House No. 2, Nehru Avenue, Bharathidasan Colony, K.K. Nagar, Chennai</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
