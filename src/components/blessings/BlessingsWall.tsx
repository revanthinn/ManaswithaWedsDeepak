import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { SectionDivider, TempleLotus } from '../common/DecorativeMotifs';
import { Blessing } from '../../types';
import { Heart, Sparkles, MessageSquareHeart, Send, Quote, CheckCircle2 } from 'lucide-react';

interface BlessingsProps {
  blessings: Blessing[];
  onAddBlessing: (name: string, relation: string, message: string) => void;
}

export const BlessingsWall: React.FC<BlessingsProps> = ({ blessings, onAddBlessing }) => {
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [likedIds, setLikedIds] = useState<Record<string, number>>({});
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [lastSubmittedName, setLastSubmittedName] = useState('');
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFormOpen && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isFormOpen]);

  const handleLike = (id: string, initialLikes: number) => {
    setLikedIds((prev) => ({
      ...prev,
      [id]: (prev[id] !== undefined ? prev[id] : initialLikes) + 1,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedMessage) return;

    onAddBlessing(
      trimmedName,
      relation.trim() || 'Well-wisher & Friend • స్నేహితులు / బంధువులు',
      trimmedMessage
    );

    // Launch celebratory golden rice & floral confetti
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.65 },
        colors: ['#FFD700', '#FFA500', '#D4AF37', '#FFF8DC', '#C02938'],
      });
    } catch {}

    setLastSubmittedName(trimmedName);
    setName('');
    setRelation('');
    setMessage('');
    setIsFormOpen(false);
    setShowSuccessToast(true);

    const timer = setTimeout(() => {
      setShowSuccessToast(false);
    }, 7000);
    return () => clearTimeout(timer);
  };

  return (
    <section id="blessings" className="relative py-24 px-4 bg-maroon-950 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionDivider
          title="Sacred Blessings &amp; Wishes"
          subtitle="Heartfelt Prayers (Akshantalu) Showered Upon The Couple"
        />

        {/* Action Button: Inscribe A Blessing */}
        <div className="flex justify-center my-8">
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-500 text-maroon-950 font-heading text-xs sm:text-sm font-bold tracking-widest uppercase hover:shadow-[0_0_25px_rgba(212,175,55,0.7)] transition-all cursor-pointer active:scale-95"
          >
            <MessageSquareHeart className="w-4 h-4 text-maroon-950" />
            <span>{isFormOpen ? 'Close Form' : 'Inscribe Your Blessing For The Couple'}</span>
          </button>
        </div>

        {/* Success Feedback Notification Banner */}
        <AnimatePresence>
          {showSuccessToast && (
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="max-w-xl mx-auto mb-10 p-5 rounded-2xl bg-gradient-to-r from-maroon-900 via-maroon-950 to-maroon-900 border-2 border-gold-400 shadow-[0_10px_35px_rgba(212,175,55,0.3)] text-center relative overflow-hidden"
            >
              <div className="flex items-center justify-center gap-2 mb-1.5 text-gold-300">
                <CheckCircle2 className="w-5 h-5 text-gold-400" />
                <h4 className="font-royal text-base sm:text-lg text-gold-200">
                  శుభం భవతు • Blessing Inscribed!
                </h4>
              </div>
              <p className="font-subheading text-sm sm:text-base text-ivory-100">
                Thank you, <strong className="text-gold-300">{lastSubmittedName}</strong>. Your sacred prayer and akshantalu have been inscribed upon the wall for Manaswitha &amp; Deepak Reddy with eternal love.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form to leave blessing */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="overflow-hidden mb-12 max-w-2xl mx-auto"
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-maroon-900 to-maroon-950 border-2 border-gold-400/80 shadow-[0_15px_40px_rgba(0,0,0,0.8)] space-y-4"
              >
                <div className="text-center pb-2 border-b border-gold-500/20">
                  <h3 className="font-royal text-lg text-gold-200">దివ్య ఆశీర్వచనం</h3>
                  <p className="font-subheading italic text-xs text-gold-300/80">Inscribe your wishes in English or Telugu</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading uppercase tracking-widest text-gold-300 font-bold mb-1.5">
                      Your Name *
                    </label>
                    <input
                      ref={nameInputRef}
                      type="text"
                      required
                      placeholder="e.g. Smt. Sumalatha Rao / సుమలత"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-maroon-950 border border-gold-500/50 text-ivory-100 placeholder:text-ivory-300/35 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading uppercase tracking-widest text-gold-300 font-bold mb-1.5">
                      Relationship / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Family Friend / Warangal"
                      value={relation}
                      onChange={(e) => setRelation(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-maroon-950 border border-gold-500/50 text-ivory-100 placeholder:text-ivory-300/35 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading uppercase tracking-widest text-gold-300 font-bold mb-1.5">
                    Your Sacred Blessing Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Write a verse, Telugu blessing, or loving wish for Manaswitha & Deepak Reddy's Grihastha Ashramam..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-maroon-950 border border-gold-500/50 text-ivory-100 placeholder:text-ivory-300/35 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 resize-none"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="w-1/3 py-3 rounded-full border border-gold-400/40 text-gold-300 font-heading text-xs uppercase tracking-wider hover:bg-gold-500/10 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-maroon-950 font-heading text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer hover:brightness-110 active:scale-95 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Post Blessing On Wall</span>
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blessings.map((b, index) => {
            const currentLikes = likedIds[b.id] !== undefined ? likedIds[b.id] : b.likes;

            return (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: (index % 6) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, scale: 1.015 }}
                className="rounded-2xl p-6 bg-gradient-to-b from-maroon-900/80 to-maroon-950 border border-gold-400/40 shadow-lg flex flex-col justify-between relative group hover:border-gold-300 hover:shadow-[0_15px_30px_rgba(212,175,55,0.2)] transition-all duration-300"
              >
                {/* Decorative Quote Icon */}
                <Quote className="w-8 h-8 text-gold-500/20 absolute top-4 right-4 pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gold-600 to-amber-300 p-0.5 flex-shrink-0 shadow">
                      <div className="w-full h-full rounded-full bg-maroon-950 flex items-center justify-center text-gold-300 font-heading text-xs font-bold">
                        {b.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-gold-200">
                        {b.name}
                      </h4>
                      <p className="text-[11px] text-gold-400/80 font-medium">
                        {b.relation}
                      </p>
                    </div>
                  </div>

                  <p className="font-subheading italic text-sm text-ivory-200/95 leading-relaxed my-3 break-words">
                    &ldquo;{b.message}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-gold-500/20 flex items-center justify-between mt-2 text-xs">
                  <span className="text-gold-300/60 font-sans text-[11px]">
                    {b.timestamp}
                  </span>

                  <button
                    onClick={() => handleLike(b.id, b.likes)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-maroon-950 border border-gold-500/30 text-rose-300 hover:text-rose-200 hover:border-gold-400 transition-all cursor-pointer group-hover:scale-105 active:scale-95"
                    title="Shower Akshantalu / Bless"
                  >
                    <Heart className="w-3.5 h-3.5 fill-rose-500/40 text-rose-400" />
                    <span className="font-semibold text-xs text-gold-300">{currentLikes}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
