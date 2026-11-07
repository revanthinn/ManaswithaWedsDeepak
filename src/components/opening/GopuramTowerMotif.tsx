import React from 'react';

// Detailed South Indian Raja Gopuram Architectural Crown & Tiered Spire
export const GopuramTowerMotif: React.FC<{ className?: string; isDoorOpen?: boolean }> = ({ 
  className = '',
  isDoorOpen = false 
}) => {
  return (
    <div className={`relative w-full max-w-2xl mx-auto flex flex-col items-center pointer-events-none select-none ${className}`}>
      {/* Divine Radiant Sunbeams behind Gopuram summit */}
      <div 
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-b from-amber-300/30 via-gold-500/15 to-transparent blur-2xl animate-pulse-glow"
        aria-hidden="true" 
      />

      <svg 
        viewBox="0 0 600 360" 
        className="w-full h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gopuramGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9C4" />
            <stop offset="25%" stopColor="#FFD54F" />
            <stop offset="60%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#7F530B" />
          </linearGradient>
          <linearGradient id="gopuramStone" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5A121D" />
            <stop offset="50%" stopColor="#3F0A12" />
            <stop offset="100%" stopColor="#250408" />
          </linearGradient>
          <radialGradient id="kalashGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE082" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 7 Sacred Crowning Golden Kalashams at the Gopuram Summit */}
        <g id="crown-kalashams">
          {[-75, -50, -25, 0, 25, 50, 75].map((offset, i) => {
            const isCenter = offset === 0;
            const x = 300 + offset * 1.6;
            const y = isCenter ? 22 : 28 + Math.abs(offset) * 0.15;
            const scale = isCenter ? 1.3 : 0.95;

            return (
              <g key={`kalash-${i}`} transform={`translate(${x}, ${y}) scale(${scale})`}>
                {/* Kalash Halo Glow */}
                <circle cx="0" cy="0" r="14" fill="url(#kalashGlow)" className="animate-pulse" />
                
                {/* Spire Tip Needle */}
                <path d="M0 -18 L0 -10" stroke="#FFF9C4" strokeWidth="1.5" />
                <circle cx="0" cy="-18" r="1.5" fill="#FFFFFF" />

                {/* Coconut & Kalash Pot */}
                <ellipse cx="0" cy="-8" rx="4.5" ry="6" fill="url(#gopuramGold)" />
                <path d="M-6 -2 C-8 6, 8 6, 6 -2 Z" fill="url(#gopuramGold)" stroke="#B8860B" strokeWidth="0.8" />
                <ellipse cx="0" cy="-2" rx="6" ry="2" fill="#FFF9C4" />

                {/* Base pedestal for Kalash */}
                <path d="M-5 4 L5 4 L7 8 L-7 8 Z" fill="url(#gopuramGold)" />
              </g>
            );
          })}
        </g>

        {/* Top Ridge Crown Level (Maha Sikhara Ridge) */}
        <path 
          d="M170 45 C200 35, 400 35, 430 45 L440 60 C390 52, 210 52, 160 60 Z" 
          fill="url(#gopuramGold)" 
          stroke="#7F530B" 
          strokeWidth="1.5"
        />

        {/* Tier 5 (Topmost Tier) */}
        <path d="M180 60 L420 60 L435 95 L165 95 Z" fill="url(#gopuramStone)" stroke="url(#gopuramGold)" strokeWidth="1.2" />
        {/* Tier 5 Decorative Pilasters & Niches */}
        {[-3, -2, -1, 0, 1, 2, 3].map((pos) => (
          <g key={`t5-${pos}`} transform={`translate(${300 + pos * 36}, 66)`}>
            <rect x="-8" y="0" width="16" height="22" rx="3" fill="#250408" stroke="#D4AF37" strokeWidth="1" />
            <circle cx="0" cy="8" r="3" fill="#FFD54F" />
            <path d="M-5 20 L5 20" stroke="#D4AF37" strokeWidth="1.5" />
          </g>
        ))}
        {/* Tier 5 Cornice (Kapotha Molding) */}
        <path d="M160 95 L440 95 L448 106 L152 106 Z" fill="url(#gopuramGold)" />

        {/* Tier 4 */}
        <path d="M150 106 L450 106 L470 148 L130 148 Z" fill="url(#gopuramStone)" stroke="url(#gopuramGold)" strokeWidth="1.4" />
        {/* Tier 4 Niches */}
        {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((pos) => (
          <g key={`t4-${pos}`} transform={`translate(${300 + pos * 35}, 114)`}>
            <rect x="-10" y="0" width="20" height="26" rx="4" fill="#250408" stroke="#D4AF37" strokeWidth="1" />
            {/* Sacred Lotus / Diya within niche */}
            <circle cx="0" cy="11" r="4" fill="#FFA000" className="animate-pulse" />
            <path d="M-6 24 L6 24" stroke="#D4AF37" strokeWidth="1.5" />
          </g>
        ))}
        {/* Tier 4 Cornice */}
        <path d="M125 148 L475 148 L485 162 L115 162 Z" fill="url(#gopuramGold)" />

        {/* Tier 3 */}
        <path d="M115 162 L485 162 L508 212 L92 212 Z" fill="url(#gopuramStone)" stroke="url(#gopuramGold)" strokeWidth="1.5" />
        {/* Tier 3 Sculpted Temple Niches */}
        {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((pos) => (
          <g key={`t3-${pos}`} transform={`translate(${300 + pos * 35}, 172)`}>
            <rect x="-11" y="0" width="22" height="32" rx="4" fill="#250408" stroke="#D4AF37" strokeWidth="1.2" />
            <circle cx="0" cy="14" r="5" fill="#FFC107" className="animate-pulse" />
            <path d="M-8 30 L8 30" stroke="#D4AF37" strokeWidth="1.8" />
          </g>
        ))}
        {/* Tier 3 Cornice */}
        <path d="M85 212 L515 212 L528 228 L72 228 Z" fill="url(#gopuramGold)" />

        {/* Tier 2 (Lower Main Tier) */}
        <path d="M72 228 L528 228 L555 285 L45 285 Z" fill="url(#gopuramStone)" stroke="url(#gopuramGold)" strokeWidth="1.8" />
        {/* Large Decorative Carvings */}
        {[-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6].map((pos) => (
          <g key={`t2-${pos}`} transform={`translate(${300 + pos * 36}, 238)`}>
            <rect x="-12" y="0" width="24" height="38" rx="5" fill="#220409" stroke="#EABF3E" strokeWidth="1.4" />
            <ellipse cx="0" cy="16" rx="6" ry="8" fill="url(#gopuramGold)" />
            <path d="M-9 36 L9 36" stroke="#D4AF37" strokeWidth="2" />
          </g>
        ))}
        {/* Grand Cornice Band above Portal */}
        <path d="M40 285 L560 285 L575 304 L25 304 Z" fill="url(#gopuramGold)" />

        {/* Monumental Torana Arch Above Portal (Kudu Arch with Makaras) */}
        <path 
          d="M170 360 C170 290, 430 290, 430 360" 
          stroke="url(#gopuramGold)" 
          strokeWidth="10" 
          fill="none" 
        />
        <path 
          d="M185 360 C185 305, 415 305, 415 360" 
          stroke="#FFD54F" 
          strokeWidth="3" 
          fill="none" 
          strokeDasharray="6,4" 
        />

        {/* Center Makara Head / Lakshmi medallion at arch crest */}
        <g transform="translate(300, 292)">
          <circle cx="0" cy="0" r="18" fill="url(#gopuramGold)" stroke="#FFF9C4" strokeWidth="2" />
          <circle cx="0" cy="0" r="12" fill="#5A121D" />
          <circle cx="0" cy="0" r="6" fill="#FFD54F" />
        </g>

        {/* Massive Carved Stone Pillars Supporting Arch */}
        <rect x="140" y="304" width="32" height="56" fill="url(#gopuramStone)" stroke="url(#gopuramGold)" strokeWidth="2" />
        <rect x="428" y="304" width="32" height="56" fill="url(#gopuramStone)" stroke="url(#gopuramGold)" strokeWidth="2" />

        {/* Carvings on Pillars */}
        <path d="M148 314 L164 314 M148 334 L164 334 M148 350 L164 350" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M436 314 L452 314 M436 334 L452 334 M436 350 L452 350" stroke="#D4AF37" strokeWidth="1.5" />
      </svg>
    </div>
  );
};
