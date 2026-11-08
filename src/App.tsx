import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { 
  MANASWITHA_DEEPAK_DETAILS,
  GALLERY_PHOTOS, 
  INITIAL_BLESSINGS 
} from './data/weddingData';
import { WeddingDetails, Blessing } from './types';
import { EntranceExperience } from './components/opening/EntranceExperience';
import { FloatingPetalsCanvas } from './components/common/FloatingPetalsCanvas';
import { TraditionalAudioPlayer } from './components/audio/TraditionalAudioPlayer';
import { Navbar } from './components/navigation/Navbar';
import { HeroCouple } from './components/hero/HeroCouple';
import { FamilyAnnouncement } from './components/announcement/FamilyAnnouncement';
import { TalambraluBlessingInteractive } from './components/blessings/TalambraluBlessingInteractive';
import { WeddingCountdown } from './components/countdown/WeddingCountdown';
import { WeddingVenue } from './components/venue/WeddingVenue';
import { WeddingReception } from './components/reception/WeddingReception';
import { PhotoGallery } from './components/gallery/PhotoGallery';
import { BlessingsWall } from './components/blessings/BlessingsWall';
import { WeddingFooter } from './components/footer/WeddingFooter';

export function App() {
  const [weddingDetails] = useState<WeddingDetails>(() => {
    // Purge outdated legacy cached versions
    try {
      const oldKeys = [
        'royal_wedding_details',
        'royal_wedding_details_v1',
        'royal_wedding_details_v2',
        'royal_wedding_details_manaswitha_deepak_v2'
      ];
      oldKeys.forEach((key) => localStorage.removeItem(key));
    } catch {}
    return MANASWITHA_DEEPAK_DETAILS;
  });

  const [isEntranceOpen, setIsEntranceOpen] = useState<boolean>(false);
  const [autoPlayAudio, setAutoPlayAudio] = useState<boolean>(false);
  const [blessings, setBlessings] = useState<Blessing[]>(() => {
    const saved = localStorage.getItem('royal_wedding_blessings_v4');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Retain user-added blessings (id starts with 'blessing-')
        const userCustomBlessings = parsed.filter(
          (b: Blessing) => b.id && b.id.startsWith('blessing-')
        );
        return [...userCustomBlessings, ...INITIAL_BLESSINGS];
      } catch {}
    }
    return INITIAL_BLESSINGS;
  });

  const handleOpenInvitation = () => {
    setIsEntranceOpen(true);
    setAutoPlayAudio(true);
  };

  const handleReopenEntrance = () => {
    setIsEntranceOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddBlessing = (name: string, relation: string, message: string) => {
    const newBlessing: Blessing = {
      id: `blessing-${Date.now()}`,
      name,
      relation,
      message,
      timestamp: 'Just now',
      likes: 1,
    };
    const updated = [newBlessing, ...blessings];
    setBlessings(updated);
    localStorage.setItem('royal_wedding_blessings_v4', JSON.stringify(updated));
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-maroon-950 text-ivory-100 flex flex-col relative selection:bg-gold-500 selection:text-maroon-950 font-sans">
      {/* 1. Immersive Opening Temple Entrance Screen */}
      <AnimatePresence>
        {!isEntranceOpen && (
          <EntranceExperience
            weddingDetails={weddingDetails}
            onOpen={handleOpenInvitation}
          />
        )}
      </AnimatePresence>

      {/* 2. Floating Gentle Petals & Gold Dust Canvas Animation */}
      <FloatingPetalsCanvas />

      {/* 3. Floating Ambient Carnatic Music Player */}
      <TraditionalAudioPlayer autoPlayRequest={autoPlayAudio} />

      {/* 4. Top Royal Navigation Header */}
      <Navbar
        weddingDetails={weddingDetails}
        onReopenEntrance={handleReopenEntrance}
      />

      {/* Main Wedding Content Container */}
      <main className="flex-1 w-full">
        {/* Hero Section – The Couple */}
        <HeroCouple
          weddingDetails={weddingDetails}
          onExploreClick={() => handleScrollToSection('announcement')}
        />

        {/* Wedding Announcement & Sacred Motifs */}
        <FamilyAnnouncement weddingDetails={weddingDetails} />

        {/* Dynamic & Interactive Talambralu Ceremony Experience */}
        <TalambraluBlessingInteractive weddingDetails={weddingDetails} />

        {/* Live Wedding Countdown to Muhurtham */}
        <WeddingCountdown weddingDetails={weddingDetails} />

        {/* Wedding Venue & Mandapam */}
        <WeddingVenue weddingDetails={weddingDetails} />

        {/* Wedding Reception */}
        <WeddingReception weddingDetails={weddingDetails} />

        {/* Photo Gallery & 3D Tilt Lightbox */}
        <PhotoGallery photos={GALLERY_PHOTOS} />

        {/* Blessings & Wishes Wall */}
        <BlessingsWall
          blessings={blessings}
          onAddBlessing={handleAddBlessing}
        />
      </main>

      {/* Footer */}
      <WeddingFooter
        weddingDetails={weddingDetails}
        onReopenEntrance={handleReopenEntrance}
      />
    </div>
  );
}

export default App;
