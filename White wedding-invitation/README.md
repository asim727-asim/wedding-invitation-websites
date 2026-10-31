# Arsalaan Sayed & Alfiya Shaikh — Royal Wedding Invitation Website

A luxury, interactive, and responsive wedding invitation web application engineered with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Faithfully reverse-engineered and enhanced from the Graphikly reference (`eternal-duas-couple` template with `golden-light-envelope` cinematic unboxing experience).

---

## 🌟 Key Features

1. **Brand Preloader Screen**:
   - Dynamic 0% to 100% progress animation with Graphikly branding emblem.
2. **Cinematic Golden Light Envelope Unboxing (`golden-light-envelope`)**:
   - High-definition video unboxing animation (`EnvelopeOpeningWithGoldenLight.mp4`).
   - Embossed gold monogram initials (**`A & A`**) with 3D drop shadows.
   - Pulsing *"Tap to open"* prompt with bouncing chevron indicator.
   - One-tap skip control for quick access.
   - Expanding monogram transition and automatic audio unmuting on opening.
3. **Floating Music Controller**:
   - Persistent circular glassmorphism toggle in the top-right corner.
   - Seamless loop playback of the authentic soundtrack *"Rab Ne Milayi Dhadkan"*.
   - Dynamic Lucide volume icons (`Volume2` / `VolumeX`) with animated active pulse wave.
4. **Hero Section (`9/16` Aspect Ratio)**:
   - Fluid background video (`CoupleHeroStyleBackgroundVideo.mp4`).
   - Elegant typography with *Cookie* cursive couple names and *Cinzel* formal titles.
   - Bottom-anchored swaying golden rose bouquets (`golden-flower-corner-3.webp`).
5. **Quranic Blessing (Surah Ar-Rum: 21)**:
   - Arabic calligraphy in *Amiri* font: *وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا*.
   - Golden divider ornament and English translation of affection and mercy.
6. **Couple Portrait**:
   - Framed portrait of the couple with smooth entry animations and hover zoom.
7. **Interactive Scratch-to-Reveal Card ("The Big Day")**:
   - HTML5 Canvas with metallic gold foil gradient (`#D4AF37` / `#FFEFA6` / `#AA7C11`).
   - Sweeping dynamic metallic shine animation (`sweepShine`).
   - Touch and mouse scratching with `touch-action: none` to prevent scroll interference.
   - Automatic threshold reveal (reveals date once 40% scratched) accompanied by celebratory confetti burst.
   - Reveals: *Thursday, 05 November 2026 • Subha Muhurtham*.
8. **Live Countdown Timer**:
   - Real-time countdown tracking Days, Hours, Minutes, and Seconds until November 5, 2026, 07:00 PM.
9. **The Royal Islamic Arch (`golden-arch-frame.webp`)**:
   - Golden Bismillah calligraphy (`golden-bismillah.webp`).
   - Complete family lineage and blessings:
     - Late Bahauddin Yasin Sayed & Late Khwajabi Bahauddin Sayed
     - Ab. Rahim Bahauddin Sayed
   - Groom: **Arsalaan Sayed**, Son of Mr. Ashfaque Sayed & Mrs. Rubina Sayed
   - Bride: **Alfiya Shaikh**, Daughter of Mr. Aslam Shaikh & Mrs. Sanno Shaikh
   - Flanked by swaying golden roses.
10. **Wedding Events Timeline**:
    - Animated vertical scroll timeline with milestone diamond nodes:
      - **Nikah**: Wednesday, 04 Nov 2026 at 10:00 AM — *Anjuman Noore-Mohammadi Masjid, B.K.C.*
      - **Dawat-e-Walima**: Thursday, 05 Nov 2026 at 07:00 PM — *Haqqani Marriage Ground, Kurla West, Mumbai*.
11. **Reception Venue & Embedded Google Map**:
    - Venue card framed with ornamental top and bottom gold borders (`golden-card-border.webp`).
    - Interactive Google Maps embed and direct *"View Map"* navigation CTA.
12. **Interactive RSVP Form**:
    - Guest name, telephone, optional email, adults count, children count.
    - Multi-select event attendance or regretful decline.
    - Animated heart confirmation state upon submission.
