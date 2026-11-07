import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { BrassDeepam, MangoLeafToranam, TempleLotus, GoldenCornerFiligree } from '../common/DecorativeMotifs';
import { TraditionalName } from '../common/TraditionalName';
import { WeddingDetails } from '../../types';
import { Sparkles } from 'lucide-react';

interface EntranceProps {
  weddingDetails: WeddingDetails;
  onOpen: () => void;
}

export const EntranceExperience: React.FC<EntranceProps> = ({ weddingDetails, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [envelopeUnfolded, setEnvelopeUnfolded] = useState(false);

  const triggerPetalsBurst = useCallback(() => {
    const count = 180;
    const defaults = {
      origin: { y: 0.6 },
      zIndex: 9999,
    };

    // Marigold Yellow & Orange
    confetti({
      ...defaults,
      particleCount: count * 0.4,
      spread: 90,
      startVelocity: 45,
      colors: ['#FFD700', '#FFA500', '#FF8C00', '#FFE4B5'],
      shapes: ['circle'],
      scalar: 1.2,
    });

    // Rose Red & Maroon Petals
    confetti({
      ...defaults,
      particleCount: count * 0.35,
      spread: 120,
      startVelocity: 40,
      colors: ['#DC143C', '#B22222', '#8B0000', '#FF69B4'],
      shapes: ['square'],
      scalar: 1.1,
    });

    // White Jasmine Flowers
    confetti({
      ...defaults,
      particleCount: count * 0.25,
      spread: 100,
      startVelocity: 35,
      colors: ['#FFFFFF', '#FFFDD0', '#FFF8DC'],
      shapes: ['circle'],
      scalar: 0.8,
    });
  }, []);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Trigger Flower Petals Shower
    triggerPetalsBurst();

    // Step 1: Unfold envelope flap
    setTimeout(() => {
      setEnvelopeUnfolded(true);
    }, 350);

    // Step 2: Full transition after visual climax
    setTimeout(() => {
      onOpen();
    }, 1600);
  };

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={isOpening ? { scale: 1.08, filter: 'brightness(1.1)' } : { scale: 1, filter: 'brightness(1)' }}
      exit={{ opacity: 0, scale: 1.2, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-maroon-950 select-none"
    >
      {/* Background Temple Entrance Architecture */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/temple-entrance.jpg" 
          alt="Royal South Indian Temple Entrance" 
          className="w-full h-full object-cover object-center brightness-50 contrast-125 scale-105 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/60 to-maroon-950/80" />
      </div>

      {/* Top Mango Leaves & Marigold Toranam */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
        <MangoLeafToranam />
      </div>

      {/* Left Side Brass Deepam Lamp */}
      <motion.div 
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute left-3 sm:left-12 md:left-24 bottom-8 sm:bottom-16 z-20 pointer-events-none hidden xs:block"
      >
        <BrassDeepam size={90} className="sm:scale-125 scale-90" />
        <div className="text-center mt-2">
          <span className="text-[10px] tracking-widest text-gold-300/70 uppercase font-serif">Deepa Lakshmi</span>
        </div>
      </motion.div>

      {/* Right Side Brass Deepam Lamp */}
      <motion.div 
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute right-3 sm:right-12 md:right-24 bottom-8 sm:bottom-16 z-20 pointer-events-none hidden xs:block"
      >
        <BrassDeepam size={90} className="sm:scale-125 scale-90" />
        <div className="text-center mt-2">
          <span className="text-[10px] tracking-widest text-gold-300/70 uppercase font-serif">Deepa Lakshmi</span>
        </div>
      </motion.div>

      {/* 3D Parting Temple Carved Doors in Background */}
      <div className="absolute inset-0 pointer-events-none flex z-10 perspective-1000">
        {/* Left Door Half */}
        <motion.div 
          animate={isOpening ? { rotateY: -85, x: '-20%', opacity: 0.3 } : { rotateY: 0, x: '0%' }}
          transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
          style={{ transformOrigin: 'left center' }}
          className="w-1/2 h-full bg-gradient-to-r from-maroon-900/90 to-maroon-950/70 border-r-2 border-gold-500/40 shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-gold-400 bg-maroon-800 flex items-center justify-center text-gold-300 shadow-lg">
            <span className="text-xl">🔔</span>
          </div>
        </motion.div>

        {/* Right Door Half */}
        <motion.div 
          animate={isOpening ? { rotateY: 85, x: '20%', opacity: 0.3 } : { rotateY: 0, x: '0%' }}
          transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
          style={{ transformOrigin: 'right center' }}
          className="w-1/2 h-full bg-gradient-to-l from-maroon-900/90 to-maroon-950/70 border-l-2 border-gold-500/40 shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-gold-400 bg-maroon-800 flex items-center justify-center text-gold-300 shadow-lg">
            <span className="text-xl">🔔</span>
          </div>
        </motion.div>
      </div>

      {/* Central Royal Invitation Envelope */}
      <motion.div 
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-30 w-full max-w-lg px-4 sm:px-6 pt-10 sm:pt-12"
      >
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-maroon-900 via-maroon-850 to-maroon-950 p-1 sm:p-2 border-2 border-gold-400 shadow-[0_20px_60px_rgba(0,0,0,0.85)] ring-1 ring-gold-200/30">
          {/* Inner Gold Foil Border Frame */}
          <div className="relative rounded-xl border border-gold-500/50 p-6 sm:p-8 text-center bg-maroon-900/70 backdrop-blur-md">
            {/* Corner Filigrees */}
            <GoldenCornerFiligree position="top-left" size={32} />
            <GoldenCornerFiligree position="top-right" size={32} />
            <GoldenCornerFiligree position="bottom-left" size={32} />
            <GoldenCornerFiligree position="bottom-right" size={32} />

            {/* Auspicious Opening Inscription */}
            <div className="mb-3">
              <p className="font-heading tracking-[0.25em] text-xs sm:text-sm uppercase text-gold-300 font-semibold drop-shadow">
                || శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు ||
              </p>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-1" />
            </div>

            {/* Envelope Flap Animation with Gold Lotus Medallion */}
            <motion.div 
              animate={envelopeUnfolded ? { rotateX: 180, opacity: 0.2 } : { rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="mb-3 inline-block origin-top"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-200 p-0.5 shadow-xl mx-auto flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-maroon-900 flex items-center justify-center border border-gold-300">
                  <TempleLotus size={32} />
                </div>
              </div>
            </motion.div>

            {/* Invitation Subtitle */}
            <p className="font-heading uppercase tracking-[0.25em] text-xs sm:text-sm text-gold-300/90 font-medium mb-1">
              You Are Cordially Invited
            </p>

            {/* Telugu Wedding Header */}
            <h2 className="font-royal text-lg sm:text-xl text-gold-200 mb-3 tracking-wide font-normal">
              కళ్యాణ మహోత్సవ ఆహ్వాన పత్రిక
            </h2>

            {/* Couple's Names with Traditional Subscript Honorifics */}
            <div className="my-4">
              <TraditionalName
                fullName={weddingDetails.brideName}
                teluguFullName={weddingDetails.brideNameTelugu}
                type="bride"
                size="envelope"
                showTelugu={true}
              />
              
              <div className="flex items-center justify-center gap-3 my-1.5 text-gold-400">
                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400" />
                <span className="font-subheading italic text-xl text-gold-300">&amp;</span>
                <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400" />
              </div>

              <TraditionalName
                fullName={weddingDetails.groomName}
                teluguFullName={weddingDetails.groomNameTelugu}
                type="groom"
                size="envelope"
                showTelugu={true}
              />
            </div>

            {/* Date & Muhurtham Reminder */}
            <p className="font-subheading text-sm sm:text-base text-ivory-200/90 mb-5 font-medium">
              Wedding Date: <span className="text-gold-300 font-semibold">{weddingDetails.weddingDate}</span>
              <br />
              <span className="text-xs text-gold-400/80">Muhurtham: {weddingDetails.muhurthamTime}</span>
            </p>

            {/* Interactive Open Invitation Button - Click to Open */}
            <motion.button
              onClick={handleOpenClick}
              disabled={isOpening}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-heading text-xs sm:text-sm font-bold tracking-widest uppercase text-maroon-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 shadow-[0_0_25px_rgba(212,175,55,0.7)] hover:shadow-[0_0_35px_rgba(255,215,0,0.9)] transition-all cursor-pointer overflow-hidden group"
            >
              {/* Shimmer light sweep */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
              
              <span className="flex items-center gap-2 relative z-10">
                <Sparkles className="w-4 h-4 text-maroon-900 animate-spin-slow" />
                <span>{isOpening ? 'Opening Sacred Invitation...' : 'Open Sacred Invitation'}</span>
                <Sparkles className="w-4 h-4 text-maroon-900 animate-spin-slow" />
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
