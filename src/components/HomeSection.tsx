import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Hourglass, Heart, ArrowRight } from 'lucide-react';
import { PERSONAL_STORY_HIGHLIGHTS } from '../data';

interface HomeSectionProps {
  onStartJourney: () => void;
  friendsStarryImg: string;
}

export default function HomeSection({ onStartJourney, friendsStarryImg }: HomeSectionProps) {
  const [timePassed, setTimePassed] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isOpeningDoor, setIsOpeningDoor] = useState(false);

  // Typewriter effect states
  const [introText, setIntroText] = useState("");
  const introMessage = "Welcome Yashasvi, to our little magical corner of the universe. This is a story of laughter, loyalty, absolute chaos, and two souls holding onto each other when everything else changed.";

  useEffect(() => {
    // Typewriter simulation
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < introMessage.length) {
        setIntroText((prev) => prev + introMessage.charAt(currentIdx));
        currentIdx++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const startDate = new Date('2024-01-15T00:00:00');

    const updateTimer = () => {
      const now = new Date();
      const differenceMs = now.getTime() - startDate.getTime();

      const totalSeconds = Math.floor(differenceMs / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      // Simple relative breakdown
      const years = Math.floor(totalDays / 365.25);
      const days = Math.floor(totalDays % 365.25);
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      setTimePassed({ years, days, hours, minutes, seconds });
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  const triggerStart = () => {
    setIsOpeningDoor(true);
    setTimeout(() => {
      onStartJourney();
    }, 1200); // Allow doors slide shut/open first
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden" id="home-welcome">
      
      {/* Decorative Falling Petals and Cloud Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={`petal-${i}`}
            className="absolute rounded-full bg-pink-200/50 blur-[1px]"
            style={{
              width: `${Math.random() * 15 + 8}px`,
              height: `${Math.random() * 10 + 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * -10}%`,
              animation: `petal-fall ${Math.random() * 8 + 8}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Floating Clouds */}
        <div className="absolute top-[12%] -left-[10%] w-[250px] h-[90px] rounded-full bg-cream-200/40 blur-xl animate-float" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-[48%] -right-[15%] w-[320px] h-[110px] rounded-full bg-lavender-100/30 blur-2xl animate-float-delayed" style={{ animationDuration: '16s' }}></div>
        <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[80px] rounded-full bg-pink-100/30 blur-xl animate-float" style={{ animationDuration: '14s' }}></div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-4xl bg-cream-100/80 border-2 border-cream-300 rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10 flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm">
        
        {/* Left Hand: Polaroid and Live Timer */}
        <div className="w-full md:w-[42%] flex flex-col items-center gap-6">
          
          {/* Beautiful Friends Ghibli Polaroid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.8 }}
            className="polaroid-card max-w-[260px] cursor-pointer"
          >
            <div className="w-full aspect-square overflow-hidden bg-cream-300 rounded-lg relative group">
              <img 
                src={friendsStarryImg} 
                alt="Anika and Yashasvi Stargazing" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                id="home-polaroid-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
                <span className="text-white text-xs font-hand tracking-wider flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-pink-300 fill-pink-300" />
                  Stargazing Together
                </span>
              </div>
            </div>
            {/* Polaroid handwritten caption */}
            <div className="mt-4 text-center">
              <p className="font-hand text-2xl text-gray-800 leading-none">Me & Yashu — 2024</p>
              <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase mt-1">Best friends forever • ✨</p>
            </div>
          </motion.div>

          {/* Friendship Countdown Timer in Ghibli Frame */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full bg-cream-200 border-2 border-cream-300 p-4 rounded-2xl flex flex-col items-center text-center shadow-inner"
            id="friendship-live-counter"
          >
            <div className="flex items-center gap-1.5 text-xs text-lavender-300 font-bold uppercase tracking-widest mb-3">
              <Hourglass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '3s' }} />
              <span>We Have Been Best Friends For</span>
            </div>

            <div className="grid grid-cols-5 gap-1 text-center w-full">
              <div className="bg-white p-1.5 rounded-lg border border-cream-400">
                <span className="block text-lg font-bold text-gray-800 font-mono">{timePassed.years}</span>
                <span className="text-[9px] uppercase tracking-wider text-gray-400 font-sans block">Yrs</span>
              </div>
              <div className="bg-white p-1.5 rounded-lg border border-cream-400">
                <span className="block text-lg font-bold text-gray-800 font-mono">{timePassed.days}</span>
                <span className="text-[9px] uppercase tracking-wider text-gray-400 font-sans block">Days</span>
              </div>
              <div className="bg-white p-1.5 rounded-lg border border-cream-400">
                <span className="block text-lg font-bold text-gray-800 font-mono">{timePassed.hours}</span>
                <span className="text-[9px] uppercase tracking-wider text-gray-400 font-sans block font-semibold">Hrs</span>
              </div>
              <div className="bg-white p-1.5 rounded-lg border border-cream-400">
                <span className="block text-lg font-bold text-gray-800 font-mono">{timePassed.minutes}</span>
                <span className="text-[9px] uppercase tracking-wider text-gray-400 font-sans block font-semibold">Min</span>
              </div>
              <div className="bg-white p-1.5 rounded-lg border border-cream-400">
                <span className="block text-lg font-bold text-pink-500 font-mono transition-none">{timePassed.seconds}</span>
                <span className="text-[9px] uppercase tracking-wider text-gray-400 font-sans block font-semibold">Sec</span>
              </div>
            </div>

            <div className="mt-2.5 text-[10px] text-gray-500 italic block font-serif">
              Every second with you is a pure blessing...
            </div>
          </motion.div>

        </div>

        {/* Right Hand: Letter and Title of Website */}
        <div className="flex-1 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <div className="flex items-center gap-2 mb-1.5 justify-center md:justify-start">
              <div className="h-0.5 w-6 bg-pink-300"></div>
              <span className="text-xs font-bold text-pink-400 uppercase tracking-[0.25em]">Our Best Friend's Day Gift</span>
              <div className="h-0.5 w-6 bg-pink-300 md:hidden"></div>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-gray-800 leading-tight text-center md:text-left tracking-tight">
              Our Forever <br />
              <span className="text-lavender-300 italic text-4xl sm:text-6xl font-hand font-normal">Story</span>
            </h1>
            <p className="text-sm font-semibold tracking-widest text-[#94a3b8] mt-1 text-center md:text-left font-mono">
              ANIKA & YASHASVI — 2024 to 2026
            </p>
          </motion.div>

          {/* Typewriter text bubble */}
          <div className="bg-white border border-cream-300 p-5 rounded-2xl relative shadow-md mb-6 min-h-[110px] flex items-center">
            {/* Speech bubble arrow pointer */}
            <div className="hidden md:block absolute top-10 -left-2.5 w-5 h-5 bg-white border-l border-b border-cream-300 rotate-45"></div>
            
            <p className="text-sm font-sans leading-relaxed text-gray-600 font-medium">
              {introText}
              <span className="w-1.5 h-4 bg-lavender-300 inline-block animate-pulse ml-0.5" />
            </p>
          </div>

          {/* Short Personalized welcome details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="space-y-3.5 mb-8 text-sm text-gray-700 leading-relaxed text-left font-serif"
          >
            <p>
              Hey Yashu, I wrote this little memory notebook just for you. When everyone drifted away and everything was fuzzy in 2024, you were the anchor that held. You tied sarees with me, tolerated my absolute worst angry tantrums, and became my safe haven.
            </p>
            <p className="font-bold font-hand text-2xl text-pink-400 leading-none">
              - With infinitely pure love, Anika 🌸
            </p>
          </motion.div>

          {/* Magical Enter Button with Sliding Door Trigger */}
          <div className="flex justify-center md:justify-start" id="enter-button-wrapper">
            <button
              onClick={triggerStart}
              className="bg-lavender-200 hover:bg-lavender-300 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 ease-out flex items-center gap-3 relative cursor-pointer"
              id="magic-door-button"
            >
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="text-sm tracking-widest uppercase">Start Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>

      {/* Sliding Magical Doors Overlay */}
      <AnimatePresence>
        {isOpeningDoor && (
          <div className="fixed inset-0 z-[999] pointer-events-none flex" id="magic-door">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="w-1/2 h-full bg-cream-300 border-r border-[#ebdcb9] flex flex-col justify-center items-end pr-8"
            >
              <div className="text-right flex flex-col items-end">
                <Heart className="w-12 h-12 text-pink-300 animate-pulse fill-pink-100" />
                <span className="text-xl font-serif text-gray-800 font-bold mt-4">Anika</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="w-1/2 h-full bg-cream-300 border-l border-[#ebdcb9] flex flex-col justify-center items-start pl-8"
            >
              <div className="text-left flex flex-col items-start">
                <Sparkles className="w-12 h-12 text-lavender-300 animate-pulse" />
                <span className="text-xl font-serif text-gray-800 font-bold mt-4">Yashasvi</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
