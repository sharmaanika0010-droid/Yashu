/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, BookOpen, Clock, Music, Gift, Compass, Trophy, Star, MessageSquare } from 'lucide-react';

// Subcomponents imports
import AudioPlayer from './components/AudioPlayer';
import HomeSection from './components/HomeSection';
import TimelineSection from './components/TimelineSection';
import ScrapbookSection from './components/ScrapbookSection';
import GallerySection from './components/GallerySection';
import OurFirsts from './components/OurFirsts';
import LettersSection from './components/LettersSection';
import MemoryMap from './components/MemoryMap';
import InsideJokes from './components/InsideJokes';
import StatsAndHeart from './components/StatsAndHeart';
import QuizAndDream from './components/QuizAndDream';
import SecretSection from './components/SecretSection';
import EndingSection from './components/EndingSection';
import GhibliWorld from './components/GhibliWorld';

// References to generated images
const GHIBLI_MEADOW_IMAGE = "/src/assets/images/ghibli_meadow_1780843052484.png";
const FRIENDS_STARRY_IMAGE = "/src/assets/images/friends_starry_1780843069913.png";

interface Particle {
  id: string;
  x: number;
  y: number;
}

export default function App() {
  const [startedJourney, setStartedJourney] = useState(false);
  const [activeChapter, setActiveChapter] = useState<'welcome' | 'scrap' | 'chronicles' | 'gloria' | 'firsts' | 'letters' | 'map' | 'world' | 'jokes' | 'stats' | 'quiz' | 'vault' | 'oath'>('welcome');

  // Mouse click interactive components (Hearts burst)
  const [clickHearts, setClickHearts] = useState<Particle[]>([]);

  // Special Confetti explosion states
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPool, setConfettiPool] = useState<any[]>([]);

  const triggerConfetti = () => {
    setShowConfetti(true);
    const pool = [...Array(45)].map((_, idx) => ({
      id: `c-${Date.now()}-${idx}`,
      x: Math.random() * 100, // percentage x
      y: -10, // starts above
      color: ['#f472b6', '#d8b4fe', '#fef08a', '#60a5fa', '#34d399'][Math.floor(Math.random() * 5)],
      rot: Math.random() * 360,
      scale: Math.random() * 0.8 + 0.4,
      dur: Math.random() * 2 + 1.5,
      delay: Math.random() * 0.5
    }));
    setConfettiPool(pool);
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  // Add clicking heart burst
  const handleGlobalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newHeart: Particle = {
      id: `heart-${Date.now()}-${Math.random()}`,
      x,
      y
    };

    setClickHearts((prev) => [...prev.slice(-20), newHeart]); // Keep max 20 active particles
  };

  // Filter out expired heart particles
  useEffect(() => {
    const interval = setInterval(() => {
      setClickHearts((prev) => prev.filter((p) => {
        const pTime = parseInt(p.id.split('-')[1]);
        return Date.now() - pTime < 1000; // retain for 1 sec
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative w-full min-h-screen bg-cream-100 flex flex-col justify-between overflow-x-hidden"
      onClick={handleGlobalClick}
      id="main-app-container"
    >
      
      {/* Decorative Top header menu */}
      <header className="sticky top-0 z-50 bg-cream-200/80 backdrop-blur-md border-b border-cream-400 py-3.5 px-6 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-xl">🌸</span>
          <div>
            <h1 className="text-sm font-serif font-black text-gray-800 leading-tight">
              Anika & Yashu
            </h1>
            <span className="text-[9px] uppercase tracking-widest text-[#94a3b8] font-bold block leading-none">
              OUR FOREVER STORY
            </span>
          </div>
        </div>

        {/* Floating background music cassette integration */}
        <div className="flex items-center gap-4">
          <AudioPlayer />
        </div>
      </header>

      {/* RENDER PAGES GREETINGS WRAPPER */}
      <main className="flex-1 w-full relative z-20 flex flex-col justify-center">
        
        <AnimatePresence mode="wait">
          {!startedJourney ? (
            /* STEP 1: INITIAL COMPONENT GREETINGS */
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="w-full flex-1 flex flex-col justify-center items-center"
            >
              <HomeSection 
                friendsStarryImg={FRIENDS_STARRY_IMAGE}
                onStartJourney={() => {
                  setStartedJourney(true);
                  setActiveChapter('scrap');
                }}
              />
            </motion.div>
          ) : (
            /* STEP 2: MOUNTED PORTABLE CHAPTER NOTEBOOK dashboard */
            <motion.div
              key="storybook"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-6xl mx-auto py-8 px-4 flex flex-col lg:flex-row gap-8 items-start"
            >
              {/* SIDE NAVIGATION RIBBON COLUMN: CHAPTER ROSTER BOOKMARKS */}
              <div className="w-full lg:w-[22%] bg-[#fffefe] border-2 border-cream-400 p-5 rounded-3xl shadow-lg sticky top-24 shrink-0 text-left" id="chapters-ribbon-roster">
                <div className="flex items-center gap-1.5 text-xs text-lavender-300 font-black uppercase tracking-wider mb-4 border-b border-cream-200 pb-2">
                  <BookOpen className="w-4 h-4 text-pink-400" />
                  <span>Story Chapters</span>
                </div>

                <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 scrollbar-none font-sans">
                  
                  <button
                    onClick={() => setActiveChapter('scrap')}
                    className={`p-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-left flex items-center gap-2.5 transition-all w-full cursor-pointer shrink-0 ${activeChapter === 'scrap' ? 'bg-cream-200 text-gray-800 font-bold border-l-4 border-pink-300' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    📓 <span>Scrapbook</span>
                  </button>

                  <button
                    onClick={() => setActiveChapter('chronicles')}
                    className={`p-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-left flex items-center gap-2.5 transition-all w-full cursor-pointer shrink-0 ${activeChapter === 'chronicles' ? 'bg-cream-200 text-gray-800 font-bold border-l-4 border-pink-300' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    📅 <span>Chronicles</span>
                  </button>

                  <button
                    onClick={() => setActiveChapter('gloria')}
                    className={`p-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-left flex items-center gap-2.5 transition-all w-full cursor-pointer shrink-0 ${activeChapter === 'gloria' ? 'bg-cream-200 text-gray-800 font-bold border-l-4 border-pink-300' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    📷 <span>Polaroid Wall</span>
                  </button>

                  <button
                    onClick={() => setActiveChapter('firsts')}
                    className={`p-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-left flex items-center gap-2.5 transition-all w-full cursor-pointer shrink-0 ${activeChapter === 'firsts' ? 'bg-cream-200 text-gray-800 font-bold border-l-4 border-pink-300' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    ✨ <span>Our Firsts</span>
                  </button>

                  <button
                    onClick={() => setActiveChapter('letters')}
                    className={`p-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-left flex items-center gap-2.5 transition-all w-full cursor-pointer shrink-0 ${activeChapter === 'letters' ? 'bg-cream-200 text-gray-800 font-bold border-l-4 border-pink-300' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    ✉️ <span>Open When..</span>
                  </button>

                  <button
                    onClick={() => setActiveChapter('map')}
                    className={`p-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-left flex items-center gap-2.5 transition-all w-full cursor-pointer shrink-0 ${activeChapter === 'map' ? 'bg-cream-200 text-gray-800 font-bold border-l-4 border-pink-300' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    🗺️ <span>Memory Map</span>
                  </button>

                  <button
                    onClick={() => setActiveChapter('world')}
                    className={`p-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-left flex items-center gap-2.5 transition-all w-full cursor-pointer shrink-0 ${activeChapter === 'world' ? 'bg-cream-200 text-gray-800 font-bold border-l-4 border-pink-300' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    🌙 <span>Ghibli Sky</span>
                  </button>

                  <button
                    onClick={() => setActiveChapter('jokes')}
                    className={`p-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-left flex items-center gap-2.5 transition-all w-full cursor-pointer shrink-0 ${activeChapter === 'jokes' ? 'bg-cream-200 text-gray-800 font-bold border-l-4 border-pink-300' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    😹 <span>Inside Jokes</span>
                  </button>

                  <button
                    onClick={() => setActiveChapter('stats')}
                    className={`p-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-left flex items-center gap-2.5 transition-all w-full cursor-pointer shrink-0 ${activeChapter === 'stats' ? 'bg-cream-200 text-gray-800 font-bold border-l-4 border-pink-300' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    🌟 <span>Alliance Keys</span>
                  </button>

                  <button
                    onClick={() => setActiveChapter('quiz')}
                    className={`p-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-left flex items-center gap-2.5 transition-all w-full cursor-pointer shrink-0 ${activeChapter === 'quiz' ? 'bg-cream-200 text-gray-800 font-bold border-l-4 border-pink-300' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    🏆 <span>Quiz Test</span>
                  </button>

                  <button
                    onClick={() => setActiveChapter('vault')}
                    className={`p-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-left flex items-center gap-2.5 transition-all w-full cursor-pointer shrink-0 ${activeChapter === 'vault' ? 'bg-cream-200 text-gray-800 font-bold border-l-4 border-pink-300' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                    🔓 <span>Secret Vault</span>
                  </button>

                  <button
                    onClick={() => setActiveChapter('oath')}
                    className={`p-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-left flex items-center gap-2.5 transition-all w-full cursor-pointer shrink-0 ${activeChapter === 'oath' ? 'bg-cream-200 text-gray-800 font-bold border-l-4 border-pink-300 animate-pulse' : 'text-gray-500 hover:text-gray-800 font-bold'}`}
                  >
                    👑 <span>OATH & COVENANT</span>
                  </button>

                </div>

                {/* Floating cute Confetti popping buttons trigger */}
                <div className="mt-8 border-t border-cream-200 pt-4 flex flex-col gap-2">
                  <button
                    onClick={triggerConfetti}
                    className="w-full bg-[#fce7f3] hover:bg-[#fbcfe8] text-[#be185d] py-2.5 rounded-full font-bold uppercase tracking-widest text-[9px] flex items-center justify-center gap-1 cursor-pointer transition-all active:scale-95 shadow-sm"
                    title="Pop celebratory confetti!"
                  >
                    🎉 Pop Sparkles!
                  </button>
                  <span className="text-[8px] text-gray-400 font-mono text-center block">
                    Click any corner for pink hearts!
                  </span>
                </div>
              </div>

              {/* RENDER CORRESPONDING CHAPTER ELEMENT PANEL */}
              <div className="flex-1 w-full bg-[#fffdf9]/90 border-2 border-cream-300 rounded-[2.5rem] p-4 sm:p-8 min-h-[500px] shadow-2xl relative overflow-hidden backdrop-blur-xs" id="active-chapter-screen">
                
                {/* Visual leaf paper binder layout rings on top */}
                <div className="absolute top-0 inset-x-0 h-4 flex justify-around select-none pointer-events-none opacity-45">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1.5 h-6 bg-[#dcd3b8] rounded-full border border-white"></div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChapter}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="pt-6"
                  >
                    {activeChapter === 'scrap' && <ScrapbookSection />}
                    {activeChapter === 'chronicles' && <TimelineSection />}
                    {activeChapter === 'gloria' && <GallerySection friendsStarryImg={FRIENDS_STARRY_IMAGE} ghibliMeadowImg={GHIBLI_MEADOW_IMAGE} />}
                    {activeChapter === 'firsts' && <OurFirsts />}
                    {activeChapter === 'letters' && <LettersSection />}
                    {activeChapter === 'map' && <MemoryMap ghibliMeadowImg={GHIBLI_MEADOW_IMAGE} />}
                    {activeChapter === 'world' && <GhibliWorld ghibliMeadowImg={GHIBLI_MEADOW_IMAGE} />}
                    {activeChapter === 'jokes' && <InsideJokes />}
                    {activeChapter === 'stats' && <StatsAndHeart />}
                    {activeChapter === 'quiz' && <QuizAndDream />}
                    {activeChapter === 'vault' && <SecretSection />}
                    {activeChapter === 'oath' && <EndingSection friendsStarryImg={FRIENDS_STARRY_IMAGE} />}
                  </motion.div>
                </AnimatePresence>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* RENDER CLICKS SPARKLING HEARTS FLOW PARTICLES BODY LAYER */}
      <div className="fixed inset-0 pointer-events-none z-[99]" id="particles-overlay">
        <AnimatePresence>
          {clickHearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ scale: 0.2, opacity: 1, x: heart.x - 12, y: heart.y - 12 }}
              animate={{ scale: 2.2, opacity: 0, y: heart.y - 120, rotate: Math.random() * 60 - 30 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="absolute text-xl pointer-events-none select-none text-pink-400 drop-shadow"
            >
              ❤️
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Dynamic Flying Confetti bits */}
        <AnimatePresence>
          {showConfetti && confettiPool.map((p) => (
            <motion.div
              key={p.id}
              initial={{ x: `${p.x}vw`, y: '-50px', rotate: 0 }}
              animate={{ 
                y: '110vh', 
                x: `${p.x + (Math.random() * 30 - 15)}vw`, 
                rotate: p.rot + 720 
              }}
              transition={{ duration: p.dur, delay: p.delay, ease: 'linear' }}
              className="absolute w-2 h-4 rounded"
              style={{ 
                backgroundColor: p.color,
                scale: p.scale,
                transformOrigin: 'center'
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* FOOTER SECTION SIGN OFF */}
      <footer className="py-6 px-4 bg-cream-200 border-t border-cream-400/60 font-mono text-[10px] text-gray-400 text-center relative z-10 flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto w-full gap-2 mt-4">
        <span>OUR FOREVER STORY • CELEBRATING BEST FRIEND'S DAY 2026</span>
        <span className="flex items-center gap-1 font-bold text-gray-500 uppercase tracking-widest">
          No copy rights reserved • Crafted especially for Yashasvi with <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400 animate-pulse inline" />
        </span>
      </footer>

    </div>
  );
}

