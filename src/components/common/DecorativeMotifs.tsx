import React from 'react';
import { motion } from 'framer-motion';

// Animated Brass Deepam (Kuthuvilakku)
export const BrassDeepam: React.FC<{ size?: number; className?: string }> = ({ size = 80, className = '' }) => {
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size * 1.6 }}>
      {/* Golden Aura Glow */}
      <div 
        className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-amber-400/30 blur-xl animate-pulse-glow"
        aria-hidden="true" 
      />

      <svg 
        viewBox="0 0 100 160" 
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="brassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#AA7A1E" />
            <stop offset="100%" stopColor="#754E0B" />
          </linearGradient>
          <linearGradient id="flameInner" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FFF480" />
            <stop offset="80%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#D82600" />
          </linearGradient>
          <radialGradient id="flameAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#FF6B00" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Animated Flame */}
        <g className="animate-flame-flicker origin-bottom" style={{ transformOrigin: '50px 30px' }}>
          {/* Flame Halo */}
          <circle cx="50" cy="22" r="14" fill="url(#flameAura)" opacity="0.6" />
          {/* Outer Flame */}
          <path 
            d="M50 4 C54 12, 60 18, 57 26 C55 31, 45 31, 43 26 C40 18, 46 12, 50 4 Z" 
            fill="url(#flameInner)"
            filter="drop-shadow(0 0 8px rgba(255, 170, 0, 0.9))"
          />
          {/* Inner White-hot Flame */}
          <path 
            d="M50 12 C52 16, 54 20, 52 24 C51 26, 49 26, 48 24 C46 20, 48 16, 50 12 Z" 
            fill="#FFFDE0" 
          />
          {/* Wick */}
          <path d="M50 26 L50 31" stroke="#3D1E04" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Top Finial (Annam / Bird or Lotus Bud) */}
        <path d="M47 31 C47 28 53 28 53 31 L55 34 L45 34 Z" fill="url(#brassGradient)" />

        {/* Top Oil Dish (Agal) */}
        <ellipse cx="50" cy="36" rx="20" ry="6" fill="url(#brassGradient)" />
        <path d="M30 36 Q50 46 70 36 L66 40 Q50 48 34 40 Z" fill="url(#brassGradient)" />

        {/* Hanging droplets/beads on top dish */}
        <circle cx="34" cy="42" r="1.8" fill="#FFF2A3" />
        <circle cx="42" cy="44" r="1.8" fill="#FFF2A3" />
        <circle cx="50" cy="45" r="2" fill="#FFF2A3" />
        <circle cx="58" cy="44" r="1.8" fill="#FFF2A3" />
        <circle cx="66" cy="42" r="1.8" fill="#FFF2A3" />

        {/* Pillar Stem / Baluster */}
        <path d="M48 40 L52 40 L53 55 L47 55 Z" fill="url(#brassGradient)" />
        
        {/* Tier 1 Round Carving */}
        <ellipse cx="50" cy="58" rx="8" ry="4" fill="url(#brassGradient)" />
        <path d="M46 60 L54 60 L56 75 L44 75 Z" fill="url(#brassGradient)" />
        
        {/* Mid Ring / Ring of Petals */}
        <ellipse cx="50" cy="78" rx="14" ry="4" fill="url(#brassGradient)" />
        <path d="M36 78 Q50 84 64 78 L61 81 Q50 86 39 81 Z" fill="url(#brassGradient)" />

        {/* Lower Pillar Stem */}
        <path d="M46 81 L54 81 L56 115 L44 115 Z" fill="url(#brassGradient)" />
        <ellipse cx="50" cy="116" rx="10" ry="3" fill="url(#brassGradient)" />

        {/* Base Pedestal (Peedam) */}
        <path d="M38 118 Q50 115 62 118 L70 135 Q50 132 30 135 Z" fill="url(#brassGradient)" />
        
        {/* Bottom Tier Platform */}
        <ellipse cx="50" cy="138" rx="28" ry="8" fill="url(#brassGradient)" />
        <path d="M22 138 C22 144, 78 144, 78 138 L76 145 C76 150, 24 150, 24 145 Z" fill="url(#brassGradient)" />

        {/* Feet of the base */}
        <circle cx="28" cy="148" r="3" fill="url(#brassGradient)" />
        <circle cx="50" cy="150" r="3.5" fill="url(#brassGradient)" />
        <circle cx="72" cy="148" r="3" fill="url(#brassGradient)" />
      </svg>
    </div>
  );
};

