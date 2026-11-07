/**
 * Central Configuration for Wedding Invitation Website
 * Edit this file to easily customize all wedding details, names, dates, venues, links, and media.
 */

export const weddingData = {
  // Couple Information
  couple: {
    initials: "A & F",
    title: "Asim & Farheen — Wedding Invitation",
    groom: {
      name: "Asim Ansari",
      title: "THE GROOM",
      relation: "Son of",
      fatherName: "MR. Zahid Ansari",
      motherName: "MRS. Sadaf Ansari"
    },
    bride: {
      name: "Farheen Shaikh",
      title: "THE BRIDE",
      relation: "Daughter of",
      fatherName: "MR. Ahamed Shabbir Shaikh",
      motherName: "MRS. Rehana Shaikh"
    }
  },

  // Hero / Welcome Curtain Section
  hero: {
    videoSrc: "/media/curtain-video1.mp4",
    openPromptText: "Open Invitation",
    emblemImage: "/assets/Ornate Golden Weds Emblem.png",
    ringImage: "/assets/ring1-Zb6HDysx.png",
    scrollDownText: "Scroll Down"
  },

  // Audio / Music Settings
  music: {
    src: "/media/musi.mp3",
    loop: true,
    initialVolume: 0.5
  },

  // Islamic Header / Details Section
  details: {
    bismillahArabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
    bismillahEnglish: "In the name of Allah,\nthe Most Gracious, the Most Merciful",
    invitationNote: "Together with our families, we joyfully invite you to join us for the Walima celebration and bless the beautiful beginning of our journey together.",
    roseWatermark: "/assets/ros-ph1UdIgP.png",
    bowOrnament: "/assets/pinkbow-4m7XbsBA.png"
  },

  // Scratch & Countdown Section
  scratchSection: {
    backgroundVideo: "/media/weds1.mp4",
    headerTitle: "Save The Date",
    revealButtonText: "Reveal Date",
    discoverSubtitle: "SCRATCH TO DISCOVER THE DATES",
    cards: [
      { id: "day", title: "19th" },
      { id: "month", title: "December" },
      { id: "year", title: "2026" }
    ],
    // Countdown Target: Walima on 19 December 2026
    countdownTarget: "December 19, 2026 18:00:00",
    countdownDisplayDate: "19 . 12 . 2026",
    eventsSummary: [
      {
        title: "WALIMA",
        date: "19 December 2026",
        time: "After Magrib"
      }
    ]
  },

  // Wedding Events & Venues
  events: [
    {
      id: "nikkah",
      badgeTitle: "Nikkah Khwani",
      badgeIcon: "star",
      image: "/assets/masjid-CpSqpTFh.png",
      imageAlt: "DARUL ULOOM MEHBOOB-E-SUBHANI",
      date: "Friday, 18 December 2026",
      time: "⏰ After Jumma Namaz at",
      venueName: "DARUL ULOOM MEHBOOB-E-SUBHANI",
      venueNameHindi: "",
      venueAddress: "Kurla West, Mumbai, Maharashtra 400070",
      mapUrl: "https://maps.app.goo.gl/4RoYkLak9gVcgpF96",
      buttonStyle: "primary"
    },
    {
      id: "walima",
      badgeTitle: "Dawat-e-Walima",
      badgeIcon: "crown",
      image: "/assets/ven-C7X61fLg.png",
      imageAlt: "FLAMINGO BANQUET PARTY HALL",
      date: "Saturday, 19 December 2026",
      time: "⏰ After Magrib at",
      venueName: "FLAMINGO BANQUET PARTY HALL",
      venueNameHindi: "फ्लेमिंगो बैंक्वेट पार्टी हॉल",
      venueAddress: "Kohinoor City Mall, Unit G 13, 14, 15, opp. Holy Cross High School,\nKurla, W, Maharashtra 400070",
      mapUrl: "https://maps.app.goo.gl/fcpXXS1vrSF6NTqQA",
      buttonStyle: "primary"
    }
  ],

  // Background Pattern for lower sections
  lowerSectionBg: "/assets/bg-CjJQzhxh2.png",

  // RSVP Section
  rsvp: {
    title: "Will You Join Our Big Day?",
    subtitle: "Join us as we step into our forever",
    yesButtonText: "I’ll Be There ❤️",
    noButtonText: "Will Miss It 😔",
    yesMessage: "Yay! Can't wait to celebrate with you 🎉",
    noMessage: "We’ll miss you... but you’ll be in our hearts ❤️"
  },

  // Family Section
  compliments: {
    title: "Together With Our Families And Friends",
    symbol: "❧",
    members: [
      {
        name: "MR. Zahid Ansari & MRS. Sadaf Ansari",
        role: "Groom's Parents"
      }
    ],
    footerTag: "✦ Near & Dear ✦"
  },

  // Thank You Section
  thankYou: {
    image: "/assets/tq-DoE2cUgm.png",
    imageAlt: "Thank You",
    mainText: "Thank You",
    subText: "For your blessings & love",
    developedBy: "Developed By Asim Ansari"
  },
};
