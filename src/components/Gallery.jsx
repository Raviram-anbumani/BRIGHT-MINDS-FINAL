import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SectionHeading from './SectionHeading';

// Import available images
import img1 from '../assets/images/1.jpeg';
import img2 from '../assets/images/2.jpeg';
import img3 from '../assets/images/3.jpeg';
import img4 from '../assets/images/4.jpeg';
import img6 from '../assets/images/6.jpeg';
import img7 from '../assets/images/7.jpeg';
import img8 from '../assets/images/8.jpeg';
import img9 from '../assets/images/9.jpeg';
import img10 from '../assets/images/10.jpeg';

const galleryImages = [
  { id: 1, src: img8, alt: 'Classroom environment', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
  { id: 2, src: img2, alt: 'Student learning', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { id: 3, src: img3, alt: 'Interactive session', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { id: 4, src: img4, alt: 'Skill development', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-2' },
  { id: 5, src: img6, alt: 'Children activities', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { id: 6, src: img7, alt: 'Focused learning', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { id: 7, src: img9, alt: 'Group activities', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1' },
  { id: 8, src: img10, alt: 'Bright Minds Center', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Inside Bright Minds" 
          subtitle="Take a look at our learning environment and activities."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-none md:grid-rows-4 gap-4 mt-12 h-[800px] md:h-[600px] lg:h-[800px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-md ${img.colSpan} ${img.rowSpan} h-48 md:h-auto`}
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
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
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black p-2 rounded-full transition-colors"
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
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