// Traditional Mango Leaf & Marigold Toranam (Festive Garland for Top of Entrances & Headers)
export const MangoLeafToranam: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden flex justify-center items-center pointer-events-none ${className}`}>
      <svg viewBox="0 0 1200 52" className="w-full max-w-6xl h-9 sm:h-12" fill="none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="marigoldOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA000" />
            <stop offset="50%" stopColor="#FF6D00" />
            <stop offset="100%" stopColor="#D50000" />
          </linearGradient>
          <linearGradient id="marigoldYellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF176" />
            <stop offset="60%" stopColor="#FFD54F" />
            <stop offset="100%" stopColor="#FFB300" />
          </linearGradient>
          <linearGradient id="leafGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#81C784" />
            <stop offset="50%" stopColor="#388E3C" />
            <stop offset="100%" stopColor="#1B5E20" />
          </linearGradient>
        </defs>

        {/* Main Hanging Gold Cord */}
        <path d="M0,10 Q300,22 600,14 Q900,22 1200,10" stroke="#D4AF37" strokeWidth="3" />
        <path d="M0,12 Q300,24 600,16 Q900,24 1200,12" stroke="#AA7A1E" strokeWidth="1.5" strokeDasharray="5,3" />

        {/* Marigold Garland Strand */}
        {Array.from({ length: 48 }).map((_, i) => {
          const x = 20 + i * 25;
          const y = 11 + Math.sin(i * 0.25) * 4;
          const isYellow = i % 2 === 0;
          return (
            <circle 
              key={`flower-${i}`} 
              cx={x} 
              cy={y} 
              r={i % 3 === 0 ? 6 : 4.5} 
              fill={isYellow ? 'url(#marigoldYellow)' : 'url(#marigoldOrange)'} 
              filter="drop-shadow(0 2px 3px rgba(0,0,0,0.3))"
            />
          );
        })}

        {/* Mango Leaves hanging downwards (Mavilai) - elegant compact festive leaves */}
        {Array.from({ length: 19 }).map((_, i) => {
          const x = 40 + i * 62;
          const y = 14 + Math.sin(i * 0.4) * 3;
          return (
            <g key={`leaf-${i}`} transform={`translate(${x}, ${y})`}>
              {/* Mango Leaf Shape */}
              <path 
                d="M0,0 C-7,12 -6,24 0,34 C6,24 7,12 0,0 Z" 
                fill="url(#leafGreen)" 
                stroke="#1B5E20" 
                strokeWidth="0.6"
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
              />
              {/* Leaf Center Vein */}
              <path d="M0,2 L0,30" stroke="#A5D6A7" strokeWidth="0.8" opacity="0.6" />
              {/* Little Jasmine Bud at the tip */}
              <circle cx="0" cy="36" r="2" fill="#FFFDE7" />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// Intricate Golden Temple Lotus Motif (Mandala center)
export const TempleLotus: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => {
  return (
    <div className={`inline-block ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="lotusGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF59D" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8D620E" />
          </linearGradient>
        </defs>

        {/* Outer Circular Halo */}
        <circle cx="50" cy="50" r="46" stroke="url(#lotusGold)" strokeWidth="1" strokeDasharray="3,3" />
        <circle cx="50" cy="50" r="42" stroke="url(#lotusGold)" strokeWidth="1.5" />

        {/* 8 Outer Lotus Petals */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`outer-${i}`} transform={`rotate(${i * 45} 50 50)`}>
            <path 
              d="M50,12 C44,24 45,35 50,42 C55,35 56,24 50,12 Z" 
              fill="url(#lotusGold)" 
              opacity="0.85"
            />
          </g>
        ))}

        {/* 8 Inner Staggered Petals */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`inner-${i}`} transform={`rotate(${i * 45 + 22.5} 50 50)`}>
            <path 
              d="M50,22 C46,30 46,38 50,44 C54,38 54,30 50,22 Z" 
              fill="#FFF2A3" 
              opacity="0.95"
            />
          </g>
        ))}

        {/* Center Seed Pod & Pearls */}
        <circle cx="50" cy="50" r="8" fill="url(#lotusGold)" />
        <circle cx="50" cy="50" r="5" fill="#FFFDE7" />
        <circle cx="50" cy="50" r="2.5" fill="#5A121D" />
      </svg>
    </div>
  );
};

