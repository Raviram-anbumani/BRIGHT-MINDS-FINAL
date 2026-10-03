import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Why Bright Minds', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home">
              <BrandLogo variant="full" className="flex" />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-textMain hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textMain hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="block px-3 py-3 text-base font-medium text-textMain hover:text-primary hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-4 block text-center bg-primary text-white px-4 py-3 rounded-md font-medium"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
