import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionDivider } from '../common/DecorativeMotifs';
import { GalleryPhoto } from '../../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryProps {
  photos: GalleryPhoto[];
}

// Interactive 3D Tilt Card Component adhering strictly to photo aspect ratio
const TiltGalleryCard: React.FC<{
  photo: GalleryPhoto;
  index: number;
  onClick: () => void;
}> = ({ photo, index, onClick }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const isLandscape = photo.aspectRatio === '3/2' || photo.orientation === 'landscape';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className={`relative rounded-2xl overflow-hidden p-2 bg-gradient-to-b from-maroon-900 via-maroon-850 to-maroon-950 border border-gold-400/50 shadow-xl cursor-pointer group hover:border-gold-300 transition-colors ${
        isLandscape ? 'sm:col-span-2' : 'col-span-1'
      }`}
    >
      {/* Specular Glare Effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,235,150,${glarePosition.opacity}), transparent 60%)`,
        }}
      />

      {/* Photo Container mapped to exact 2:3 or 3:2 aspect ratio */}
      <div 
        className={`relative rounded-xl overflow-hidden bg-maroon-900 border border-gold-300/40 w-full ${
          isLandscape ? 'aspect-[3/2]' : 'aspect-[2/3]'
        }`}
      >
        <img
          src={photo.url}
          alt={photo.caption}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Golden Hover Sheen Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="flex items-center justify-between text-gold-300 text-xs font-heading uppercase tracking-wider mb-1">
            <span>{photo.category}</span>
            <Maximize2 className="w-4 h-4 text-gold-400 animate-pulse" />
          </div>
          <p className="text-xs text-ivory-100 line-clamp-2 font-subheading italic">
            {photo.caption}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const PhotoGallery: React.FC<GalleryProps> = ({ photos }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(photos.map((p) => p.category)))];

  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter((p) => p.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
  }, [lightboxIndex, filteredPhotos.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [lightboxIndex, filteredPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="relative py-24 px-4 bg-maroon-950 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-1/3 -left-24 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionDivider
          title="The Royal Wedding Gallery"
          subtitle="Timeless Moments Captured In Sacred Gold & Silk"
        />

        {/* Category Tabs */}
        {categories.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-10"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-heading text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-maroon-950 shadow-[0_0_15px_rgba(212,175,55,0.6)] font-bold scale-105'
                    : 'bg-maroon-900/60 border border-gold-400/30 text-gold-300 hover:text-gold-100 hover:border-gold-400'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}

        {/* Masonry / Grid Layout with 3D Tilt Cards respecting exact 2:3 and 3:2 ratios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max items-start">
          {filteredPhotos.map((photo, index) => (
            <TiltGalleryCard
              key={photo.id}
              photo={photo}
              index={index}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>

        {/* Full-Screen Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-lg"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 p-2 sm:p-2.5 rounded-full bg-maroon-900 border border-gold-400 text-gold-300 hover:text-gold-100 hover:scale-110 transition-transform cursor-pointer shadow-lg"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-2 sm:left-6 z-50 p-2 sm:p-3 rounded-full bg-maroon-900/80 border border-gold-400/60 text-gold-300 hover:text-gold-100 hover:scale-110 transition-transform cursor-pointer shadow-lg"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-2 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-maroon-900/80 border border-gold-400/60 text-gold-300 hover:text-gold-100 hover:scale-110 transition-transform cursor-pointer shadow-lg"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Lightbox Content Container */}
              <div 
                className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Gold Frame for Active Image */}
                <div className="relative rounded-2xl p-2 bg-gradient-to-tr from-gold-500 via-gold-300 to-amber-200 shadow-2xl">
                  <div className="relative rounded-xl overflow-hidden max-h-[75vh] bg-black flex items-center justify-center">
                    <motion.img
                      key={lightboxIndex}
                      src={filteredPhotos[lightboxIndex].url}
                      alt={filteredPhotos[lightboxIndex].caption}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="max-h-[75vh] max-w-[85vw] w-auto h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="mt-4 text-center max-w-xl">
                  <p className="font-heading text-xs uppercase tracking-widest text-gold-400 font-semibold">
                    Photo {lightboxIndex + 1} of {filteredPhotos.length} • {filteredPhotos[lightboxIndex].category}
                  </p>
                  <p className="font-subheading italic text-sm text-ivory-100 mt-1">
                    {filteredPhotos[lightboxIndex].caption}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
