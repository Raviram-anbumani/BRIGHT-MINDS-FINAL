import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Footer = () => {
  return (
    <footer className="relative bg-[#172338] pt-12 md:pt-20 pb-8 overflow-hidden border-t border-[#1E2D45]">
      {/* Subtle Brand Decoration */}
      <div className="absolute right-0 bottom-0 opacity-[0.04] pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <BrandLogo variant="icon" className="w-[400px] h-[400px] grayscale brightness-200" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1 lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-6 w-full flex justify-center md:justify-start">
              <BrandLogo variant="footer" className="justify-center md:justify-start" />
            </div>
            <p className="text-[#B8C3D4] text-[15px] mb-5 max-w-[300px] leading-relaxed">
              Building strong foundations for brighter learning journeys.
            </p>
            <p className="text-white font-medium text-[15px] flex flex-wrap justify-center md:justify-start text-center md:text-left w-full">
              Learn Better <span className="text-accent mx-2 text-xl leading-none">•</span> Think Faster <span className="text-accent mx-2 text-xl leading-none">•</span> Grow Brighter!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[17px] font-heading font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3.5 flex flex-col items-center md:items-start">
              {['Home', 'About', 'Programs', 'Gallery', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-[#B8C3D4] hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block text-[15px]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[17px] font-heading font-semibold text-white mb-5">Our Programs</h4>
            <ul className="space-y-3.5 flex flex-col items-center md:items-start">
              {['Abacus', 'Vedic Maths', 'Phonics', 'Maths Tuition'].map((prog) => (
                <li key={prog}>
                  <a 
                    href="#programs" 
                    className="text-[#B8C3D4] hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block text-[15px]"
                  >
                    {prog}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left mt-4 md:mt-0">
            <h4 className="text-[17px] font-heading font-semibold text-white mb-5">Contact Us</h4>
            <ul className="space-y-4 flex flex-col items-start w-fit">
              <li className="w-full">
                <a href="tel:8105732962" className="flex items-start justify-start text-[#B8C3D4] hover:text-accent transition-colors group">
                  <Phone size={18} className="mr-3 mt-0.5 flex-shrink-0 text-accent/80 group-hover:text-accent transition-colors" />
                  <span className="text-[15px] text-left">8105732962</span>
                </a>
              </li>
              <li className="w-full">
                <a href="mailto:brightmindsplsc@gmail.com" className="flex items-start justify-start text-[#B8C3D4] hover:text-accent transition-colors group">
                  <Mail size={18} className="mr-3 mt-0.5 flex-shrink-0 text-accent/80 group-hover:text-accent transition-colors" />
                  <span className="text-[15px] break-all text-left">brightmindsplsc@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start justify-start text-[#B8C3D4] w-full">
                <MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0 text-accent/80" />
                <span className="text-[15px] leading-relaxed text-left">
                  House No. 2, Nehru Avenue,<br />
                  Bharathidasan Colony,<br />
                  K.K. Nagar, Chennai
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 flex justify-center items-center">
          <p className="text-[#B8C3D4] text-[13px] text-center">
            © {new Date().getFullYear()} Bright Minds – Pre-Learning Skill Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
