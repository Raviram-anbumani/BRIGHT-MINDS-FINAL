import React from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import TrustCards from './components/TrustCards';
import AboutSection from './components/AboutSection';
import ProgramCards from './components/ProgramCards';
import WhyBrightMinds from './components/WhyBrightMinds';
import LearningApproach from './components/LearningApproach';
import BenefitsSection from './components/BenefitsSection';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Navbar />
      <main className="flex-grow">
        <div id="home">
          <HeroCarousel />
          <TrustCards />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="programs">
          <ProgramCards />
        </div>
        
        <div id="why-us">
          <WhyBrightMinds />
          <LearningApproach />
          <BenefitsSection />
        </div>
        
        <div id="gallery">
          <Gallery />
        </div>
        
        <Testimonials />
        
        <div id="faq">
          <FAQ />
        </div>
        
        <div id="contact" className="bg-white">
          <EnquiryForm />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
