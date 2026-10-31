# Royal Wedding Ceremony Invitation Website

A luxury, interactive, and responsive wedding invitation web application reverse-engineered and redesigned from [shahnaima-wedding.vercel.app](https://shahnaima-wedding.vercel.app/?v=2), built with **React**, **Vite**, **Tailwind CSS**, and modern web animation technologies.

---

## 🌟 Key Features

1. **Royal Welcome Gate & Envelope Opening**:
   - Initial invitation seal screen with "Open Invitation" prompt.
   - Smooth entrance transition unlocking ambient wedding audio.

2. **Persistent Floating Music Controller**:
   - Resilient audio player with auto-play handling.
   - Elegant burgundy & gold badge at the bottom right.
   - Interactive play/pause toggle with rotating pulse animation and muted state indicator.

3. **Page 1: Hero & Bismillah Introduction**:
   - Traditional Bismillah Arabic calligraphy header.
   - Gold-bordered "WEDDING CEREMONY" badge.
   - Warm family blessings and calligraphic couple typography.
   - Procedural falling burgundy rose petal physics engine.

4. **Page 2: Date & Hall Announcement**:
   - Geometric oriental ornament divider with ruby and gold motifs.
   - Formatted wedding date (`Friday, 21 August 2026`).
   - Calligraphic time display (`6:00 PM` in Pinyon Script).
   - Venue title and location (`Moryna Wedding Hall, Tripoli, Libya`).

5. **Page 3: Interactive Parallax Glass Cards**:
   - **Live Countdown Timer**: Days, hours, minutes, and seconds remaining until the ceremony.
   - **Interactive Scratch-to-Reveal Date Card**: Guests can scratch off a shimmering gold layer with mouse or touch gestures; reaching threshold triggers a celebration burst of confetti!
   - **Love & Blessing Card**: Ornate quotation ornament and heartfelt welcome prose.
   - **Our Story & Sacred Scripture**: Arched couple portrait frame with floating ruby badge, featuring Surah Ar-Rum (30:21) in Arabic script (`Amiri` font) and English translation.
   - **Family Introduction**: Introducing the bride and groom's parents and families.
   - **Wedding Events Timeline**: Schedule for the ceremony, banquet dinner, and festivities.
   - **Venue & Google Maps**: Embedded interactive Google Map iframe with a direct one-tap "Directions →" navigation button.
   - **Interactive Sealed Letter**: Wax-sealed interactive envelope that unfolds to reveal a personal letter from the couple.
   - **Gratitude & Developer Tribute**: Thank-you message and attribution button.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or later recommended)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to experience the website.

### 3. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ How to Customize

All wedding details are completely decoupled from component code and centralized in:
`src/data/weddingData.js`

### 1. Change Couple & Family Names
Edit `groom`, `bride`, and `family` in `src/data/weddingData.js`:
```javascript
groom: {
  fullName: "Shah Newaz",
  firstName: "Shah",
  title: "Groom"
},
bride: {
  fullName: "Jannatul Naima",
  firstName: "Naima",
  title: "Bride"
}
```

### 2. Change Wedding Date, Time & Countdown
Update `event` in `src/data/weddingData.js`:
```javascript
event: {
  title: "WEDDING CEREMONY",
  dateFormatted: "Friday, 21 August 2026",
  timeFormatted: "6:00 PM",
  targetCountdownDate: "2026-08-21T18:00:00" // ISO format for countdown
}
```

### 3. Change Venue & Google Maps Links
Update `venue` in `src/data/weddingData.js`:
```javascript
venue: {
  name: "Moryna Wedding Hall",
  addressLine1: "Al Saba St, Ain zara Tripoli",
  addressLine2: "Libya",
  embedMapUrl: "https://maps.google.com/maps?q=YOUR_VENUE_QUERY&output=embed",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=YOUR_VENUE_QUERY"
}
```

### 4. Replace Photographs & Artwork
All images and media reside in the `public/` directory:
- `public/images/hero.webp`: Hero and sticky parallax background.
- `public/images/new.webp`: Page 2 ceremony background.
- `public/images/bismi.png`: Arabic Bismillah calligraphy header.
- `public/images/First Page Names Font.png`: Couple names calligraphy graphic.
- `public/images/image.png`: Arched portrait photo for Our Story.
- `public/images/fav.png`: Browser tab favicon.
- `public/media/audio.mp3`: Background instrumental music track.

Simply replace the files in `public/` or update their file paths in `src/data/weddingData.js`.

---

## 📁 Project Architecture

```
wedding-invitation/
│
├── public/
│   ├── images/
│   │   ├── bismi.png
│   │   ├── cover.png
│   │   ├── fav.png
│   │   ├── First Page Names Font.png
│   │   ├── hero.webp
│   │   ├── image.png
│   │   └── new.webp
│   └── media/
│       └── audio.mp3
│
├── src/
│   ├── components/
│   │   ├── WelcomeScreen.jsx     # Royal envelope gate & entry transition
│   │   ├── MusicButton.jsx       # Floating audio toggle & autoplay engine
│   │   ├── FallingLeaves.jsx     # Procedural falling rose petal physics
│   │   ├── HeroPage.jsx          # Page 1 Hero & Bismillah
│   │   ├── CeremonyPage.jsx      # Page 2 Date, time & hall announcement
│   │   ├── CountdownSection.jsx  # Live countdown timer
│   │   ├── ScratchDate.jsx       # Canvas scratch card with confetti burst
│   │   ├── LoveMessageSection.jsx# Quote card with gold gradient ornament
│   │   ├── OurStorySection.jsx   # Arched portrait frame + Surah Ar-Rum
│   │   ├── FamilySection.jsx     # Groom & Bride family introduction
│   │   ├── EventsSection.jsx     # Events timeline & schedule
│   │   ├── VenueSection.jsx      # Google Maps embed & directions link
│   │   ├── EnvelopeModal.jsx     # Interactive unfolding wax seal letter
│   │   ├── ThankYouSection.jsx   # Heartfelt gratitude & credits
│   │   └── RevealSection.jsx     # Scroll reveal glassmorphism container
│   │
│   ├── data/
│   │   └── weddingData.js        # Centralized wedding configuration
│   │
│   ├── styles/
│   │   ├── animations.css        # Keyframe animations & motion curves
│   │   └── index.css             # Tailwind base & theme styling
│   │
│   ├── App.jsx                   # Main layout & component coordinator
│   └── main.jsx                  # React application entry point
│
├── index.html                    # HTML document with Google Fonts & Meta tags
├── tailwind.config.js            # Tailwind typography, theme & colors
├── vite.config.js                # Vite build configuration
└── package.json                  # Dependencies & build scripts
```

---

## 📱 Mobile Responsiveness

The website is engineered mobile-first and tested for:
- Android smartphones (Chrome, Samsung Internet)
- iPhones & iPads (Safari iOS)
- Tablets & Laptops
- Ultra-wide 4K desktop screens

Touch interactions include:
- Non-interfering scratch card with `touch-action: none` (prevents screen jerk while scratching).
- Safe area insets for notched displays (`viewport-fit=cover`).
- Dynamic viewport sizing (`min-h-screen`, `clamp()`).

