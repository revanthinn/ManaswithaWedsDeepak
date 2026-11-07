import React from 'react';
import { motion } from 'framer-motion';
import { WeddingDetails } from '../../types';
import { SectionDivider, TempleLotus, SacredKalash, GoldenCornerFiligree } from '../common/DecorativeMotifs';
import { TraditionalName } from '../common/TraditionalName';
import { Heart, Sparkles, Flower2, Shield } from 'lucide-react';

interface AnnouncementProps {
  weddingDetails: WeddingDetails;
}

export const FamilyAnnouncement: React.FC<AnnouncementProps> = ({ weddingDetails }) => {
  const rituals = [
    {
      icon: Sparkles,
      title: 'Jeelakarra Bellam',
      desc: 'Cumin & jaggery paste placed on heads at exact lagna, symbolizing inseparable fusion like sweet jaggery and pungent cumin.',
    },
    {
      icon: Shield,
      title: 'Mangalasutram',
      desc: 'The holy yellow thread with two gold discs (Sutralu) tied with three sacred knots for divine harmony and longevity.',
    },
    {
      icon: Flower2,
      title: 'Talambralu',
      desc: 'Showers of fragrant pearls and yellow turmeric-infused rice poured over each other amidst laughter, abundance, and joy.',
    },
    {
      icon: Heart,
      title: 'Saptapadi',
      desc: 'Seven sacred steps taken together around the holy Agni fire, invoking companionship, nourishment, and eternal fidelity.',
    },
  ];

  return (
    <section id="announcement" className="relative py-24 px-4 bg-maroon-900/40 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      {/* Ambient Glowing Orbs behind the section (revanthdesigns inspired) */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionDivider
          title="Sacred Wedding Announcement"
          subtitle="A Divine Union Blessed by Generations of Ancestral Grace"
        />

        {/* Grand Invitation Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-10 md:p-12 mt-8 bg-gradient-to-b from-maroon-950/95 via-maroon-900/95 to-maroon-950/95 border-2 border-gold-400/60 shadow-[0_25px_65px_rgba(0,0,0,0.75)] text-center backdrop-blur-md"
        >
          {/* Golden Corner Accents */}
          <GoldenCornerFiligree position="top-left" size={36} />
          <GoldenCornerFiligree position="top-right" size={36} />
          <GoldenCornerFiligree position="bottom-left" size={36} />
          <GoldenCornerFiligree position="bottom-right" size={36} />

          {/* Kalash Emblem */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <SacredKalash size={54} />
          </motion.div>

          {/* Emotional Statement */}
          <p className="font-heading text-xs sm:text-sm tracking-[0.2em] uppercase text-gold-300 font-semibold mb-4">
            || శుభమస్తు • శ్రీరస్తు ||
          </p>

          <blockquote className="font-subheading italic text-xl sm:text-2xl md:text-3xl text-gold-100 max-w-2xl mx-auto leading-relaxed mb-10">
            &ldquo;With the blessings of our elders and the grace of the Almighty, we joyfully invite you to celebrate the sacred union of our beloved children.&rdquo;
          </blockquote>

          {/* Bride & Groom Families Columns with smooth sliding entrances */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 relative">
            {/* Center Decorative Divider for Desktop */}
            <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 flex-col items-center justify-center pointer-events-none">
              <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
              <div className="p-1 rounded-full bg-maroon-950 border border-gold-400 my-2">
                <TempleLotus size={28} />
              </div>
              <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
            </div>

            {/* Bride's Family Side - Slides in from left */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center p-4 xs:p-6 rounded-xl sm:rounded-2xl bg-maroon-900/60 border border-gold-500/30 shadow-inner glass-royal-hover"
            >
              <span className="font-heading text-xs tracking-widest text-gold-400 uppercase font-semibold mb-2">
                The Bride • పెళ్లికూతురు
              </span>
              <TraditionalName
                fullName={weddingDetails.brideName}
                teluguFullName={weddingDetails.brideNameTelugu}
                type="bride"
                size="announcement"
                showTelugu={true}
              />
              <p className="font-subheading italic text-ivory-200/90 text-sm sm:text-base mt-3">
                Beloved Daughter of
              </p>
              <p className="font-heading text-base sm:text-lg text-gold-300 font-semibold mt-1">
                {weddingDetails.brideParents}
              </p>
              {weddingDetails.brideParentsTelugu && (
                <p className="font-sans text-xs text-gold-200/80 mt-0.5">
                  {weddingDetails.brideParentsTelugu}
                </p>
              )}
              <div className="mt-4 pt-3 border-t border-gold-500/20 w-full text-center">
                <span className="text-xs text-gold-200/70 font-sans tracking-wide">
                  Kanyaka • పెళ్లికూతురు
                </span>
              </div>
            </motion.div>

            {/* Groom's Family Side - Slides in from right */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center p-4 xs:p-6 rounded-xl sm:rounded-2xl bg-maroon-900/60 border border-gold-500/30 shadow-inner glass-royal-hover"
            >
              <span className="font-heading text-xs tracking-widest text-gold-400 uppercase font-semibold mb-2">
                The Groom • వరుడు
              </span>
              <TraditionalName
                fullName={weddingDetails.groomName}
                teluguFullName={weddingDetails.groomNameTelugu}
                type="groom"
                size="announcement"
                showTelugu={true}
              />
              <p className="font-subheading italic text-ivory-200/90 text-sm sm:text-base mt-3">
                Eldest Son of
              </p>
              <p className="font-heading text-base sm:text-lg text-gold-300 font-semibold mt-1">
                {weddingDetails.groomParents}
              </p>
              {weddingDetails.groomParentsTelugu && (
                <p className="font-sans text-xs text-gold-200/80 mt-0.5">
                  {weddingDetails.groomParentsTelugu}
                </p>
              )}
              <div className="mt-4 pt-3 border-t border-gold-500/20 w-full text-center">
                <span className="text-xs text-gold-200/70 font-sans tracking-wide">
                  Varudu • పెళ్లికొడుకు
                </span>
              </div>
            </motion.div>
          </div>

          {/* Invitation by & Lunch Note Banner */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-950 border border-gold-400/50 shadow-md text-center glass-royal-hover"
          >
            <div className="flex items-center justify-center gap-2 mb-2 text-gold-400">
              <Sparkles className="w-4 h-4 text-gold-300" />
              <span className="font-heading text-xs tracking-widest uppercase font-bold text-gold-300">
                Invited With Warmth &amp; Reverence By • ఆహ్వానించేవారు
              </span>
              <Sparkles className="w-4 h-4 text-gold-300" />
            </div>
            <h4 className="font-display text-lg sm:text-2xl text-gold-100 font-bold">
              {weddingDetails.invitedBy || 'Smt. & Sri Kusuma Vani Sree – Venu Gopal'}
            </h4>
            {weddingDetails.invitedByTelugu && (
              <p className="font-royal text-base text-gold-300/90 mt-1">
                {weddingDetails.invitedByTelugu}
              </p>
            )}

            <div className="mt-4 pt-4 border-t border-gold-500/20 flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm">
              <div className="text-gold-200 font-medium">
                🍛 <span className="font-semibold text-gold-300">Lunch / విందు:</span>{' '}
                <span>{weddingDetails.lunchNote || 'Lunch follows the wedding'} (వివాహానంతరం)</span>
              </div>
              <div className="text-ivory-200/80 italic">
                ✨ {weddingDetails.compliments || 'With best compliments from: Near & Dear...'}
              </div>
            </div>
          </motion.div>

          {/* Traditional Telugu Wedding Motifs Cards */}
          <div className="mt-12 pt-8 border-t border-gold-500/30">
            <h4 className="font-heading tracking-[0.2em] text-xs sm:text-sm uppercase text-gold-300 font-bold mb-6">
              Sacred Telugu Wedding Ritual Motifs
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {rituals.map((r, i) => {
                const IconComponent = r.icon;
                return (
                  <motion.div
                    key={r.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="p-4 rounded-xl bg-maroon-950/70 border border-gold-500/20 hover:border-gold-400/60 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-default"
                  >
                    <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-300 mb-2.5 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h5 className="font-heading text-sm font-bold text-gold-200 group-hover:text-gold-100 transition-colors">
                      {r.title}
                    </h5>
                    <p className="text-[11px] text-ivory-300/80 mt-1 leading-relaxed">
                      {r.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
