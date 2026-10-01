import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Footer = () => {
  return (
    <footer className="relative bg-[#F7FAFF] pt-12 md:pt-20 pb-8 overflow-hidden border-t border-blue-50">
      {/* Subtle Brand Decoration */}
      <div className="absolute right-0 bottom-0 opacity-[0.02] pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <BrandLogo variant="icon" className="w-[400px] h-[400px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-6">
              <BrandLogo variant="full" />
            </div>
            <p className="text-[#64748B] text-[15px] mb-5 max-w-[300px] leading-relaxed">
              Building strong foundations for brighter learning journeys.
            </p>
            <p className="text-primary font-medium text-[15px] flex items-center">
              Learn Better <span className="text-accent mx-2 text-xl leading-none">•</span> Think Faster <span className="text-accent mx-2 text-xl leading-none">•</span> Grow Brighter!
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[17px] font-heading font-semibold text-[#1E293B] mb-5">Quick Links</h4>
            <ul className="space-y-3.5">
              {['Home', 'About', 'Programs', 'Gallery', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-[#64748B] hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-[15px]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h4 className="text-[17px] font-heading font-semibold text-[#1E293B] mb-5">Our Programs</h4>
            <ul className="space-y-3.5">
              {['Abacus', 'Vedic Maths', 'Phonics', 'Maths Tuition'].map((prog) => (
                <li key={prog}>
                  <a 
                    href="#programs" 
                    className="text-[#64748B] hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-[15px]"
                  >
                    {prog}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[17px] font-heading font-semibold text-[#1E293B] mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:8105732962" className="flex items-start text-[#64748B] hover:text-primary transition-colors group">
                  <Phone size={18} className="mr-3 mt-0.5 flex-shrink-0 text-primary/70 group-hover:text-primary transition-colors" />
                  <span className="text-[15px]">8105732962</span>
                </a>
              </li>
              <li>
                <a href="mailto:brightmindsplsc@gmail.com" className="flex items-start text-[#64748B] hover:text-primary transition-colors group">
                  <Mail size={18} className="mr-3 mt-0.5 flex-shrink-0 text-primary/70 group-hover:text-primary transition-colors" />
                  <span className="text-[15px] break-all">brightmindsplsc@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start text-[#64748B]">
                <MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0 text-primary/70" />
                <span className="text-[15px] leading-relaxed">
                  House No. 2, Nehru Avenue,<br />
                  Bharathidasan Colony,<br />
                  K.K. Nagar, Chennai
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-blue-100/60 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#64748B] text-[13px]">
            © {new Date().getFullYear()} Bright Minds – Pre-Learning Skill Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
