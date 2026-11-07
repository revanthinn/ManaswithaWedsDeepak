import React, { useEffect, useState } from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';

interface BananaTreeProps {
  side: 'left' | 'right';
  scrollVelocity: number;
}

const SingleBananaTree: React.FC<BananaTreeProps> = ({ side, scrollVelocity }) => {
  const isLeft = side === 'left';

  // Dynamic sway angle influenced by scroll velocity
  const swayAngle = Math.max(-12, Math.min(12, scrollVelocity * 0.015));

  return (
    <div 
      className={`fixed top-0 bottom-0 z-20 pointer-events-none select-none transition-opacity duration-500 ${
        isLeft 
          ? 'left-0 origin-bottom-left' 
          : 'right-0 origin-bottom-right scale-x-[-1]'
      } w-24 sm:w-36 md:w-48 lg:w-56 h-full flex flex-col justify-between`}
    >
      <svg
        viewBox="0 0 220 900"
        className="w-full h-full drop-shadow-[0_8px_25px_rgba(0,0,0,0.6)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin slice"
      >
        <defs>
          {/* Lush Emerald Leaf Gradients */}
          <linearGradient id={`leafGrad1-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#81C784" />
            <stop offset="35%" stopColor="#388E3C" />
            <stop offset="85%" stopColor="#1B5E20" />
            <stop offset="100%" stopColor="#0D3811" />
          </linearGradient>

          <linearGradient id={`leafGrad2-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A5D6A7" />
            <stop offset="40%" stopColor="#43A047" />
            <stop offset="90%" stopColor="#2E7D32" />
            <stop offset="100%" stopColor="#134717" />
          </linearGradient>

          {/* Plantain Trunk Gradient */}
          <linearGradient id={`trunkGrad-${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2E7D32" />
            <stop offset="30%" stopColor="#4CAF50" />
            <stop offset="70%" stopColor="#81C784" />
            <stop offset="100%" stopColor="#1B5E20" />
          </linearGradient>

          {/* Golden Plantain Bunch Gradient */}
          <linearGradient id={`bananaGold-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9C4" />
            <stop offset="40%" stopColor="#FFD54F" />
            <stop offset="80%" stopColor="#FFB300" />
            <stop offset="100%" stopColor="#825300" />
          </linearGradient>

          {/* Sacred Purple Banana Flower Blossom (Arati Puvvu) */}
          <linearGradient id={`flowerBlossom-${side}`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#880E4F" />
            <stop offset="45%" stopColor="#AD1457" />
            <stop offset="80%" stopColor="#4A0E17" />
            <stop offset="100%" stopColor="#2A050B" />
          </linearGradient>

          {/* Marigold Garland Gradient */}
          <linearGradient id={`marigoldGrad-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="40%" stopColor="#FFA000" />
            <stop offset="80%" stopColor="#E65100" />
            <stop offset="100%" stopColor="#BF360C" />
          </linearGradient>
        </defs>

        {/* ================= TRUNK BASE TO APEX ================= */}
        {/* Main Tree Trunk (Stem) */}
        <path
          d="M0 900 L18 900 Q32 500 24 220 L10 220 L0 900 Z"
          fill={`url(#trunkGrad-${side})`}
        />

        {/* Fibrous Sheath Rings on Trunk */}
        {[260, 310, 370, 430, 490, 560, 630, 710, 790, 860].map((y, idx) => (
          <g key={`ring-${idx}`}>
            <path
              d={`M4 ${y} Q18 ${y - 8} 28 ${y}`}
              stroke="#1B5E20"
              strokeWidth="2.5"
              fill="none"
              opacity="0.75"
            />
            <path
              d={`M4 ${y + 2} Q18 ${y - 6} 28 ${y + 2}`}
              stroke="#A5D6A7"
              strokeWidth="1.2"
              fill="none"
              opacity="0.6"
            />
          </g>
        ))}

        {/* ================= MARIGOLD & TURMERIC CORDS WRAPPED ON TRUNK ================= */}
        {/* Sacred Red & Yellow Threads (Kankanam) around the mid-trunk */}
        <g id="sacred-threads">
          <path d="M6 500 Q20 488 30 500" stroke="#FFD700" strokeWidth="4" fill="none" />
          <path d="M6 508 Q20 496 30 508" stroke="#DC143C" strokeWidth="4" fill="none" />
          <path d="M6 516 Q20 504 30 516" stroke="#FF8C00" strokeWidth="4" fill="none" />
        </g>

        {/* Hanging Marigold Garlands wrapping the tree */}
        <g id="marigold-garland">
          {[460, 540, 620].map((y, i) => (
            <g key={`mari-${i}`}>
              <path
                d={`M2 ${y} Q22 ${y + 22} 32 ${y}`}
                stroke="#E65100"
                strokeWidth="7"
                strokeDasharray="9 3"
                fill="none"
              />
              <path
                d={`M2 ${y} Q22 ${y + 22} 32 ${y}`}
                stroke="#FFD54F"
                strokeWidth="4"
                strokeDasharray="9 3"
                strokeDashoffset="4"
                fill="none"
              />
            </g>
          ))}
        </g>

        {/* ================= DYNAMIC SWAYING BANANA LEAVES ================= */}
        <motion.g
          animate={{
            rotate: [swayAngle * 0.8, -swayAngle * 0.4, swayAngle * 0.8],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '20px 220px' }}
        >
          {/* Leaf 1: Highest arching crown leaf reaching deep inward */}
          <g>
            <path
              d="M18 220 C20 150, 45 60, 110 30 C155 10, 205 25, 218 60 C212 90, 160 135, 18 220 Z"
              fill={`url(#leafGrad1-${side})`}
              filter="drop-shadow(0 4px 10px rgba(0,0,0,0.3))"
            />
            {/* Main Central White Vein */}
            <path
              d="M18 220 C35 140, 90 60, 218 60"
              stroke="#C8E6C9"
              strokeWidth="3.5"
              fill="none"
            />
            {/* Natural Leaf Serrations / Lateral Veins */}
            {[0.2, 0.4, 0.6, 0.75, 0.85].map((t, idx) => (
              <path
                key={`vein1-${idx}`}
                d={`M${40 + idx * 28} ${160 - idx * 20} Q${55 + idx * 30} ${120 - idx * 16} ${75 + idx * 30} ${95 - idx * 12}`}
                stroke="#A5D6A7"
                strokeWidth="1.2"
                fill="none"
                opacity="0.65"
              />
            ))}
          </g>

          {/* Leaf 2: Middle majestic horizontal broad leaf */}
          <g>
            <path
              d="M16 225 C35 180, 80 130, 150 120 C195 115, 215 140, 210 170 C190 205, 120 230, 16 225 Z"
              fill={`url(#leafGrad2-${side})`}
            />
            <path
              d="M16 225 C65 175, 130 140, 210 170"
              stroke="#E8F5E9"
              strokeWidth="3"
              fill="none"
            />
          </g>

          {/* Leaf 3: Lower drooping lush leaf */}
          <g>
            <path
              d="M14 235 C35 220, 85 220, 140 240 C175 255, 190 280, 175 305 C145 320, 85 295, 14 235 Z"
              fill={`url(#leafGrad1-${side})`}
            />
            <path
              d="M14 235 C65 235, 120 260, 175 305"
              stroke="#C8E6C9"
              strokeWidth="2.5"
              fill="none"
            />
          </g>

          {/* Leaf 4: Back supporting canopy leaf */}
          <g opacity="0.85">
            <path
              d="M18 215 C25 140, 50 80, 85 60 C115 45, 145 60, 140 90 C125 130, 75 180, 18 215 Z"
              fill={`url(#leafGrad2-${side})`}
            />
          </g>
        </motion.g>

        {/* ================= GOLDEN BANANA CLUSTER & PENDULUM FLOWER ================= */}
        {/* Hanging Stalk from crown */}
        <path d="M22 230 Q45 250 50 285" stroke="#2E7D32" strokeWidth="6" fill="none" />

        {/* Golden Plantain Bunch (Arati Ghaata) */}
        <g id="banana-bunch" transform="translate(32, 275)">
          {/* Layer of 7 Curved Golden Bananas */}
          {[
            { x: 0, y: 0, r: -25 },
            { x: 8, y: -6, r: -10 },
            { x: 18, y: -4, r: 10 },
            { x: 26, y: 4, r: 30 },
            { x: 4, y: 14, r: -15 },
            { x: 16, y: 12, r: 8 },
            { x: 22, y: 22, r: 25 },
          ].map((b, i) => (
            <path
              key={`banana-${i}`}
              d="M0 0 C12 -4, 28 6, 26 22 C22 24, 8 16, 0 0 Z"
              transform={`translate(${b.x}, ${b.y}) rotate(${b.r})`}
              fill={`url(#bananaGold-${side})`}
              stroke="#B8860B"
              strokeWidth="0.8"
              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
            />
          ))}
          {/* Flower bract connector */}
          <path d="M12 25 L12 40" stroke="#1B5E20" strokeWidth="4" />
        </g>

        {/* Sacred Purple Banana Blossom Teardrop Flower (Arati Puvvu) */}
        <motion.g
          animate={{
            rotate: [swayAngle * 1.5, -swayAngle * 1.2, swayAngle * 1.5],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '44px 315px' }}
        >
          {/* Flower Stem */}
          <path d="M44 315 L44 330" stroke="#1B5E20" strokeWidth="3" />
          
          {/* Inflorescence Heart/Teardrop Blossom */}
          <path
            d="M44 330 C30 345, 26 375, 44 400 C62 375, 58 345, 44 330 Z"
            fill={`url(#flowerBlossom-${side})`}
            stroke="#880E4F"
            strokeWidth="1.2"
            filter="drop-shadow(0 4px 8px rgba(0,0,0,0.5))"
          />
          {/* Petal Bract lines */}
          <path d="M44 334 C36 355, 36 380, 44 396" stroke="#FF80AB" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M44 334 C52 355, 52 380, 44 396" stroke="#FF80AB" strokeWidth="1" fill="none" opacity="0.6" />
          {/* Golden tip droplet */}
          <circle cx="44" cy="402" r="2.5" fill="#FFD700" className="animate-pulse" />
        </motion.g>
      </svg>
    </div>
  );
};

export const TraditionalBananaTrees: React.FC = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 40, stiffness: 200 });
  const [velocityVal, setVelocityVal] = useState(0);

  useEffect(() => {
    return smoothVelocity.on('change', (latest: number) => {
      setVelocityVal(latest);
    });
  }, [smoothVelocity]);

  return (
    <div className="pointer-events-none select-none" aria-hidden="true">
      {/* Left Sacred Wedding Banana Tree */}
      <SingleBananaTree side="left" scrollVelocity={velocityVal} />

      {/* Right Sacred Wedding Banana Tree */}
      <SingleBananaTree side="right" scrollVelocity={velocityVal} />
    </div>
  );
};