13. **Family Contact Queries**:
    - Direct click-to-call buttons for Ashfaque Sayed (`9821674786`) and Arfat Sayed (`9653283963`).
14. **Closing Benediction & Footer**:
    - *"JazakAllah Khair — May Allah Bless This Union"*.
    - Couple signature: *"Bound In Pair • 2026"*.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
The compiled, highly optimized production assets will be generated in `dist/`.

---

## 🎨 How to Customize Wedding Information

All wedding details are cleanly decoupled from the presentation components. You only need to edit **`src/data/weddingData.js`**:

```javascript
// src/data/weddingData.js

export const weddingData = {
  // 1. Change Couple Information
  groom: {
    name: "Arsalaan Sayed",
    guardianText: "Son of",
    parents: "Mr. Ashfaque Sayed & Mrs. Rubina Sayed"
  },
  bride: {
    name: "Alfiya Shaikh",
    guardianText: "Daughter of",
    parents: "Mr. Aslam Shaikh & Mrs. Sanno Shaikh"
  },

  // 2. Change Dates & Countdown
  eventDate: "2026-11-05",
  eventTime: "07:00 PM",
  eventDayOfWeek: "Thursday",
  eventDateDay: "05",
  eventMonthYear: "November 2026",
  countdownTarget: "2026-11-05T19:00:00",

  // 3. Customize Events
  events: [
    {
      id: "nikah",
      title: "Nikah",
      date: "Wednesday, 04 Nov 2026",
      time: "10:00 AM",
      venue: "Anjuman Noore-Mohammadi Masjid, B.K.C.",
      icon: "mosque"
    },
    {
      id: "walima",
      title: "Dawat-e-Walima",
      date: "Thursday, 05 Nov 2026",
      time: "07:00 PM",
      venue: "Haqqani Marriage Ground, Kurla West, Mumbai",
      icon: "feast"
    }
  ],

  // 4. Update Venue & Google Maps
  primaryVenue: {
    name: "Haqqani Marriage Ground",
    address: "Kurla West, Mumbai - 400 070",
    googleMapLink: "https://maps.app.goo.gl/jBFBrDVAquGSHtqe6?g_st=ic"
  },

  // 5. Replace Media Files (in public/ folder)
  media: {
    musicUrl: "/audio/rab_ne_milayi.mp3",
    couplePhoto: "/images/couple.jpg"
  }
};
```

### Replacing Photographs & Music:
- **Couple Photo**: Place your photo in `public/images/couple.jpg` (or update `weddingData.couplePhoto`).
- **Soundtrack**: Place your `.mp3` audio in `public/audio/` and update `weddingData.media.musicUrl`.
- **Background Videos**: Stored in `public/videos/`.

---

## 📁 Project Architecture

```
wedding-invitation/
├── public/
│   ├── audio/
│   │   └── rab_ne_milayi.mp3
│   ├── images/
│   │   ├── couple.jpg
│   │   ├── golden-arch-frame.webp
│   │   ├── golden-bismillah.webp
│   │   ├── golden-card-border.webp
│   │   ├── golden-divider.webp
│   │   ├── golden-flower-corner-2.webp
│   │   ├── golden-flower-corner-3.webp
│   │   ├── golden-wax-seal.webp
│   │   └── golden-white-rose.webp
│   ├── videos/
│   │   ├── CoupleHeroStyleBackgroundVideo.mp4
│   │   ├── EnvelopeOpeningWithGoldenLight.mp4
│   │   └── HeroStyleBackgroundVideo.mp4
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── ClosingFooter.jsx
│   │   ├── ContactQueries.jsx
│   │   ├── CountdownTimer.jsx
│   │   ├── CouplePortrait.jsx
│   │   ├── EnvelopeUnbox.jsx
│   │   ├── EventsTimeline.jsx
│   │   ├── HeroSection.jsx
│   │   ├── InvitationArch.jsx
│   │   ├── MusicController.jsx
│   │   ├── QuranicVerse.jsx
│   │   ├── RsvpSection.jsx
│   │   ├── ScratchDateCard.jsx
│   │   ├── VenueMap.jsx
│   │   └── WelcomePreloader.jsx
│   ├── data/
│   │   └── weddingData.js
│   ├── styles/
│   │   └── animations.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🛡️ License
Created with pride for personal wedding celebrations.

