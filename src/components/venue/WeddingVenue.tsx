import React from 'react';
import { motion } from 'framer-motion';
import { SectionDivider, GoldenCornerFiligree, BrassDeepam } from '../common/DecorativeMotifs';
import { WeddingDetails } from '../../types';
import { MapPin, Navigation, Car, PhoneCall, ExternalLink } from 'lucide-react';

interface VenueProps {
  weddingDetails: WeddingDetails;
}

export const WeddingVenue: React.FC<VenueProps> = ({ weddingDetails }) => {
  const isCustomLink = weddingDetails.googleMapsUrl && weddingDetails.googleMapsUrl !== '[MAPS LINK]';
  const mapsHref = isCustomLink 
    ? weddingDetails.googleMapsUrl 
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(weddingDetails.venueName + ' ' + weddingDetails.venueAddress)}`;

  return (
    <section id="venue" className="relative py-24 px-4 bg-maroon-950 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" style={{ animationDelay: '1.8s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionDivider
          title="The Sacred Wedding Mandapam"
          subtitle="Where Sacred Mantras Echo And Celestial Blessings Descend"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-center">
          {/* Left Column: Traditional Mandapam Illustration & Visual (Slides from left) */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Ornate Gold Frame Container */}
            <div className="relative rounded-3xl p-3 bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-200 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
              <GoldenCornerFiligree position="top-left" size={40} />
              <GoldenCornerFiligree position="top-right" size={40} />
              <GoldenCornerFiligree position="bottom-left" size={40} />
              <GoldenCornerFiligree position="bottom-right" size={40} />

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-maroon-900 border border-gold-300 shadow-inner group">
                <img
                  src="/royal-mandapam.jpg"
                  alt="Royal South Indian Kalyana Mandapam"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-black/20 pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 bg-maroon-950/90 backdrop-blur-md rounded-xl p-3 border border-gold-400/40 text-center">
                  <p className="font-heading text-xs tracking-widest text-gold-300 uppercase font-semibold">
                    The Kalyana Vedika
                  </p>
                  <p className="font-subheading italic text-xs text-ivory-200 mt-0.5">
                    Consecrated with Vedic Fire &amp; Floral Canopies
                  </p>
                </div>
              </div>
            </div>

            {/* Corner Decorative Deepams */}
            <div className="absolute -left-6 -bottom-6 hidden sm:block">
              <BrassDeepam size={60} />
            </div>
            <div className="absolute -right-6 -bottom-6 hidden sm:block">
              <BrassDeepam size={60} />
            </div>
          </motion.div>

          {/* Right Column: Venue Details & Embedded Map (Slides from right) */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-maroon-900/90 to-maroon-950/90 border-2 border-gold-400/50 shadow-2xl glass-royal-hover">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs tracking-widest uppercase text-gold-400 font-bold block">
                    Wedding Location • కళ్యాణ వేదిక
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-gold-100">
                    {weddingDetails.venueName}
                  </h3>
                  {weddingDetails.venueNameTelugu && (
                    <p className="font-royal text-base text-gold-300 mt-0.5">
                      {weddingDetails.venueNameTelugu}
                    </p>
                  )}
                </div>
              </div>

              {/* Full Address */}
              <div className="my-4 p-4 rounded-xl bg-maroon-950/70 border border-gold-500/30">
                <p className="text-sm sm:text-base text-ivory-100 leading-relaxed font-sans">
                  {weddingDetails.venueAddress}
                </p>
                {weddingDetails.venueAddressTelugu && (
                  <p className="text-xs text-gold-300/80 mt-1 font-sans">
                    {weddingDetails.venueAddressTelugu}
                  </p>
                )}
                {weddingDetails.lunchNote && (
                  <div className="mt-3 pt-2 border-t border-gold-500/20 text-xs text-amber-200 flex items-center gap-2">
                    <span>🍛</span>
                    <span className="font-semibold text-gold-300">{weddingDetails.lunchNote}</span>
                    {weddingDetails.lunchNoteTelugu && <span>({weddingDetails.lunchNoteTelugu})</span>}
                  </div>
                )}
              </div>

              {/* Embedded Interactive Map Card */}
              <div className="my-5 rounded-xl overflow-hidden border border-gold-500/30 relative aspect-video bg-maroon-950">
                <iframe
                  title="Wedding Venue Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    weddingDetails.venueName === '[VENUE NAME]'
                      ? 'Hyderabad, Telangana'
                      : weddingDetails.venueName + ' ' + weddingDetails.venueAddress
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0 filter contrast-125 opacity-85 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 bg-maroon-950/80 px-2.5 py-1 rounded-full text-[10px] text-gold-300 font-medium border border-gold-400/40">
                  Live Map Preview
                </div>
              </div>

              {/* Guest Facilities Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 my-5 text-xs text-ivory-300">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-maroon-950/60 border border-gold-500/20">
                  <Car className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>Complimentary Valet Parking</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-maroon-950/60 border border-gold-500/20">
                  <PhoneCall className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>Host Desk: {weddingDetails.rsvpContact}</span>
                </div>
              </div>

              {/* Get Directions Action Button */}
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 py-3 sm:py-3.5 px-4 sm:px-6 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-maroon-950 font-heading text-xs sm:text-sm font-bold tracking-wider sm:tracking-widest uppercase flex items-center justify-center gap-2 sm:gap-2.5 shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:shadow-[0_0_30px_rgba(255,215,0,0.8)] transition-all cursor-pointer hover:scale-105"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions On Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
