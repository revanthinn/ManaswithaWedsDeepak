# Royal South Indian Telugu Wedding Invitation Website

An extraordinarily beautiful, highly interactive, premium South Indian Hindu wedding invitation experience inspired by royal Telugu weddings, ancient temple aesthetics, traditional brass & silk motifs, and modern luxury editorial design.

## ✨ Key Experience & Architecture

1. **Temple Doorway Entrance & Animated Golden Envelope**
   - South Indian carved rosewood temple doorway with 3D parting doors
   - Two glowing brass deepams (Kuthuvilakku) on stone pedestals with flickering flames
   - Hanging mango leaves & marigold toranam
   - Royal maroon & gold wax-sealed wedding envelope
   - Opens exclusively upon clicking the "Open Sacred Invitation" button
   - On clicking:
     - Envelope flap unfolds
     - Flower petal shower (falling marigold, jasmine, and rose petals via custom canvas particles)
     - Ambient Carnatic music initiates
     - Temple doors swing open to reveal the royal wedding celebration

2. **Continuous Dynamic Floating Petals & Gold Dust Canvas**
   - High-performance 60fps HTML5 canvas rendering falling marigold petals, delicate white jasmine florets, crimson rose petals, and shimmering gold dust embers
   - Gentle wind sway physics and interactive mouse breeze repulsion

3. **The Couple Hero Section**
   - Photorealistic Telugu wedding couple portrait in heavy 22k gold filigree temple arch frame
   - Bride in crimson & antique gold Kanchipuram silk saree with traditional temple vaddanam and jasmine braid
   - Groom in raw silk panche & gold zari angavastram with sacred tilak
   - Large serif typography for bride & groom names
   - Wedding date & muhurtham auspicious badges
   - Floating gold sparkles & smooth scroll indicator

4. **Family Announcement & Sacred Motifs**
   - Formal emotional announcement: *"With the blessings of our elders and the grace of the Almighty, we joyfully invite you to celebrate the sacred union of our beloved children."*
   - Lineages: Bride & Groom with their respective parents
   - Telugu wedding cultural motif cards:
     - *Jeelakarra Bellam* (Cumin & Jaggery sacred paste)
     - *Mangalasutram* (Three holy knots)
     - *Talambralu* (Showers of yellow pearls & rice)
     - *Saptapadi* (Seven holy circumambulations around Agni)

5. **Interactive Talambralu Ceremony Experience**
   - An interactive digital recreation of the peak joyous ritual in Telugu weddings
   - Guests can tap the *"Shower Talambralu & Bless"* button to rain cascading fountains of holy yellow turmeric rice (akshantalu), golden pearls, and fresh petals over the couple
   - Renders animated floating Telugu and Sanskrit benedictions (*"శుభమస్తు"*, *"శ్రీరస్తు"*, *"ఆయుష్మాన్భవ"*, *"సౌభాగ్యవతీ భవ"*, *"కళ్యాణ వైభోగమే"*)
   - Real-time shower counter tracking blessings from loved ones

6. **Live Muhurtham Countdown**
   - Real-time countdown: Days, Hours, Minutes, Seconds with animated digit transitions
   - Pulsing golden aura on the seconds card
   - "Add to Google Calendar" and "Download .ICS Event"

7. **The Sacred Mandapam & Venue**
   - Custom-generated royal South Indian Kalyana Mandapam with teakwood pillars, gopuram ceiling, and homa altar
   - Venue address and embedded Google Maps preview
   - "Get Directions" button linking to navigation

8. **Photo Gallery & 3D Tilt Lightbox**
   - 3D interactive tilt cards that track mouse movement in perspective space with specular light glares
   - Filters: All, Couple, Rituals, Celebration, Decor
   - Fullscreen lightbox with zoom, prev/next arrows, and caption display

9. **Blessings & Wishes Wall**
   - Digital wall of heartfelt prayers from family & friends
   - "Shower Akshantalu / Bless" button with live reaction counter
   - In-page form to post new blessings

10. **Background Carnatic Ambient Player**
    - Zero-dependency Web Audio API synthesizer generating authentic Tanpura drone (Sa-Pa-Sa) and Veena/Flute notes in Raag Mohanam / Kalyani, plus temple bells
    - Floating gold pill with play/pause, volume slider, and mute/unmute

11. **Live Placeholders Customizer**
    - Floating "Edit Details" tool allowing host or guest to replace the bracketed placeholders (`[GROOM NAME]`, `[BRIDE NAME]`, `[DATE]`, `[TIME]`, `[VENUE NAME]`, `[FULL ADDRESS]`, etc.) in real time
    - One-click "Load Sample Royal Data" and "Reset to [PLACEHOLDERS]"

---

## 🛠️ Tech Stack
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom royal Telugu color tokens
- **Animations**: Framer Motion & HTML5 Interactive Canvas
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **Audio**: Web Audio API Sound Synthesizer (Zero external audio CDN dependency)
- **Bundler**: Vite 5

---

## 🚀 Running the Project

```bash
# Navigate to the project directory
cd royal-telugu-wedding

# Start the development server
npm run dev
```
