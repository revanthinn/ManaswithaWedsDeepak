/**
 * ScrollReveal — reusable scroll-triggered animation wrapper.
 *
 * Variants inspired by revanthdesigns.vercel.app:
 *  • fadeUp       — element rises and fades in (default)
 *  • fadeDown     — element drops in from above
 *  • fadeLeft     — slides in from left
 *  • fadeRight    — slides in from right
 *  • clipReveal   — content sweeps in via clip-path (cinematic reveal)
 *  • scaleIn      — zooms in from slightly smaller
 *  • stagger      — wraps children; each child animates in sequence
 *  • flipUp       — 3D perspective flip on the Y axis
 */

import React from 'react';
import { motion, Variants } from 'framer-motion';

type RevealVariant =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'clipReveal'
  | 'scaleIn'
  | 'stagger'
  | 'flipUp';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  /** Delay before the animation starts (seconds) */
  delay?: number;
  /** Animation duration (seconds) */
  duration?: number;
  /** Stagger delay between children when variant='stagger' (seconds) */
  staggerDelay?: number;
  /** Additional Tailwind / class names */
  className?: string;
  /** Fraction of element that must be visible to trigger (0–1) */
  threshold?: number;
  /** Only animate once (default: true) */
  once?: boolean;
  as?: React.ElementType;
}

// ─── Variant definitions ────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
};

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -48 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const clipReveal: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
  visible: { opacity: 1, clipPath: 'inset(0 0 0% 0)' },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: { opacity: 1, scale: 1 },
};

const flipUp: Variants = {
  hidden: { opacity: 0, rotateX: 25, y: 40 },
  visible: { opacity: 1, rotateX: 0, y: 0 },
};

/** Stagger container — orchestrates children */
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/** Default child variant used when parent is 'stagger' */
const staggerChild: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const variantMap: Record<RevealVariant, Variants> = {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  clipReveal,
  scaleIn,
  stagger: staggerContainer,
  flipUp,
};

// ─── Component ───────────────────────────────────────────────────────────────

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.72,
  staggerDelay,
  className,
  threshold = 0.15,
  once = true,
  as: Tag = 'div',
}) => {
  const MotionTag = motion(Tag as React.ElementType);
  const variants = variantMap[variant];

  // For stagger, override staggerChildren if staggerDelay supplied
  const resolvedVariants =
    variant === 'stagger' && staggerDelay
      ? {
          hidden: {},
          visible: { transition: { staggerChildren: staggerDelay } },
        }
      : variants;

  return (
    <MotionTag
      className={className}
      variants={resolvedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      transition={
        variant !== 'stagger'
          ? {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart — smooth, slightly springy
            }
          : undefined
      }
    >
      {/* When using stagger, wrap each direct child in its own animated div */}
      {variant === 'stagger'
        ? React.Children.map(children, (child, i) =>
            child ? (
              <motion.div
                key={i}
                variants={staggerChild}
                transition={{
                  duration,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {child}
              </motion.div>
            ) : null
          )
        : children}
    </MotionTag>
  );
};

/**
 * ScrollRevealText — splits text into words and animates each word.
 * Great for section titles (like revanthdesigns.vercel.app).
 */
interface ScrollRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

const wordContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const wordChild: Variants = {
  hidden: { opacity: 0, y: 24, skewY: 4 },
  visible: { opacity: 1, y: 0, skewY: 0 },
};

export const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({
  text,
  className,
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
  once = true,
  tag: Tag = 'h2',
}) => {
  const words = text.split(' ');

  return (
    <motion.div
      className={`overflow-hidden ${className ?? ''}`}
      variants={wordContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      transition={{ delay }}
    >
      {/* Render as the requested tag but with word-span children */}
      {React.createElement(
        Tag,
        { style: { display: 'flex', flexWrap: 'wrap', gap: '0.3em' } },
        words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordChild}
            transition={{ duration, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: 'inline-block', overflow: 'hidden' }}
          >
            {word}
          </motion.span>
        ))
      )}
    </motion.div>
  );
};
