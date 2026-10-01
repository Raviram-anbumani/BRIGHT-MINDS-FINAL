import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SectionHeading from './SectionHeading';

// Import available real images
import img1 from '../assets/images/8.jpeg'; // Main classroom/group (use as large 2x2)
import img2 from '../assets/images/2.jpeg';
import img3 from '../assets/images/3.jpeg';
import img4 from '../assets/images/4.jpeg';
import img5 from '../assets/images/9.jpeg'; // Tall activity (use as 1x2)
import img6 from '../assets/images/6.jpeg';
import img7 from '../assets/images/7.jpeg';
import img8 from '../assets/images/10.jpeg';

const galleryImages = [
  { id: 1, src: img1, alt: 'Classroom environment', className: 'md:col-span-2 md:row-span-2' }, // 2x2
  { id: 2, src: img2, alt: 'Student learning', className: 'md:col-span-1 md:row-span-1' },       // 1x1
  { id: 3, src: img3, alt: 'Interactive session', className: 'md:col-span-1 md:row-span-1' },    // 1x1
  { id: 4, src: img4, alt: 'Skill development', className: 'md:col-span-1 md:row-span-1' },      // 1x1
  { id: 5, src: img5, alt: 'Group activities', className: 'md:col-span-1 md:row-span-2' },       // 1x2
  { id: 6, src: img6, alt: 'Children activities', className: 'md:col-span-1 md:row-span-1' },    // 1x1
  { id: 7, src: img7, alt: 'Focused learning', className: 'md:col-span-1 md:row-span-1' },       // 1x1
  { id: 8, src: img8, alt: 'Bright Minds Center', className: 'md:col-span-1 md:row-span-1' },    // 1x1
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-24 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Inside Bright Minds" 
          subtitle="Take a look at our authentic learning environment and activities."
        />

        {/* Responsive Editorial Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[220px] gap-4 mt-12">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl border border-gray-100 ${img.className}`}
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-10 h-10 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors backdrop-blur-sm"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImg.src}
              alt={selectedImg.alt}
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
