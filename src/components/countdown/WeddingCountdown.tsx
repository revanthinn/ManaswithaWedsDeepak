import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionDivider, TempleLotus } from '../common/DecorativeMotifs';
import { WeddingDetails } from '../../types';
import { Calendar, Download, Sparkles } from 'lucide-react';

interface CountdownProps {
  weddingDetails: WeddingDetails;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

export const WeddingCountdown: React.FC<CountdownProps> = ({ weddingDetails }) => {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      let targetTimestamp = Date.parse(weddingDetails.targetDateISO);
      if (isNaN(targetTimestamp)) {
        targetTimestamp = Date.now() + 1000 * 60 * 60 * 24 * 35;
      }

      const difference = targetTimestamp - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isCompleted: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [weddingDetails.targetDateISO]);

  const handleAddToGoogleCalendar = () => {
    const title = encodeURIComponent(`Wedding of ${weddingDetails.brideName} & ${weddingDetails.groomName}`);
    const details = encodeURIComponent(
      `Sacred Muhurtham: ${weddingDetails.muhurthamTime}\nVenue: ${weddingDetails.venueName}, ${weddingDetails.venueAddress}`
    );
    const location = encodeURIComponent(`${weddingDetails.venueName}, ${weddingDetails.venueAddress}`);
    
    const startDate = '20261115T044300Z';
    const endDate = '20261115T150000Z';

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  const handleDownloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Royal Telugu Wedding//Wedding Invitation//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Wedding of ${weddingDetails.brideName} & ${weddingDetails.groomName}
DESCRIPTION:Sacred Telugu Hindu Wedding Ceremony\\nTime: ${weddingDetails.muhurthamTime}\\nVenue: ${weddingDetails.venueName}\\nAddress: ${weddingDetails.venueAddress}
LOCATION:${weddingDetails.venueName}, ${weddingDetails.venueAddress}
DTSTART:20261115T044300Z
DTEND:20261115T150000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'royal-telugu-wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const timeUnits = [
    { label: 'Days', telugu: 'రోజులు', value: timeLeft.days, isSeconds: false },
    { label: 'Hours', telugu: 'గంటలు', value: timeLeft.hours, isSeconds: false },
    { label: 'Minutes', telugu: 'నిమిషాలు', value: timeLeft.minutes, isSeconds: false },
    { label: 'Seconds', telugu: 'సెకన్లు', value: timeLeft.seconds, isSeconds: true },
  ];

  return (
    <section id="countdown" className="relative py-20 px-4 bg-maroon-950 overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <SectionDivider
          title="Auspicious Muhurtham Countdown"
          subtitle="Counting Every Golden Second Until The Sacred Knot Is Tied"
        />

        {/* Live Countdown Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-10 max-w-3xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.03 }}
              className={`relative rounded-2xl p-4 sm:p-6 bg-gradient-to-b from-maroon-900 via-maroon-850 to-maroon-950 border-2 shadow-[0_12px_30px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center group overflow-hidden transition-colors ${
                unit.isSeconds ? 'border-amber-400 ring-2 ring-amber-400/30' : 'border-gold-400/50 hover:border-gold-400'
              }`}
            >
              {/* Corner Accents */}
              <div className="absolute top-1.5 left-1.5 text-gold-400/40">
                <TempleLotus size={16} />
              </div>
              <div className="absolute top-1.5 right-1.5 text-gold-400/40">
                <TempleLotus size={16} />
              </div>

              {/* Number with Shimmer */}
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gold-100 via-gold-300 to-amber-500 tracking-tight my-1 drop-shadow-md">
                {String(unit.value).padStart(2, '0')}
              </div>

              {/* English Label */}
              <div className="font-heading text-xs uppercase tracking-widest text-gold-300 font-semibold">
                {unit.label}
              </div>

              {/* Telugu Label */}
              <div className="font-royal text-xs text-gold-400/80 mt-0.5">
                {unit.telugu}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Auspicious Muhurtham Note Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 inline-block px-6 sm:px-10 py-3.5 rounded-full bg-gradient-to-r from-maroon-900 via-maroon-850 to-maroon-900 border border-gold-400/60 shadow-lg text-center"
        >
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gold-200">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="font-semibold text-gold-300">సుముహూర్తం:</span>
            <span>{weddingDetails.weddingDate}</span>
            <span className="text-gold-400 font-bold">•</span>
            <span>{weddingDetails.muhurthamTime}</span>
            <Sparkles className="w-4 h-4 text-gold-400" />
          </div>
        </motion.div>

        {/* Add to Calendar Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <button
            onClick={handleAddToGoogleCalendar}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-maroon-900/90 border border-gold-400/60 text-gold-200 hover:text-gold-100 hover:border-gold-300 hover:bg-gold-500/10 transition-all font-heading text-xs uppercase tracking-wider cursor-pointer shadow-md hover:scale-105"
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>Add To Google Calendar</span>
          </button>

          <button
            onClick={handleDownloadICS}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-maroon-900/90 border border-gold-400/60 text-gold-200 hover:text-gold-100 hover:border-gold-300 hover:bg-gold-500/10 transition-all font-heading text-xs uppercase tracking-wider cursor-pointer shadow-md hover:scale-105"
          >
            <Download className="w-4 h-4 text-gold-400" />
            <span>Download Apple / Outlook (.ics)</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
