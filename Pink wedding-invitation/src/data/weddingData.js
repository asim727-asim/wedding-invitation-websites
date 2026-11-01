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
      fatherName: "Zahid Ansari",
      motherName: "Sadaf Ansari"
    },
    bride: {
      name: "Farheen Shaikh",
      title: "THE BRIDE",
      relation: "Daughter of",
      fatherName: "Ahamed Shabbir Shaikh",
      motherName: "Rehana Shaikh"
    }
  },

  // Hero / Welcome Curtain Section
  hero: {
    videoSrc: "/media/curtain-video1.mp4",
    openPromptText: "Open Invitation",
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
    invitationNote: "With the blessings of Almighty Allah,\njoin us for nikkah and walima reception of",
    roseWatermark: "/assets/ros-ph1UdIgP.png",
    bowOrnament: "/assets/pinkbow-4m7XbsBA.png"
  },

  // Scratch & Countdown Section
  scratchSection: {
    backgroundVideo: "/media/weds1.mp4",
    headerTitle: "Save The Date",
    revealButtonText: "Reveal Date",
    discoverSubtitle: "SCRATCH TO DISCOVER THE DATE",
    cards: [
      { id: "day", title: "18th" },
      { id: "month", title: "December" },
      { id: "year", title: "2026" }
    ],
    // Countdown Target: Preserves existing configured year 2026 (Nikkah on 18 December)
    countdownTarget: "December 18, 2026 13:30:00",
    countdownDisplayDate: "18 . 12 . 2026"
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
      time: "(8th Rajab ul Murajjab 1448 Hijri)\n⏰ After Jumma Namaz at",
      venueName: "DARUL ULOOM MEHBOOB-E-SUBHANI",
      venueNameHindi: "",
      venueAddress: "Kurla West, Mumbai, Maharashtra 400070",
      mapUrl: "https://maps.app.goo.gl/Cfn1cW3VWcUXx5yR8",
      buttonStyle: "primary"
    },
    {
      id: "walima",
      badgeTitle: "Walima Ceremony",
      badgeIcon: "crown",
      image: "/assets/ven-C7X61fLg.png",
      imageAlt: "FLAMINGO BANQUET PARTY HALL",
      date: "Saturday, 19 December",
      time: "⏰ After Magrib at",
      venueName: "FLAMINGO BANQUET PARTY HALL",
      venueNameHindi: "फ्लेमिंगो बैंक्वेट पार्टी हॉल",
      venueAddress: "Kohinoor City Mall, Unit G 13, 14, 15, opp. Holy Cross High School,\nKurla, W, Maharashtra 400070",
      mapUrl: "https://maps.app.goo.gl/fcpXXS1vrSF6NTqQA",
      buttonStyle: "cream"
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
    title: "Together With Our Families",
    symbol: "❧",
    members: [
      {
        name: "Zahid Ansari & Sadaf Ansari",
        role: "Groom's Parents"
      },
      {
        name: "Ahamed Shabbir Shaikh & Rehana Shaikh",
        role: "Bride's Parents"
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

  // Footer & Brand Credit
  footer: {
    designerHandle: "@awesome__creation",
    designerUrl: "https://www.instagram.com/awesome__creation/",
    tagline: "CONNECT FOR YOUR DIGITAL INVITATION"
  }
};
