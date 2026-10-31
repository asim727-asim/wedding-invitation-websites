import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import weddingData from './data/weddingData';
import EnvelopeUnbox from './components/EnvelopeUnbox';
import MusicController from './components/MusicController';
import HeroSection from './components/HeroSection';
import QuranicVerse from './components/QuranicVerse';
import CouplePortrait from './components/CouplePortrait';
import ScratchDateCard from './components/ScratchDateCard';
import CountdownTimer from './components/CountdownTimer';
import InvitationArch from './components/InvitationArch';
import EventsTimeline from './components/EventsTimeline';
import VenueMap from './components/VenueMap';
import RsvpSection from './components/RsvpSection';
import ContactQueries from './components/ContactQueries';
import ClosingFooter from './components/ClosingFooter';

export default function App() {
  const [hasUnboxed, setHasUnboxed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log('Audio autoplay blocked until explicit user gesture:', err);
        });
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleUnboxStart = () => {
    startAudio();
  };

  const handleUnboxComplete = () => {
    setHasUnboxed(true);
    startAudio();
  };

  return (
    <div className="min-h-screen bg-[#F9F0E0] text-[#806b43] selection:bg-[#806b43] selection:text-[#F9F0E0] overflow-x-hidden relative">
      {/* Background Audio Soundtrack */}
      <audio
        ref={audioRef}
        src={weddingData.media.musicUrl}
        loop
        playsInline
        preload="auto"
      />

      {/* Cinematic Golden Envelope Unboxing */}
      <AnimatePresence>
        {!hasUnboxed && (
          <EnvelopeUnbox
            data={weddingData}
            onStart={handleUnboxStart}
            onComplete={handleUnboxComplete}
            videoSrc={weddingData.media.unboxingVideo}
          />
        )}
      </AnimatePresence>

      {/* 3. Main Interactive Invitation Website */}
      {hasUnboxed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-full max-w-[480px] mx-auto relative min-h-screen shadow-2xl bg-[#F9F0E0]"
        >
          {/* Floating Audio Controller */}
          <MusicController isPlaying={isPlaying} togglePlay={togglePlay} />

          {/* Hero Section */}
          <HeroSection data={weddingData} />

          {/* Quranic Verse Calligraphy */}
          <QuranicVerse data={weddingData} />

          {/* Couple Portrait Photo */}
          <CouplePortrait data={weddingData} />

          {/* Interactive Date Scratch Card */}
          <ScratchDateCard data={weddingData} />

          {/* Live Real-time Countdown */}
          <CountdownTimer data={weddingData} />

          {/* Formal Invitation & Family Lineage */}
          <InvitationArch data={weddingData} />

          {/* Wedding Events Timeline */}
          <EventsTimeline data={weddingData} />

          {/* Venue Location & Embedded Map */}
          <VenueMap data={weddingData} />

          {/* RSVP Guest Form */}
          <RsvpSection data={weddingData} />

          {/* Family Contact Queries */}
          <ContactQueries data={weddingData} />

          {/* Closing Blessing & Footer */}
          <ClosingFooter data={weddingData} />
        </motion.div>
      )}
    </div>
  );
}

