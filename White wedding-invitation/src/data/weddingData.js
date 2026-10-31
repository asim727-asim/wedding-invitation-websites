/**
 * Wedding Invitation Data & Configuration
 * Updated with real wedding details for Asim Zahid Ansari & Farheen Ahamed Shaikh.
 * All animations, layouts, components, and styles are strictly preserved.
 */

export const weddingData = {
  // Website Title
  title: "Asim & Farheen — Wedding Invitation",

  // Couple Information (Bilingual: English & Arabic)
  groom: {
    name: "Asim Zahid Ansari",
    arabicName: "عاصم زاہد انصاری",
    prefix: "",
    suffix: "",
    initial: "A",
    guardianText: "Son of",
    parents: "Mr. Zahid Ansari & Mrs. Sadaf Khan"
  },
  bride: {
    name: "Farheen Ahamed Shaikh",
    arabicName: "فرحین احمد شیخ",
    prefix: "",
    suffix: "",
    initial: "F",
    guardianText: "Daughter of",
    parents: "Mr. Ahamed Shaikh & Mrs. Rehana Shaikh"
  },
  swapNames: false,

  // Monogram for Unboxing and Seals
  monogram: "A & F",

  // Dates & Times for Ceremonies
  eventDate: "18 & 19 December",
  eventDayOfWeek: "Friday & Saturday",
  eventDateDay: "18 & 19",
  eventMonthYear: "December",
  auspiciousText: "Nikkah & Walima",

  // Existing countdown target preserved (awaiting user year confirmation)
  countdownTarget: "2026-11-05T19:00:00",
  countdownTitle: "The Countdowns Begins",

  // Scratch to Reveal Date
  scratchCard: {
    title: "The Big Day",
    instruction: "Scratch to Reveal Date",
    dayOfWeek: "18 & 19",
    dateDisplay: "December",
    subtitle: "Nikkah & Walima",
    overlayColor: "#C5A059",
    overlayTextColor: "#F9F0E0"
  },

  // Welcome Messages & Religious Calligraphy
  quranicVerse: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا",
    reference: "Surah Ar-Rum • Verse 21",
    translation: "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy."
  },

  // Invitation Header & Family Lineage
  inviteTitle: "You are cordially invited to celebrate the union of",
  inviteSubtitle: "Together With Our Families",
  inviteBody: `Request The Pleasure of Your Company
With Family & Friends On The Auspicious
Occasion of The Wedding Ceremony
of Their Beloved Children`,

  // Couple Portrait
  couplePhoto: "/images/couple.jpg",

  // Wedding Events Timeline (Nikkah & Walima with Bilingual Venues)
  eventsTitle: "Wedding Events",
  events: [
    {
      id: "nikkah",
      title: "Nikkah",
      date: "18 December",
      time: "After Jumma Namaz",
      venue: "Noor-e-Mohammadi Ahle Sunnat Masjid (Sunni Masjid)",
      venueHindi: "नूर-इ-मोहम्मदी अहले सुन्नत मस्जिद (सुन्नी मस्जिद)",
      address: "20, Bandra Kurla Complex Rd, G Block BKC, Bharat Nagar, Bandra East, Mumbai, Maharashtra 400051",
      mapLink: "https://maps.app.goo.gl/Zo9n4jynEsmJMaC66",
      icon: "mosque",
      message: "The solemnization of holy matrimony"
    },
    {
      id: "walima",
      title: "Walima",
      date: "19 December",
      time: "After Magrib",
      venue: "FLAMINGO BANQUET PARTY HALL",
      venueHindi: "फ्लेमिंगो बैंक्वेट पार्टी हॉल",
      address: "Kohinoor City Mall, Unit G 13, 14, 15, opp. Holy Cross High School, Kurla, W, Maharashtra 400070",
      mapLink: "https://maps.app.goo.gl/fcpXXS1vrSF6NTqQA",
      icon: "feast",
      message: "An evening of celebration, feast and joyful blessings"
    }
  ],

  // Primary Venue & Google Maps (Walima Reception Venue)
  primaryVenue: {
    title: "Walima Reception Venue",
    name: "FLAMINGO BANQUET PARTY HALL",
    nameHindi: "फ्लेमिंगो बैंक्वेट पार्टी हॉल",
    address: "Kohinoor City Mall, Unit G 13, 14, 15, opp. Holy Cross High School, Kurla, W, Maharashtra 400070",
    googleMapLink: "https://maps.app.goo.gl/fcpXXS1vrSF6NTqQA",
    embedMapUrl: "https://maps.google.com/maps?q=Flamingo+Banquet+Hall+Kohinoor+City+Mall+Kurla+West+Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed"
  },

  // RSVP Configuration
  rsvp: {
    title: "RSVP",
    subtitle: "Kindly let us know if you will be joining our joyous celebration.",
    eventsList: ["Nikkah", "Walima"]
  },

  // Contact Queries
  contacts: {
    title: "For queries, please contact:",
    people: [
      { name: "Zahid Ansari", phone: "Groom's Family", tel: "" },
      { name: "Ahamed Shaikh", phone: "Bride's Family", tel: "" }
    ]
  },

  // Closing & Thank You
  closing: {
    message: "JazakAllah Khair — May Allah Bless This Union",
    tagline: "Bound In Pair"
  },

  // Media & Assets
  media: {
    musicUrl: "/audio/rab_ne_milayi.mp3",
    musicTitle: "Rab Ne Milayi Dhadkan",
    unboxingVideo: "/videos/EnvelopeOpeningWithGoldenLight.mp4",
    heroVideo: "/videos/CoupleHeroStyleBackgroundVideo.mp4",
    bismillah: "/images/golden-bismillah.webp",
    divider: "/images/golden-divider.webp",
    whiteRose: "/images/golden-white-rose.webp",
    archFrame: "/images/golden-arch-frame.webp",
    cardBorder: "/images/golden-card-border.webp",
    flowerCorner1: "/images/golden-flower-corner-2.webp",
    flowerCorner2: "/images/golden-flower-corner-3.webp",
    waxSeal: "/images/golden-wax-seal.webp"
  }
};

export default weddingData;
