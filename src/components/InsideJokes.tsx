import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Laugh, ShieldAlert, Award, Smile, ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import { INSIDE_JOKES_LIST } from '../data';
import { InsideJoke } from '../types';

export default function InsideJokes() {
  const [jokeIndex, setJokeIndex] = useState(0);

  const activeJoke = INSIDE_JOKES_LIST[jokeIndex];

  const getSeverityBadge = (sev: string) => {
    switch (sev) {
      case 'chaotic':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono font-black text-rose-600 bg-rose-100 border border-rose-300 flex items-center gap-1"><Flame className="w-3 h-3 text-rose-500 animate-bounce" /> Chaotic</span>;
      case 'spicy':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono font-black text-amber-600 bg-amber-100 border border-amber-300 flex items-center gap-1"><Flame className="w-3 h-3 text-[#f59e0b]" /> Spicy</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono font-black text-emerald-600 bg-emerald-100 border border-emerald-300 flex items-center gap-1"><Smile className="w-3 h-3 text-emerald-500" /> Pure</span>;
    }
  };

  const nextJoke = () => {
    setJokeIndex((prev) => (prev + 1) % INSIDE_JOKES_LIST.length);
  };

  const prevJoke = () => {
    setJokeIndex((prev) => (prev - 1 + INSIDE_JOKES_LIST.length) % INSIDE_JOKES_LIST.length);
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="inside-jokes-roasts">
      
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-300 text-amber-850 font-bold uppercase tracking-widest text-xs mb-3">
          <Laugh className="w-3.5 h-3.5" />
          <span>Inside Jokes & Chaotic Roasts</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif text-gray-800 font-bold tracking-tight">
          Laughter, Sarcasm & <span className="font-hand text-pink-400 italic text-4xl sm:text-6xl text-sans">Chaos</span>
        </h2>
        <p className="max-w-md mx-auto mt-2 text-sm text-gray-500 font-sans">
          A highly confidential database of our biggest giggles, university side-eyes, and absolute historical drama filters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-2">
        
        {/* LEFT COMPONENT: The Slide Joke cards */}
        <div className="bg-white border border-[#ebdcb9] p-6 sm:p-9 rounded-3xl shadow-xl flex flex-col justify-between relative min-h-[340px]" id="jokes-roll">
          {/* Post Stamp detail */}
          <div className="absolute top-4 right-4 text-3xl opacity-15 select-none animate-bounce font-black">
            ROAST
          </div>

          <div className="flex items-center gap-2 text-lavender-300 font-mono text-[10px] uppercase tracking-widest mb-4 font-bold">
            <Award className="w-4.5 h-4.5" />
            <span>LOL DATABASE • JOKE {jokeIndex + 1} OF {INSIDE_JOKES_LIST.length}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeJoke.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-center"
            >
              <blockquote>
                <p className="text-2xl sm:text-3xl font-serif font-black text-gray-800 leading-tight">
                  {activeJoke.quote}
                </p>
              </blockquote>
              
              <div className="mt-4 p-4 bg-cream-100/40 border-l-4 border-yellow-300 rounded-r-xl italic font-hand text-2xl text-gray-600">
                Context: {activeJoke.context}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Severity & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-4 border-t border-cream-200">
            <div>
              <span className="block text-[8px] font-mono uppercase text-gray-400 font-black tracking-widest mb-1">
                Chaos Index:
              </span>
              {getSeverityBadge(activeJoke.severity)}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevJoke}
                className="p-2 bg-cream-200 hover:bg-cream-300 transition-colors text-gray-700 rounded-full cursor-pointer"
                title="Back joke"
              >
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={nextJoke}
                className="p-2 bg-cream-200 hover:bg-cream-300 transition-colors text-gray-700 rounded-full cursor-pointer"
                title="Next joke"
              >
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT COMPONENT: Friendship Roast lists elements */}
        <div className="bg-[#fffefc] border-2 border-dashed border-cream-400 p-6 sm:p-8 rounded-3xl text-left flex flex-col justify-center shadow-md">
          <div className="flex items-center gap-1.5 text-xs text-rose-500 font-bold uppercase tracking-widest mb-4">
            <ShieldAlert className="w-4 h-4 animate-pulse" />
            <span>Active Roasts Counter: We vs Group Drama</span>
          </div>

          <div className="space-y-4 font-sans text-sm">
            <div className="bg-rose-50 border border-rose-100 p-3.5 rounded-2xl">
              <span className="text-[9px] font-mono tracking-widest font-black text-rose-500 block">ANIKA'S SUPERPOWER:</span>
              <p className="font-semibold text-gray-800 italic mt-0.5 font-serif">
                "Finding small flaws in people's tone that we then digest into high-quality canteens rants for five consecutive days."
              </p>
            </div>

            <div className="bg-lavender-50 border border-lavender-100 p-3.5 rounded-2xl">
              <span className="text-[9px] font-mono tracking-widest font-black text-lavender-500 block">YASHASVI'S RECORD:</span>
              <p className="font-semibold text-gray-800 italic mt-0.5 font-serif">
                "Patience index of a Tibetan saint. Listening to Anika scream about group dramas without once dropping her peaceful cup of tea."
              </p>
            </div>

            <div className="bg-cream-100/40 border border-cream-200 p-3.5 rounded-2xl">
              <span className="text-[9px] font-mono tracking-widest font-black text-gray-500 block">MEME SPELL:</span>
              <p className="font-hand text-2xl text-gray-600 mt-1 leading-tight">
                "We can lock our eyes in a room full of people and exactly know the 5,000 bad thoughts we are having without saying a single word."
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
