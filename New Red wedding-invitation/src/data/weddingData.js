/**
 * Central Configuration for the Wedding Invitation
 * Asim Zahid Ansari & Farheen Ahamed Shaikh
 */

export const weddingData = {
  // Title & Initials
  title: "Asim & Farheen — Wedding Invitation",
  initials: "A & F",

  // Couple Information
  groom: {
    fullName: "Asim Zahid Ansari",
    arabicName: "عاصم زاہد انصاری",
    firstName: "Asim",
    fatherName: "Zahid Ansari",
    motherName: "Sadaf Khan",
    title: "Groom"
  },
  bride: {
    fullName: "Farheen Ahamed Shaikh",
    arabicName: "فرحین احمد شیخ",
    firstName: "Farheen",
    fatherName: "Ahamed Shaikh",
    motherName: "Rehana Shaikh",
    title: "Bride"
  },

  // Main Event Dates
  event: {
    title: "NIKKAH & WALIMA",
    badgeText: "WEDDING CEREMONY",
    dateFormatted: "18 December & 19 December",
    nikkahDate: "18 December",
    nikkahTime: "After Jumma Namaz",
    walimaDate: "19 December",
    walimaTime: "After Magrib",
    // Preserving the existing configured year (2026) for the countdown
    targetCountdownDate: "2026-12-18T14:00:00",
  },

  // Nikkah Ceremony Details
  nikkah: {
    ceremony: "Nikkah",
    date: "18 December",
    time: "After Jumma Namaz",
    venueEnglish: "Noor-e-Mohammadi Ahle Sunnat Masjid (Sunni Masjid)",
    venueHindi: "नूर-इ-मोहम्मदी अहले सुन्नत मस्जिद (सुन्नी मस्जिद)",
    address: "20, Bandra Kurla Complex Rd, G Block BKC, Bharat Nagar, Bandra East, Mumbai, Maharashtra 400051",
    googleMapsUrl: "https://maps.app.goo.gl/Zo9n4jynEsmJMaC66",
    buttonText: "Directions →"
  },

  // Walima Ceremony Details
  walima: {
    ceremony: "Walima",
    date: "19 December",
    time: "After Magrib",
    venueEnglish: "FLAMINGO BANQUET PARTY HALL",
    venueHindi: "फ्लेमिंगो बैंक्वेट पार्टी हॉल",
    address: "Kohinoor City Mall, Unit G 13, 14, 15, opp. Holy Cross High School, Kurla, W, Maharashtra 400070",
    googleMapsUrl: "https://maps.app.goo.gl/fcpXXS1vrSF6NTqQA",
    buttonText: "Directions →"
  },

  // Family Information
  family: {
    sectionHeading: "Together With Our Families",
    groomParents: {
      father: "Zahid Ansari",
      mother: "Sadaf Khan"
    },
    brideParents: {
      father: "Ahamed Shaikh",
      mother: "Rehana Shaikh"
    },
    greeting: "Cordially invite you and your family to grace the occasion with your presence and blessings."
  },

  // Quranic Ayat & Religious Blessings
  quranVerse: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً",
    translation: `"And among His signs is that He created for you spouses from among yourselves, that you may find tranquility in them; and He placed between you affection and mercy."`,
    reference: "— Surah Ar-Rum (30:21)"
  },

  // Messages & Quotations
  messages: {
    welcomeIntro: "With the blessings of our families, we joyfully invite you to celebrate the beginning of our forever.",
    welcomePresence: "Your presence and blessing will make this occasion even more special.",
    loveQuote: "With hearts full of joy and gratitude, we invite you to join us as we begin this beautiful journey of marriage together. Your presence will make our celebration even more special.",
    thankYouHeader: "With Heartfelt Gratitude",
    thankYouSub: "Asim & Farheen & Their Families"
  },

  // Media & Assets
  media: {
    heroBg: "images/hero.webp",
    ceremonyBg: "images/new.webp",
    bismillah: "images/bismi.png",
    namesTypography: "images/First Page Names Font.png",
    couplePhoto: "./images/image.png",
    cover: "/images/cover.png",
    favicon: "/images/fav.png",
    audioSrc: "media/audio.mp3"
  },

  // Footer & Credits
  credits: {
    text: "DEVELOPED BY AWESOME CREATION",
    link: "https://instagram.com/awesome__creation"
  }
};
