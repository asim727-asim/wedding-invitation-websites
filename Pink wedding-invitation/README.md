# Premium Wedding Invitation Website

A luxury, interactive, mobile-first wedding invitation website built with **React**, **Vite**, **HTML5 Canvas**, and **CSS3 animations**. Inspired and reverse-engineered from the authentic wedding invitation for **Sufyan Khan & Syeda Fatema Biyabani**.

---

## ✨ Features

- **Cinematic Opening Screen**: Full-screen curtain reveal video background with interactive frosted play button and glowing pulse effects.
- **Background Music with Autoplay Fallback**: Floating music toggle button with audio waveform pulse animations and automatic fallback gesture listeners for strict mobile browsers.
- **Couple Introduction**: Elegant cursive typography (`Great Vibes` / `Alex Brush`), Islamic Bismillah calligraphy (`Amiri`), and royal groom & bride presentation cards with soft pink borders.
- **Interactive Heart Scratch-to-Reveal Cards**:
  - Real-time HTML5 2D Canvas with pastel gradient and 450 glitter sparkle flecks.
  - Interactive scratching with touch and mouse support.
  - Automatic mini-confetti burst from the card's exact center upon reveal.
  - **"Reveal Date"** shortcut button with continuous shimmer animation.
- **Live Wedding Countdown**:
  - Automatically scrolls into view when all scratch cards are completed.
  - Displays remaining Days, Hours, Minutes, and Seconds with real-time updates.
- **Wedding Events & Venues**:
  - **Nikah Ceremony** card with custom Masjid illustration, timing, and direct Google Maps navigation button.
  - **Walima Reception** card with custom Royal Celebrations ballroom illustration, timing, and direct Google Maps navigation button.
- **Interactive RSVP**:
  - **"I'll Be There ❤️"**: Triggers celebration bounce animation and confetti explosion.
  - **"Will Miss It 😔"**: Triggers gentle shake animation and heartfelt warm message.
- **Family Compliments**: Classic ornamental divider `❧` and family dedication list.
- **Thank You Card**: Angled greeting card presentation with blessings message.
- **Global Micro-Interactions**: Ambient floating hearts that spawn and float up on mouse cursor movement and finger touch.
- **Centralized Configuration**: All wedding details, dates, venues, links, and media files are neatly isolated in `src/data/weddingData.js`.

---

## 🚀 Quick Start

### 1. Installation
Install all required project dependencies:
```bash
npm install
```

### 2. Development Mode
Run the local Vite development server with instant Hot Module Replacement (HMR):
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 3. Production Build
Create an optimized production bundle:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 🎨 Customization Guide

All wedding content is cleanly separated from component code in:
```
src/data/weddingData.js
```

### 1. Changing Couple Names & Family Details
Open `src/data/weddingData.js` and edit the `couple` object:
```javascript
couple: {
  groom: {
    name: "Sufyan Khan",
    title: "THE GROOM",
    relation: "Son of",
    fatherName: "Iftequar Ahmed Khan",
    motherName: ""
  },
  bride: {
    name: "Syeda Fatema Biyabani",
    title: "THE BRIDE",
    relation: "Daughter of",
    fatherName: "Syed Askaruddin Biyabani (Late)",
    motherName: ""
  }
}
```

### 2. Changing Wedding Dates & Live Countdown
Edit the `scratchSection` in `src/data/weddingData.js`:
```javascript
scratchSection: {
  headerTitle: "Save The Date",
  revealButtonText: "Reveal Date",
  cards: [
    { id: "day", title: "17th" },
    { id: "month", title: "September" },
    { id: "year", title: "2026" }
  ],
  countdownTarget: "September 17, 2026 18:00:00",
  countdownDisplayDate: "17 . 09 . 2026"
}
```

### 3. Updating Wedding Events & Venues
Edit the `events` array in `src/data/weddingData.js`:
```javascript
events: [
  {
    id: "nikah",
    badgeTitle: "Nikah Ceremony",
    date: "Thursday, 17th September 2026",
    time: "⏰ 6:00 PM at",
    venueName: "📍 Jama Masjid",
    venueAddress: "Buddi lane, Naralibag,\nAurangabad, Maharashtra 431001",
    mapUrl: "https://maps.google.com/...",
    image: "/assets/masjid-CpSqpTFh.png"
  },
  {
    id: "walima",
    badgeTitle: "Walima Reception",
    date: "Saturday, 19th September 2026",
    time: "⏰ 7:00 PM Onwards at",
    venueName: "📍 Royal Celebrations",
    venueAddress: "Daulatabad Road, Aurangabad",
    mapUrl: "https://maps.google.com/...",
    image: "/assets/ven-C7X61fLg.png"
  }
]
```

### 4. Replacing Photographs, Backgrounds & Videos
All static assets reside inside the `public/` directory:
- **Curtain Opening Video**: `public/media/curtain-video1.mp4`
- **Scratch Section Video**: `public/media/weds2.mp4`
- **Background Music Track**: `public/media/musi.mp3`
- **Rings Image**: `public/assets/ring1-Zb6HDysx.png`
- **Rose Watermark**: `public/assets/ros-ph1UdIgP.png`
- **Pink Bow Artwork**: `public/assets/pinkbow-4m7XbsBA.png`
- **Thank You Card**: `public/assets/tq-DoE2cUgm.png`
- **Lower Section Background**: `public/assets/bg-CjJQzhxh.jpg`

To replace any asset, simply swap the file in `public/` or update its file path in `src/data/weddingData.js`.

---

## 📁 Project Architecture

```
wedding-invitation/
├── public/
│   ├── assets/                # High-resolution illustrations & artwork
│   │   ├── bg-CjJQzhxh.jpg
│   │   ├── Marquis-QpZuArfP.ttf
│   │   ├── masjid-CpSqpTFh.png
│   │   ├── pinkbow-4m7XbsBA.png
│   │   ├── ring1-Zb6HDysx.png
│   │   ├── ros-ph1UdIgP.png
│   │   ├── tq-DoE2cUgm.png
│   │   └── ven-C7X61fLg.png
│   ├── media/                 # Video loops and audio soundtrack
│   │   ├── curtain-video1.mp4
│   │   ├── musi.mp3
│   │   └── weds2.mp4
│   ├── cov-optimized.jpg      # Open Graph social preview banner
│   └── fav.png                # Wedding favicon
├── src/
│   ├── components/
│   │   ├── ComplimentsSection.jsx
│   │   ├── CountdownTimer.jsx
│   │   ├── DetailsSection.jsx
│   │   ├── EventsSection.jsx
│   │   ├── FloatingHearts.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MusicToggle.jsx
│   │   ├── RSVPSection.jsx
│   │   ├── ScratchCard.jsx
│   │   ├── ScratchSection.jsx
│   │   └── ThankYouSection.jsx
│   ├── data/
│   │   └── weddingData.js     # Single source of truth configuration
│   ├── styles/
│   │   ├── animations.css     # Keyframes and CSS animations
│   │   └── index.css          # Core design tokens and responsive styles
│   ├── App.jsx                # Main orchestration layout
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML template with Google Fonts and SEO tags
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── README.md                  # Documentation and customization guide
```

---

## 📱 Mobile-First & Cross-Browser Responsive Testing

The invitation is optimized for:
- Android Smartphones & Chrome Mobile
- iPhones (iOS Safari)
- iPad / Tablets
- Desktop monitors & Laptops
- Seamless portrait presentation with zero horizontal scroll overflow.

