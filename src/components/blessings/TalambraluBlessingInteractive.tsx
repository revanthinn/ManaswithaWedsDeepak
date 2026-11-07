import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { SectionDivider, GoldenCornerFiligree } from '../common/DecorativeMotifs';
import { WeddingDetails } from '../../types';
import { Sparkles } from 'lucide-react';

interface TalambraluProps {
  weddingDetails: WeddingDetails;
}

interface FloatingBlessing {
  id: number;
  text: string;
  translation: string;
  x: number;
}

export const TalambraluBlessingInteractive: React.FC<TalambraluProps> = ({ weddingDetails }) => {
  const [showerCount, setShowerCount] = useState<number>(() => {
    const saved = localStorage.getItem('talambralu_count');
    return saved ? parseInt(saved, 10) : 1008; // 1008 is an auspicious sacred Vedic number
  });

  const [activeBlessings, setActiveBlessings] = useState<FloatingBlessing[]>([]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const blessingQuotes = [
    { text: '|| శ్రీరస్తు • శుభమస్తు ||', translation: 'May Divine Grace & Auspiciousness Abound' },
    { text: '|| కళ్యాణ వైభోగమే ||', translation: 'Rejoice in Sacred Wedding Splendor' },
    { text: '|| దీర్ఘ సుమంగళీ భవ ||', translation: 'Blessed with Eternal Joy & Harmony' },
    { text: '|| ఆయుష్మాన్భవ ||', translation: 'Blessed with Health, Vitality & Grace' },
    { text: '|| అన్యోన్యం దాంపత్యం ||', translation: 'Bound in Inseparable Lifelong Devotion' },
    { text: '|| లోకాః సమస్తాః సుఖినో భవంతు ||', translation: 'Peace & Happiness to All Beings' },
  ];

  const handleShowerTalambralu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const originX = (rect.left + rect.width / 2) / window.innerWidth;
    const originY = (rect.top + rect.height / 2) / window.innerHeight;

    // 1. Shower Golden Pearls & Turmeric Akshantalu
    confetti({
      particleCount: 80,
      angle: 90,
      spread: 85,
      origin: { x: originX, y: Math.max(0.2, originY - 0.2) },
      colors: ['#FFD700', '#FFF176', '#FFB300', '#FFA000'],
      shapes: ['circle'],
      scalar: 1.3,
      ticks: 200,
      gravity: 0.8,
    });

    // 2. Fragrant Rose & Jasmine Petals
    confetti({
      particleCount: 50,
      angle: 90,
      spread: 110,
      origin: { x: originX, y: Math.max(0.2, originY - 0.2) },
      colors: ['#DC143C', '#FF1493', '#FFFFFF', '#FFFDD0'],
      shapes: ['square', 'circle'],
      scalar: 1.0,
      ticks: 180,
      gravity: 0.6,
    });

    // Increment Counter
    const nextCount = showerCount + 1;
    setShowerCount(nextCount);
    localStorage.setItem('talambralu_count', nextCount.toString());

    // Generate Floating Blessing
    const randomQuote = blessingQuotes[Math.floor(Math.random() * blessingQuotes.length)];
    const newBlessing: FloatingBlessing = {
      id: Date.now() + Math.random(),
      text: randomQuote.text,
      translation: randomQuote.translation,
      x: (Math.random() - 0.5) * 240,
    };

    setActiveBlessings((prev) => [...prev.slice(-4), newBlessing]);

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    // Clean up blessing after animation
    setTimeout(() => {
      setActiveBlessings((prev) => prev.filter((b) => b.id !== newBlessing.id));
    }, 2800);
  };

  return (
    <section id="talambralu" className="relative py-24 px-4 bg-maroon-900/50 overflow-hidden">
      {/* Background Mandala Watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full border border-gold-400 border-dashed animate-spin-slow" />
      </div>

      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <SectionDivider
          title="Interactive Talambralu Ceremony"
          subtitle="Shower Sacred Golden Pearls (Akshantalu) & Fragrant Petals Over The Newlyweds"
        />

        {/* Main Sacred Interactive Pavilion Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-10 mt-10 bg-gradient-to-b from-maroon-950/95 via-maroon-900/90 to-maroon-950/95 border-2 border-gold-400/60 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-md overflow-hidden glass-royal-hover"
        >
          <GoldenCornerFiligree position="top-left" size={36} />
          <GoldenCornerFiligree position="top-right" size={36} />
          <GoldenCornerFiligree position="bottom-left" size={36} />
          <GoldenCornerFiligree position="bottom-right" size={36} />

          {/* Telugu Traditional Title */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-royal text-xl sm:text-2xl text-gold-300 mb-2"
          >
            ముత్యాల తలంబ్రాలు • దివ్య దాంపత్య దీవెన
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-subheading italic text-base sm:text-lg text-ivory-200/90 max-w-xl mx-auto leading-relaxed mb-4"
          >
            In Telugu heritage, Talambralu represents boundless laughter, divine prosperity, and elder blessings. Tap below to shower sacred yellow pearls and flowers upon{' '}
            <span className="text-gold-300 font-semibold">{weddingDetails.brideName}</span> &amp;{' '}
            <span className="text-gold-300 font-semibold">{weddingDetails.groomName}</span>.
          </motion.p>

          {/* Dynamic Couple Portal with Continuously Rotating Sacred Golden Mandala Behind */}
          <div className="relative mt-8 sm:mt-10 mb-8 sm:mb-10 flex items-center justify-center">

            {/* Photo Frame Container — mandala lives inside so it's always centered behind */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-lg rounded-2xl overflow-visible aspect-[3/2] group"
            >
              {/* Always Rotating Sacred Golden Mandala — centered inside photoframe bounds */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <motion.img
                  src="/images/rotating-golden-mandala.png"
                  alt="Sacred Golden Mandala"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="w-[115%] h-[115%] max-w-none opacity-90 drop-shadow-[0_0_40px_rgba(212,175,55,0.8)]"
                />
              </div>

              {/* Radiant Ambient Aura */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-3/4 h-3/4 rounded-full bg-gold-500/20 blur-3xl" />
              </div>

              {/* Actual frame border + image — sits above mandala */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-2 border-gold-400/80 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-maroon-950">
              <img
                src="/images/1000289002.jpg"
                alt="Chi. La. Sow. Manaswitha &amp; Chi. Deepak"
                className={`w-full h-full object-cover object-center transition-transform duration-500 ${
                    isAnimating ? 'scale-105 filter brightness-110' : 'scale-100'
                  }`}
                />

                {/* Radiant Golden Glow Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-maroon-950/30 pointer-events-none" />

                {/* Floating Sanskrit Inscriptions appearing upon click */}
                <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
                  <AnimatePresence>
                    {activeBlessings.map((blessing) => (
                      <motion.div
                        key={blessing.id}
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: -70, scale: 1.1 }}
                        exit={{ opacity: 0, y: -120 }}
                        transition={{ duration: 2.2, ease: 'easeOut' }}
                        style={{ transform: `translateX(${blessing.x}px)` }}
                        className="absolute bg-maroon-950/90 border border-gold-400 px-4 py-2 rounded-xl shadow-2xl backdrop-blur-md text-center"
                      >
                        <p className="font-royal text-sm sm:text-base text-gold-200 font-bold whitespace-nowrap">
                          {blessing.text}
                        </p>
                        <p className="text-[10px] text-ivory-300/80 font-sans tracking-wide">
                          {blessing.translation}
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Bottom Inset Banner */}
                <div className="absolute bottom-3 left-4 right-4 bg-maroon-950/85 backdrop-blur-md rounded-lg py-1.5 px-3 border border-gold-400/40 flex items-center justify-between text-xs">
                <span className="text-gold-300 font-heading tracking-wider uppercase font-semibold inline-flex items-baseline gap-1">
                  <span>Talambralu</span>
                  <span className="text-[10px] text-gold-400 font-serif">||</span>
                  <span>Manaswitha &amp; Deepak</span>
                </span>
                  <span className="text-amber-200 flex items-center gap-1 font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-spin-slow" />
                    <span>{showerCount.toLocaleString()} Showers</span>
                  </span>
                </div>
              </div>{/* end inner frame div */}
            </motion.div>{/* end photo frame motion.div */}
          </div>{/* end portal row div */}

          {/* Interactive Shower Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-col items-center"
          >
            <motion.button
              onClick={handleShowerTalambralu}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="relative px-5 xs:px-8 sm:px-12 py-3 sm:py-4 rounded-full bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 text-maroon-950 font-heading text-xs sm:text-base font-extrabold tracking-wider sm:tracking-widest uppercase shadow-[0_0_30px_rgba(212,175,55,0.8)] hover:shadow-[0_0_45px_rgba(255,215,0,1)] transition-all cursor-pointer flex items-center gap-2 sm:gap-3 overflow-hidden group whitespace-nowrap"
            >
              {/* Shimmer Light Bar */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/40 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />

              <Sparkles className="w-5 h-5 text-maroon-950 animate-bounce" />
              <span>Shower Talambralu &amp; Bless!</span>
              <Sparkles className="w-5 h-5 text-maroon-950 animate-bounce" />
            </motion.button>

            {/* Counter Description */}
            <p className="mt-4 text-xs text-gold-300/80 font-heading tracking-wide">
              * Tap repeatedly to shower holy pearls, turmeric rice &amp; flowers
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
