import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { TempleLotus } from '../common/DecorativeMotifs';
import { WeddingDetails } from '../../types';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  weddingDetails: WeddingDetails;
  onReopenEntrance: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ weddingDetails, onReopenEntrance }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll progress indicator (revanthdesigns inspired)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Couple', href: '#hero' },
    { label: 'Announcement', href: '#announcement' },
    { label: 'Talambralu', href: '#talambralu' },
    { label: 'Muhurtham', href: '#countdown' },
    { label: 'Mandapam', href: '#venue' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Blessings', href: '#blessings' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Topmost Royal Gold Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-500 via-amber-300 to-gold-400 origin-left z-50 shadow-[0_0_12px_rgba(212,175,55,0.85)] pointer-events-none"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen || isScrolled
            ? 'border-b border-gold-500/40 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.85)]'
            : 'bg-gradient-to-b from-maroon-950/95 via-maroon-950/75 to-transparent backdrop-blur-[2px] py-3 sm:py-3.5'
        }`}
        style={isMobileMenuOpen || isScrolled ? { backgroundColor: '#1a0307' } : undefined}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2.5 text-left group flex-shrink-0 mr-4 lg:mr-8"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-200 p-0.5 shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-maroon-950 flex items-center justify-center">
                <TempleLotus size={22} />
              </div>
            </div>
            <div>
              <p className="font-display text-xs xs:text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 to-gold-300 tracking-wider whitespace-nowrap">
                Manaswitha &amp; Deepak
              </p>
              <p className="text-[9px] xs:text-[10px] tracking-widest text-gold-400/80 font-heading uppercase truncate max-w-[190px] xs:max-w-none">
                15 Nov 2026 • Sacred Telugu Wedding
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-heading text-xs uppercase tracking-widest text-ivory-200/90 hover:text-gold-300 transition-colors py-1 relative group whitespace-nowrap flex-shrink-0"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-amber-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Action: Shower Blessings Call To Action */}
          <div className="flex items-center gap-3">
            <a
              href="#talambralu"
              onClick={(e) => handleLinkClick(e, '#talambralu')}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-maroon-950 font-heading text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-gold-500/30 transition-all cursor-pointer hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5 text-maroon-950" />
              <span>Shower Blessings</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-maroon-900 border border-gold-500/50 text-gold-300 hover:text-gold-100 cursor-pointer shadow-md active:scale-95"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-gold-300" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Backdrop & Opaque Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Full-screen Dark Backdrop Overlay behind drawer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="xl:hidden fixed inset-0 top-0 bg-black/80 backdrop-blur-sm -z-10"
              />

              {/* 100% Solid Opaque Mobile Menu Drawer */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="xl:hidden absolute top-full left-0 right-0 border-b-2 border-gold-400/60 shadow-[0_25px_60px_rgba(0,0,0,0.98)] p-6 z-50 max-h-[calc(100vh-70px)] overflow-y-auto"
                style={{ backgroundColor: '#1a0307' }}
              >
                <nav className="flex flex-col gap-2 text-center">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="py-3 px-4 font-heading text-sm uppercase tracking-widest text-gold-200 hover:text-gold-100 hover:bg-gold-500/15 rounded-xl transition-all border border-transparent hover:border-gold-500/30 active:scale-98"
                    >
                      {link.label}
                    </a>
                  ))}

                  <div className="pt-4 border-t border-gold-500/30 mt-2 flex flex-col gap-3">
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onReopenEntrance();
                      }}
                      className="py-3 px-4 rounded-full border border-gold-400/50 text-gold-300 font-heading text-xs uppercase tracking-wider hover:bg-gold-500/20 active:scale-95 transition-all"
                    >
                      Re-Experience Temple Entrance
                    </button>

                    <a
                      href="#talambralu"
                      onClick={(e) => handleLinkClick(e, '#talambralu')}
                      className="py-3 px-4 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-500 text-maroon-950 font-heading text-xs font-bold uppercase tracking-wider shadow-lg active:scale-95 transition-all"
                    >
                      Shower Blessings
                    </a>
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
