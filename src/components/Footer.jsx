import React from 'react';
import BrandLogo from './BrandLogo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="mb-6 inline-block bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
              <BrandLogo variant="full" className="brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-xs leading-relaxed">
              Building strong foundations for brighter learning journeys.
            </p>
            <p className="text-accent font-medium text-sm">
              Learn Better • Think Faster • Grow Brighter!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors text-sm">Programs</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors text-sm">Gallery</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-4">
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors text-sm">Abacus</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors text-sm">Vedic Maths</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors text-sm">Phonics</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors text-sm">Maths Tuition</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">
                <span className="block text-gray-500 mb-1">Phone</span>
                <a href="tel:8105732962" className="hover:text-white transition-colors">8105732962</a>
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block text-gray-500 mb-1">Email</span>
                <a href="mailto:brightmindsplsc@gmail.com" className="hover:text-white transition-colors">brightmindsplsc@gmail.com</a>
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block text-gray-500 mb-1">Address</span>
                House No. 2, Nehru Avenue,<br />
                Bharathidasan Colony,<br />
                K.K. Nagar, Chennai
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Bright Minds – Pre-Learning Skill Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
