import React from 'react';
import { motion } from 'framer-motion';
import { WeddingDetails } from '../../types';
import { GoldenCornerFiligree, BrassDeepam } from '../common/DecorativeMotifs';
import { ChevronDown, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  weddingDetails: WeddingDetails;
  onExploreClick: () => void;
}

export const HeroCouple: React.FC<HeroProps> = ({ weddingDetails, onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center overflow-hidden bg-maroon-silk pt-28 sm:pt-32 lg:pt-28 xl:pt-32 pb-12 lg:pb-16"
    >
      {/* Background Spinning Mandala Watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full border-2 border-dashed border-gold-400 animate-spin-slow" />
      </div>

      {/* Floating Golden Ambient Sparkles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute rounded-full bg-gold-400"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.5,
              filter: 'blur(0.5px)',
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.4, 0.8] }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      {/* ═══════════════════════════════════════════════
          LEFT COLUMN — Text Content (Vertical Stack)
          ═══════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 xs:px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 py-2 sm:py-4 lg:py-4">

        {/* Sacred Invocation */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
        >
          <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-gold-400" />
          <span className="font-heading tracking-[0.2em] sm:tracking-[0.22em] text-[10px] sm:text-xs uppercase text-gold-300 font-semibold drop-shadow whitespace-nowrap">
            శ్రీ లక్ష్మీ వేంకటేశ్వర ప్రసన్నః
          </span>
          <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-gold-400" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-subheading italic text-sm xs:text-base sm:text-xl text-gold-200/90 tracking-wide mb-4 sm:mb-6"
        >
          Two Hearts, One Beautiful Journey
        </motion.p>

        {/* ── BRIDE NAME — Vertical Stack ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.3 }}
          className="flex flex-col items-center lg:items-start mb-1 sm:mb-2"
        >
          {/* Honorific prefix */}
          <span className="font-subheading italic text-gold-400 text-xs sm:text-sm md:text-base tracking-widest leading-tight mb-0.5">
            Chi. La. Sow.
          </span>
          {/* English main name */}
          <span
            className="font-display font-bold leading-none tracking-tight text-transparent bg-clip-text"
            style={{
              fontSize: 'clamp(1.75rem, 6vw, 4.4rem)',
              backgroundImage: 'linear-gradient(135deg, #f5d060 0%, #e8b84b 40%, #c8902a 70%, #f5d060 100%)',
            }}
          >
            MANASWITHA
          </span>
          {/* Telugu name */}
          <span className="font-royal text-gold-300/90 mt-1 tracking-wide" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.35rem)' }}>
            చి. ల. సౌ. మనస్విత
          </span>
        </motion.div>

        {/* ── Ornamental & Separator ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex items-center gap-2 sm:gap-3 my-2 sm:my-3"
        >
          <div className="h-[1px] w-5 sm:w-10 bg-gradient-to-r from-transparent to-gold-400/60" />
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gold-400/50 bg-maroon-900/80 shadow flex items-center justify-center flex-shrink-0">
            <span className="font-subheading italic text-base sm:text-xl font-light text-gold-300">&</span>
          </div>
          <div className="h-[1px] w-5 sm:w-10 bg-gradient-to-l from-transparent to-gold-400/60" />
        </motion.div>

        {/* ── GROOM NAME — Vertical Stack ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.55 }}
          className="flex flex-col items-center lg:items-start mb-4 sm:mb-6"
        >
          {/* Honorific prefix */}
          <span className="font-subheading italic text-gold-400 text-xs sm:text-sm md:text-base tracking-widest leading-tight mb-0.5">
            Chi.
          </span>
          {/* English main name */}
          <span
            className="font-display font-bold leading-none tracking-tight text-transparent bg-clip-text"
            style={{
              fontSize: 'clamp(1.9rem, 6.5vw, 4.6rem)',
              backgroundImage: 'linear-gradient(135deg, #f5d060 0%, #e8b84b 40%, #c8902a 70%, #f5d060 100%)',
            }}
          >
            DEEPAK
          </span>
          {/* Telugu name */}
          <span className="font-royal text-gold-300/90 mt-1 tracking-wide" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.35rem)' }}>
            చి. దీపక్
          </span>
        </motion.div>

        {/* ── Info Badges ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col xs:flex-row lg:flex-col xl:flex-row flex-wrap items-center lg:items-start justify-center gap-2 sm:gap-2.5 mb-4 sm:mb-6 w-full xs:w-auto"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-maroon-900/80 border border-gold-400/60 shadow backdrop-blur-md">
            <Calendar className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
            <span className="font-heading text-xs sm:text-sm font-semibold text-gold-200 tracking-wide whitespace-nowrap">
              {weddingDetails.weddingDate}
            </span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-maroon-900/80 border border-gold-400/60 shadow backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
            <span className="font-heading text-xs sm:text-sm font-semibold text-gold-200 tracking-wide whitespace-nowrap">
              {weddingDetails.muhurthamTime}
            </span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-maroon-900/80 border border-gold-400/60 shadow backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
            <span className="font-heading text-xs sm:text-sm font-semibold text-gold-200 tracking-wide max-w-[200px] sm:max-w-[240px] truncate">
              {weddingDetails.venueName}
            </span>
          </div>
        </motion.div>

        {/* ── Scroll CTA ── */}
        <motion.button
          onClick={onExploreClick}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center lg:items-start text-gold-300 hover:text-gold-100 transition-colors cursor-pointer group"
          aria-label="Scroll to wedding invitation announcement"
        >
          <span className="font-heading tracking-[0.2em] text-[10px] uppercase mb-1.5 opacity-80 group-hover:opacity-100 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-gold-400" />
            <span>Enter The Celebrations</span>
            <Sparkles className="w-3 h-3 text-gold-400" />
          </span>
          <div className="w-8 h-8 rounded-full border border-gold-400/50 flex items-center justify-center bg-maroon-900/50 group-hover:bg-gold-500/20 transition-colors">
            <ChevronDown className="w-4 h-4 text-gold-400" />
          </div>
        </motion.button>
      </div>

      {/* ═══════════════════════════════════════════════
          RIGHT COLUMN — Portrait Image
          ═══════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative flex items-center justify-center px-4 xs:px-6 sm:px-8 lg:px-8 xl:px-12 py-2 sm:py-4 lg:py-4"
      >
        {/* Outer Glow Halo */}
        <div className="absolute inset-4 sm:inset-10 bg-gold-500/15 rounded-3xl blur-3xl -z-10 pointer-events-none" />

        {/* Gold Frame Container - Responsive portrait frame */}
        <div className="relative w-full max-w-[270px] xs:max-w-[290px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[390px] xl:max-w-[430px]">
          {/* ── MOBILE / TABLET (< lg): Mandala centered behind photoframe ── */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <motion.img
              src="/images/rotating-golden-mandala.png"
              alt="Sacred Golden Mandala"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="w-[115%] h-[115%] max-w-none opacity-90 drop-shadow-[0_0_35px_rgba(212,175,55,0.75)]"
            />
          </div>
          <div className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-3/4 h-3/4 rounded-full bg-gold-500/20 blur-3xl" />
          </div>

          {/* ── LAPTOP / DESKTOP (lg+): Mandala 50% peeking from left edge ── */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
            <motion.img
              src="/images/rotating-golden-mandala.png"
              alt="Sacred Golden Mandala"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="w-[495px] h-[495px] xl:w-[545px] xl:h-[545px] max-w-none opacity-90 drop-shadow-[0_0_35px_rgba(212,175,55,0.75)]"
            />
          </div>
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] xl:w-[400px] xl:h-[400px] rounded-full bg-gold-500/20 blur-3xl pointer-events-none z-0" />

          {/* The Photoframe itself (z-10, sits in front of the right 50% of the mandala) */}
          <div className="relative z-10 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 bg-gradient-to-tr from-gold-600 via-gold-400 to-gold-200 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
            {/* Corner Filigrees */}
            <GoldenCornerFiligree position="top-left" size={36} />
            <GoldenCornerFiligree position="top-right" size={36} />
            <GoldenCornerFiligree position="bottom-left" size={36} />
            <GoldenCornerFiligree position="bottom-right" size={36} />

            {/* Portrait — strict 2:3 aspect ratio */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border-2 border-gold-300 aspect-[2/3] bg-maroon-900 shadow-inner group">
              <img
                src="/images/1000288993.jpg"
                alt="Chi. La. Sow. Manaswitha &amp; Chi. Deepak"
                className="w-full h-full object-cover object-center brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-maroon-950/30 pointer-events-none" />
              {/* Caption Badge */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-maroon-950/85 backdrop-blur-md rounded-xl p-2 sm:p-3 border border-gold-400/50 text-center">
                <p className="font-royal text-gold-300 text-xs sm:text-sm tracking-wide">శుభ ముహూర్త వేళ</p>
                <p className="font-heading text-[10px] sm:text-[11px] uppercase tracking-widest text-ivory-100 mt-0.5">The Sacred Vedic Union</p>
              </div>
            </div>
          </div>

          {/* Floating Brass Lamps (z-20) */}
          <div className="absolute -left-5 sm:-left-8 -bottom-5 sm:-bottom-6 hidden xs:block z-20">
            <BrassDeepam size={52} />
          </div>
          <div className="absolute -right-5 sm:-right-8 -bottom-5 sm:-bottom-6 hidden xs:block z-20">
            <BrassDeepam size={52} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
