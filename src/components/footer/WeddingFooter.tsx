import React from 'react';
import { TempleLotus, SacredKalash, MangoLeafToranam } from '../common/DecorativeMotifs';
import { WeddingDetails } from '../../types';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  weddingDetails: WeddingDetails;
  onReopenEntrance: () => void;
}

export const WeddingFooter: React.FC<FooterProps> = ({ weddingDetails, onReopenEntrance }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-maroon-950 border-t-2 border-gold-500/40 text-center pt-16 pb-12 px-4 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Sacred Kalash & Lotus Centerpiece */}
        <div className="flex items-center gap-4 mb-6">
          <TempleLotus size={40} />
          <SacredKalash size={44} />
          <TempleLotus size={40} />
        </div>

        {/* Auspicious Closing Statement */}
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-amber-200 tracking-wide mb-3">
          &ldquo;Your Presence Is Our Greatest Gift.&rdquo;
        </h2>

        <p className="font-subheading italic text-lg sm:text-xl text-gold-200/90 mb-8">
          With Love &amp; Gratitude, The Families
        </p>

        {/* Couple & Date Reminder */}
        <div className="py-6 px-8 rounded-2xl bg-maroon-900/60 border border-gold-500/30 backdrop-blur-md max-w-lg mx-auto w-full mb-8">
          <p className="font-heading text-xs tracking-widest uppercase text-gold-400 font-bold mb-1">
            Celebrating The Union Of
          </p>
          <h3 className="font-display text-xl sm:text-2xl text-gold-100 font-bold inline-flex items-baseline justify-center flex-wrap gap-x-2">
            <span className="inline-flex items-baseline">
              <sub className="text-xs sm:text-sm font-serif text-gold-400 mr-1 uppercase align-baseline">Chi. La. Sow.</sub>
              <span>Manaswitha</span>
            </span>
            <span className="text-gold-400 font-light">&amp;</span>
            <span className="inline-flex items-baseline">
              <sub className="text-xs sm:text-sm font-serif text-gold-400 mr-1 uppercase align-baseline">Chi.</sub>
              <span>Deepak</span>
            </span>
          </h3>
          <p className="font-heading text-sm text-gold-300 mt-1">
            {weddingDetails.weddingDate} • {weddingDetails.venueName}
          </p>
        </div>

        {/* Sanskrit Benediction */}
        <p className="font-serif tracking-widest text-xs sm:text-sm text-gold-300/80 mb-8">
          || సర్వే జనాః సుఖినో భవంతు • సమస్త సన్మంగళాని భవంతు ||
        </p>

        {/* Action Buttons: Re-Open Invitation & Back to Top */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={onReopenEntrance}
            className="px-5 py-2 rounded-full bg-maroon-900 border border-gold-400/50 text-gold-300 text-xs font-heading font-semibold uppercase tracking-wider hover:bg-gold-500/20 transition-colors cursor-pointer"
          >
            Re-Experience Temple Entrance
          </button>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-maroon-950 text-xs font-heading font-bold uppercase tracking-wider hover:shadow-lg transition-all cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back To Top</span>
          </button>
        </div>

        {/* Copyright & Traditional Credits */}
        <div className="pt-6 border-t border-gold-500/20 w-full text-center text-xs text-ivory-300/50">
          <p>
            Royal South Indian Telugu Wedding Invitation • Designed with Traditional Art &amp; Modern Craft
          </p>
        </div>
      </div>
    </footer>
  );
};
