import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { sendEnquiryEmail } from '../services/emailService';
import BrandLogo from './BrandLogo';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phoneNumber: '',
    email: '',
    program: '',
    childAge: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const validate = () => {
    const newErrors = {};
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent Name is required';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/[-()\s]/g, ''))) {
      newErrors.phoneNumber = 'Enter a valid 10-digit phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.program) newErrors.program = 'Please select a program';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    try {
      await sendEnquiryEmail({
        parent_name: formData.parentName,
        child_name: formData.childName || 'Not provided',
        phone: formData.phoneNumber,
        email: formData.email || 'Not provided',
        program: formData.program,
        child_age: formData.childAge || 'Not provided',
        message: formData.message || 'No message'
      });
      
      setStatus('success');
      setFormData({
        parentName: '', childName: '', phoneNumber: '', email: '', program: '', childAge: '', message: ''
      });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="py-24 bg-gray-50 relative overflow-hidden" id="enquiry">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
          
          {/* Form Context Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 lg:sticky lg:top-32"
          >
            <div className="mb-8">
              <BrandLogo variant="full" className="mb-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textMain mb-4">
              Let’s Start Your Child’s Learning Journey.
            </h2>
            <p className="text-textMuted text-lg mb-8">
              Have questions about our programs? Send us an enquiry and we’ll get back to you to discuss how we can help your child grow brighter.
            </p>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 text-primary">
                  📞
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-textMain">Call Us</h4>
                  <a href="tel:8105732962" className="text-textMuted hover:text-primary transition-colors">8105732962</a>
                </div>
              </div>
              <div className="w-full h-px bg-gray-100"></div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1 text-secondary">
                  📍
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-textMain">Visit Us</h4>
                  <p className="text-textMuted">House No. 2, Nehru Avenue, Bharathidasan Colony, K.K. Nagar, Chennai</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-primary/5 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Parent Name *</label>
                    <input 
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 focus:bg-white outline-none transition-colors ${errors.parentName ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-primary'}`}
                      placeholder="Enter your name"
                    />
                    {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Child's Name</label>
                    <input 
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary outline-none transition-colors"
                      placeholder="Enter child's name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 focus:bg-white outline-none transition-colors ${errors.phoneNumber ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-primary'}`}
                      placeholder="e.g. 9876543210"
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 focus:bg-white outline-none transition-colors ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-primary'}`}
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Program Interested In *</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 focus:bg-white outline-none transition-colors appearance-none ${errors.program ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-primary'}`}
                    >
                      <option value="">Select a program</option>
                      <option value="Abacus">Abacus</option>
                      <option value="Vedic Maths">Vedic Maths</option>
                      <option value="Phonics">Phonics</option>
                      <option value="Maths Tuition">Maths Tuition</option>
                      <option value="Not Sure">Not Sure Yet</option>
                    </select>
                    {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Child's Age</label>
                    <select
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary outline-none transition-colors appearance-none"
                    >
                      <option value="">Select age</option>
                      <option value="4-5 years">4-5 years</option>
                      <option value="6-7 years">6-7 years</option>
                      <option value="8-10 years">8-10 years</option>
                      <option value="11+ years">11+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: 'auto' }} 
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-green-50 text-green-700 rounded-xl flex items-start gap-3 border border-green-200"
                    >
                      <CheckCircle2 className="flex-shrink-0 mt-0.5" size={20} />
                      <p className="text-sm">Thank you! Your enquiry has been sent successfully. We’ll get back to you soon.</p>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: 'auto' }} 
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-red-50 text-red-700 rounded-xl flex items-start gap-3 border border-red-200"
                    >
                      <AlertCircle className="flex-shrink-0 mt-0.5" size={20} />
                      <p className="text-sm">Something went wrong while sending your enquiry. Please try again or contact us directly.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} /> Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry <Send size={18} className="ml-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