// Royal Filigree Corner Borders
export const GoldenCornerFiligree: React.FC<{ 
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}> = ({ position, className = '', size = 56 }) => {
  const transformMap = {
    'top-left': 'rotate(0deg)',
    'top-right': 'rotate(90deg)',
    'bottom-right': 'rotate(180deg)',
    'bottom-left': 'rotate(270deg)',
  };

  return (
    <div 
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        transform: transformMap[position],
        top: position.includes('top') ? 0 : 'auto',
        bottom: position.includes('bottom') ? 0 : 'auto',
        left: position.includes('left') ? 0 : 'auto',
        right: position.includes('right') ? 0 : 'auto',
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <path 
          d="M0,0 L70,0 C60,10 40,15 30,30 C15,40 10,60 0,70 Z" 
          fill="none" 
          stroke="#D4AF37" 
          strokeWidth="2" 
        />
        <path 
          d="M5,5 L50,5 C42,12 30,16 22,26 C16,30 12,42 5,50 Z" 
          fill="none" 
          stroke="#AA7A1E" 
          strokeWidth="1.2" 
        />
        {/* Decorative flourishes */}
        <path 
          d="M10,10 Q25,25 15,35 Q35,25 25,10" 
          stroke="#FFF2A3" 
          strokeWidth="1.5" 
          fill="none" 
        />
        <circle cx="20" cy="20" r="3" fill="#D4AF37" />
        <circle cx="8" cy="8" r="4" fill="#EABF3E" />
      </svg>
    </div>
  );
};

// Sacred Traditional Telugu Wedding Symbols: Kalash, Jeelakarra-Bellam, and Talambralu
export const SacredKalash: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => {
  return (
    <div className={`inline-block ${className}`} style={{ width: size, height: size * 1.2 }}>
      <svg viewBox="0 0 80 96" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="kalashGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#7A4D0B" />
          </linearGradient>
          <linearGradient id="coconutBrown" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A0522D" />
            <stop offset="100%" stopColor="#5C2E0B" />
          </linearGradient>
        </defs>

        {/* Mango leaves emerging from neck */}
        <path d="M40 28 C30 18 20 12 14 16 C18 26 28 32 40 32 Z" fill="#2E7D32" />
        <path d="M40 28 C50 18 60 12 66 16 C62 26 52 32 40 32 Z" fill="#2E7D32" />
        <path d="M40 26 C35 12 28 6 32 2 C38 8 40 20 40 26 Z" fill="#388E3C" />
        <path d="M40 26 C45 12 52 6 48 2 C42 8 40 20 40 26 Z" fill="#388E3C" />

        {/* Sacred Coconut (Kobbari Kaya) */}
        <ellipse cx="40" cy="22" rx="14" ry="18" fill="url(#coconutBrown)" stroke="#3E1C00" strokeWidth="1" />
        <circle cx="40" cy="8" r="3" fill="#D4AF37" />

        {/* Brass Pot (Chembu / Kalasham) */}
        {/* Pot Rim */}
        <ellipse cx="40" cy="36" rx="18" ry="4" fill="url(#kalashGold)" />
        {/* Pot Neck */}
        <path d="M26 36 L24 44 L56 44 L54 36 Z" fill="url(#kalashGold)" />
        {/* Pot Body */}
        <path d="M24 44 C12 54 10 76 25 84 C30 87 50 87 55 84 C70 76 68 54 56 44 Z" fill="url(#kalashGold)" />
        
        {/* Red Swastik / Sacred Vermilion Marking */}
        <path d="M36 56 H44 M40 52 V60 M36 52 H36 M44 60 H44" stroke="#851722" strokeWidth="2.5" strokeLinecap="square" />
        
        {/* Pot Base */}
        <ellipse cx="40" cy="85" rx="16" ry="4" fill="url(#kalashGold)" />
      </svg>
    </div>
  );
};

// Royal Decorative Section Divider with Center Lotus & Filigree (Animated on Scroll)
export const SectionDivider: React.FC<{ title?: string; subtitle?: string; className?: string }> = ({
  title,
  subtitle,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col items-center justify-center my-8 text-center ${className}`}
    >
      <div className="flex items-center justify-center w-full max-w-lg space-x-3 px-4">
        {/* Left Ornate Line */}
        <div className="flex-1 flex items-center">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/60 to-gold-400 origin-right"
          />
          <div className="w-2 h-2 rotate-45 border border-gold-400 bg-maroon-900 mx-1 flex-shrink-0" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold-300 mx-0.5 flex-shrink-0" />
        </div>

        {/* Center Emblem with bloom */}
        <motion.div
          initial={{ scale: 0.7, rotate: -20, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 relative"
        >
          <TempleLotus size={38} />
        </motion.div>

        {/* Right Ornate Line */}
        <div className="flex-1 flex items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-gold-300 mx-0.5 flex-shrink-0" />
          <div className="w-2 h-2 rotate-45 border border-gold-400 bg-maroon-900 mx-1 flex-shrink-0" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[1px] bg-gradient-to-l from-transparent via-gold-500/60 to-gold-400 origin-left"
          />
        </div>
      </div>

      {title && (
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-3 font-display text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 uppercase tracking-widest font-semibold"
        >
          {title}
        </motion.h3>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-1 font-subheading italic text-sm sm:text-base text-gold-200/80 max-w-md"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
