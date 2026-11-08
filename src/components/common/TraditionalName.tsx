import React from 'react';

interface TraditionalNameProps {
  fullName: string;
  teluguFullName?: string;
  type?: 'groom' | 'bride';
  size?: 'hero' | 'envelope' | 'announcement' | 'footer' | 'nav';
  showTelugu?: boolean;
  className?: string;
}

export const TraditionalName: React.FC<TraditionalNameProps> = ({
  fullName,
  teluguFullName,
  type,
  size = 'hero',
  showTelugu = false,
  className = '',
}) => {
  const isBride = type === 'bride' || fullName.toLowerCase().includes('manaswitha');

  // English prefix and core name
  const englishPrefix = isBride ? 'Chi. La. Sow.' : 'Chi.';
  let mainName = fullName.trim();
  const prefixRegex = /^(chi\.?\s*la\.?\s*sow\.?|ch\.?\s*ila\.?\s*sow\.?|chi\.?\s*sow\.?|ch\.|chi\.|sow\.)\s*/i;
  const match = mainName.match(prefixRegex);
  if (match) {
    mainName = mainName.substring(match[0].length).trim();
  }

  // Telugu prefix and core name
  const teluguPrefix = isBride ? 'చి. ల. సౌ.' : 'చి.';
  let teluguMainName = teluguFullName ? teluguFullName.trim() : (isBride ? 'మనస్విత' : 'దీపక్ రెడ్డి');
  const teluguPrefixRegex = /^(చి\.?\s*ల\.?\s*సౌ\.?|చి\.?\s*సౌ\.?|చి\.)\s*/;
  const teluguMatch = teluguMainName.match(teluguPrefixRegex);
  if (teluguMatch) {
    teluguMainName = teluguMainName.substring(teluguMatch[0].length).trim();
  }

  if (size === 'hero') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* English Name with Traditional Subscript Prefix (never wraps, aligned to baseline) */}
        <div className="inline-flex items-baseline justify-center whitespace-nowrap">
          <sub className="font-serif italic text-base sm:text-xl md:text-2xl text-gold-400/90 font-semibold tracking-wider mr-2 select-none">
            {englishPrefix}
          </sub>
          <span className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gold-100 via-gold-300 to-amber-400 drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)] tracking-wide">
            {mainName}
          </span>
        </div>

        {/* Telugu Script Below */}
        {showTelugu && (
          <div className="inline-flex items-baseline justify-center whitespace-nowrap gap-x-1.5 mt-2">
            <sub className="font-serif text-xs sm:text-sm text-gold-400 font-medium select-none">
              {teluguPrefix}
            </sub>
            <span className="font-royal text-lg sm:text-2xl text-gold-200 tracking-wide">
              {teluguMainName}
            </span>
          </div>
        )}
      </div>
    );
  }

  if (size === 'envelope') {
    return (
      <div className={`flex flex-col items-center text-center my-2 ${className}`}>
        <div className="inline-flex items-baseline justify-center whitespace-nowrap">
          <sub className="font-serif italic text-xs sm:text-sm text-gold-400 font-semibold tracking-wider mr-1.5 select-none">
            {englishPrefix}
          </sub>
          <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-amber-200 drop-shadow-md">
            {mainName}
          </span>
        </div>

        {showTelugu && (
          <div className="inline-flex items-baseline justify-center whitespace-nowrap gap-x-1 mt-1">
            <sub className="font-serif text-xs text-gold-400 font-medium select-none">
              {teluguPrefix}
            </sub>
            <span className="font-royal text-base sm:text-lg text-gold-200">
              {teluguMainName}
            </span>
          </div>
        )}
      </div>
    );
  }

  if (size === 'announcement') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="inline-flex items-baseline justify-center whitespace-nowrap">
          <sub className="font-serif italic text-xs sm:text-sm text-gold-400 font-semibold tracking-wider mr-1.5 select-none">
            {englishPrefix}
          </sub>
          <span className="font-display text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gold-200">
            {mainName}
          </span>
        </div>

        {showTelugu && (
          <div className="inline-flex items-baseline justify-center whitespace-nowrap gap-x-1 mt-1">
            <sub className="font-serif text-xs text-gold-400 font-medium select-none">
              {teluguPrefix}
            </sub>
            <span className="font-royal text-lg text-gold-300">
              {teluguMainName}
            </span>
          </div>
        )}
      </div>
    );
  }

  // Fallback / Compact size
  return (
    <span className={`inline-flex items-baseline whitespace-nowrap gap-x-1.5 ${className}`}>
      <sub className="font-serif italic text-xs text-gold-400 font-semibold select-none">
        {englishPrefix}
      </sub>
      <span className="font-display font-bold text-gold-100">
        {mainName}
      </span>
    </span>
  );
};
