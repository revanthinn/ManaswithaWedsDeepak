import React from 'react';
import { motion } from 'framer-motion';
import { SectionDivider, GoldenCornerFiligree, BrassDeepam, TempleLotus, SacredKalash } from '../common/DecorativeMotifs';
import { WeddingDetails } from '../../types';
import { Calendar, Clock, MapPin, Navigation, ExternalLink, Utensils, Heart, Sparkles } from 'lucide-react';

interface ReceptionProps {
  weddingDetails: WeddingDetails;
}

export const WeddingReception: React.FC<ReceptionProps> = ({ weddingDetails }) => {
  const reception = weddingDetails.reception || {
    title: 'Wedding Reception',
    titleTelugu: 'వివాహ విందు / రిసెప్షన్',
    date: 'Monday, 16 November 2026',
    dateTelugu: '16-11-2026 సోమవారం',
    time: '11:30 AM',
    timeTelugu: 'ఉదయం 11:30 గంటలకు',
    venueName: 'SLV Grand',
    venueNameTelugu: 'SLV గ్రాండ్',
    address: 'Nagavaram Road, Wanaparthy',
    addressTelugu: 'నగవరం రోడ్, వనపర్తి',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=SLV+Grand+Nagavaram+Road+Wanaparthy',
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Wedding Reception: Manaswitha & Deepak Reddy'
  )}&dates=20261116T060000Z/20261116T113000Z&details=${encodeURIComponent(
    'Heartfelt invitation to the Wedding Reception of Chi. La. Sow. Manaswitha & Chi. Deepak Reddy at SLV Grand, Wanaparthy.'
  )}&location=${encodeURIComponent(reception.venueName + ', ' + reception.address)}`;

  return (
    <section id="reception" className="relative py-24 px-4 bg-maroon-950 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 -left-20 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse"
        style={{ animationDelay: '1.8s' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionDivider
          title="The Grand Wedding Reception"
          subtitle="A Joyous Celebration of Feasting, Felicitations & Everlasting Love"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-center">
          {/* Left Column: Traditional Visual Card with Filigrees */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ornate Gold Frame Container */}
            <div className="relative rounded-3xl p-3 bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-200 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
              <GoldenCornerFiligree position="top-left" size={36} />
              <GoldenCornerFiligree position="top-right" size={36} />
              <GoldenCornerFiligree position="bottom-left" size={36} />
              <GoldenCornerFiligree position="bottom-right" size={36} />

              <div className="relative rounded-2xl overflow-hidden p-6 sm:p-8 bg-gradient-to-b from-maroon-900 via-maroon-950 to-maroon-900 border border-gold-300 shadow-inner text-center">
                {/* Traditional Motifs */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <TempleLotus size={30} />
                  <SacredKalash size={36} />
                  <TempleLotus size={30} />
                </div>

                <p className="font-heading text-xs tracking-[0.25em] text-gold-300 uppercase font-semibold mb-2">
                  || శుభ రిసెప్షన్ • మంగళ విందు ||
                </p>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-200 to-amber-300 mb-2">
                  Wedding Reception
                </h3>

                <p className="font-royal text-gold-300 text-base sm:text-lg mb-4">
                  {reception.titleTelugu}
                </p>

                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-5" />

                <p className="font-subheading italic text-ivory-200 text-sm sm:text-base leading-relaxed mb-6">
                  &ldquo;Cordially inviting you and your family to join us in blessing the newlyweds{' '}
                  <span className="text-gold-300 font-semibold">Manaswitha &amp; Deepak Reddy</span> on their joyous reception.&rdquo;
                </p>

                {/* Event Highlights Badges */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gold-500/20 text-left">
                  <div className="p-3 rounded-xl bg-maroon-950/80 border border-gold-400/30">
                    <div className="flex items-center gap-2 text-gold-400 mb-1">
                      <Utensils className="w-4 h-4" />
                      <span className="font-heading text-xs font-semibold uppercase tracking-wider text-gold-300">
                        Royal Feast
                      </span>
                    </div>
                    <p className="text-[11px] text-ivory-300/80 font-sans">
                      Sumptuous traditional vegetarian lunch banquet
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-maroon-950/80 border border-gold-400/30">
                    <div className="flex items-center gap-2 text-gold-400 mb-1">
                      <Heart className="w-4 h-4" />
                      <span className="font-heading text-xs font-semibold uppercase tracking-wider text-gold-300">
                        Blessings
                      </span>
                    </div>
                    <p className="text-[11px] text-ivory-300/80 font-sans">
                      Felicitations &amp; warm greetings for the couple
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Deepams */}
            <div className="absolute -left-6 -bottom-6 hidden sm:block">
              <BrassDeepam size={54} />
            </div>
            <div className="absolute -right-6 -bottom-6 hidden sm:block">
              <BrassDeepam size={54} />
            </div>
          </motion.div>

          {/* Right Column: Venue, Date, Time & Action Controls */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-maroon-900/90 to-maroon-950/90 border-2 border-gold-400/50 shadow-2xl glass-royal-hover space-y-6">
              {/* Header Badge */}
              <div className="flex items-center gap-3 pb-4 border-b border-gold-500/20">
                <div className="p-2.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs tracking-widest uppercase text-gold-400 font-bold block">
                    Reception Details • వేడుక వివరాలు
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-gold-100">
                    {reception.venueName}
                  </h3>
                  {reception.venueNameTelugu && (
                    <p className="font-royal text-base text-gold-300 mt-0.5">
                      {reception.venueNameTelugu}
                    </p>
                  )}
                </div>
              </div>

              {/* Date & Time Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date Card */}
                <div className="p-4 rounded-2xl bg-maroon-950/90 border border-gold-400/40 shadow-inner flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-gold-500/15 text-gold-400 border border-gold-400/30 flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-heading text-[11px] uppercase tracking-wider text-gold-400/90 font-semibold block">
                      Date • తేదీ
                    </span>
                    <p className="font-heading text-base font-bold text-gold-100 mt-0.5">
                      {reception.date}
                    </p>
                    {reception.dateTelugu && (
                      <p className="font-royal text-xs text-gold-300/90 mt-0.5">
                        {reception.dateTelugu}
                      </p>
                    )}
                  </div>
                </div>

                {/* Time Card */}
                <div className="p-4 rounded-2xl bg-maroon-950/90 border border-gold-400/40 shadow-inner flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-gold-500/15 text-gold-400 border border-gold-400/30 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-heading text-[11px] uppercase tracking-wider text-gold-400/90 font-semibold block">
                      Time • సమయం
                    </span>
                    <p className="font-heading text-base font-bold text-gold-100 mt-0.5">
                      {reception.time}
                    </p>
                    {reception.timeTelugu && (
                      <p className="font-royal text-xs text-gold-300/90 mt-0.5">
                        {reception.timeTelugu}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-4 rounded-2xl bg-maroon-950/90 border border-gold-400/40 shadow-inner flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-gold-500/15 text-gold-400 border border-gold-400/30 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="font-heading text-[11px] uppercase tracking-wider text-gold-400/90 font-semibold block">
                    Venue Address • వేదిక చిరునామా
                  </span>
                  <p className="font-heading text-base font-semibold text-gold-100 mt-0.5">
                    {reception.venueName}, {reception.address}
                  </p>
                  {reception.addressTelugu && (
                    <p className="font-royal text-xs text-gold-300/90 mt-0.5">
                      {reception.venueNameTelugu}, {reception.addressTelugu}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons: Google Maps & Calendar */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                <a
                  href={reception.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-maroon-950 font-heading text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4 fill-current" />
                  <span>View On Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-maroon-950/90 border border-gold-400/60 text-gold-300 hover:text-gold-100 font-heading text-xs uppercase tracking-wider hover:bg-gold-500/20 hover:border-gold-300 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Add To Calendar</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
