import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, MessageCircle, Camera, MapPin, Coffee, ShieldCheck } from 'lucide-react';
import { FIRSTS_LIST } from '../data';
import { FirstItem } from '../types';

export default function OurFirsts() {
  const [activeFirstId, setActiveFirstId] = useState<string>('f1');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageCircle': return <MessageCircle className="w-5 h-5" />;
      case 'Camera': return <Camera className="w-5 h-5" />;
      case 'MapPin': return <MapPin className="w-5 h-5" />;
      case 'Coffee': return <Coffee className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const activeFirst = FIRSTS_LIST.find(f => f.id === activeFirstId) || FIRSTS_LIST[0];

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="our-friendship-firsts">
      
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender-100 text-lavender-700 font-bold uppercase tracking-widest text-xs mb-3 animate-pulse">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>The Foundation Stones</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif text-gray-800 font-bold tracking-tight">
          Our Precious <span className="font-hand text-lavender-300 italic text-4xl sm:text-6xl text-sans">Firsts</span>
        </h2>
        <p className="max-w-md mx-auto mt-2 text-sm text-gray-500 font-sans">
          Before we were undefeated besties, we had these sweet, clumsy, and unforgettable beginnings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center" id="firsts-content-split">
        
        {/* Left Side: Buttons Selector list */}
        <div className="md:col-span-4 flex flex-col gap-3">
          {FIRSTS_LIST.map((first: FirstItem) => (
            <button
              key={first.id}
              onClick={() => setActiveFirstId(first.id)}
              className={`p-4 rounded-2xl flex items-center gap-4 text-left border cursor-pointer transition-all ${
                activeFirstId === first.id
                  ? 'bg-cream-100 border-cream-400 font-semibold text-gray-800 translate-x-2 shadow-md shadow-cream-200'
                  : 'bg-white border-cream-300 hover:bg-cream-100/50 text-gray-500'
              }`}
            >
              <span className={`p-2.5 rounded-full ${activeFirstId === first.id ? 'bg-pink-100 text-pink-500' : 'bg-cream-100 text-cream-400'}`}>
                {getIcon(first.icon)}
              </span>

              <div className="min-w-0">
                <h4 className="text-sm font-serif font-black tracking-tight leading-none text-gray-800">
                  {first.title}
                </h4>
                <span className="text-[10px] font-mono tracking-widest uppercase mt-1 block">
                  {first.date}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Right Side: Showcase Paper Document */}
        <div className="md:col-span-8 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFirst.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-xl bg-white border border-[#ebdcb9] shadow-2xl p-6 sm:p-9 rounded-2xl relative overflow-hidden text-left"
              id="firsts-envelope-view"
            >
              {/* Binder line watermark on top */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-pink-200 via-lavender-200 to-rose-200"></div>
              
              {/* Retro Post Stamp seal */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full border-2 border-dashed border-pink-200 flex items-center justify-center -rotate-12 select-none">
                <span className="text-[9px] font-mono text-pink-300 leading-none text-center font-bold">
                  BESTIES<br />FOUNDED<br />2024
                </span>
              </div>

              <div className="flex items-center gap-2 text-lavender-300 font-mono text-xs uppercase tracking-widest mb-2 font-bold">
                {getIcon(activeFirst.icon)}
                <span>{activeFirst.date} • ORIGINAL DECREE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-gray-800 font-bold leading-tight">
                {activeFirst.title}
              </h3>

              <div className="flex flex-wrap gap-1 mt-2 mb-6">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold text-gray-500 bg-cream-200 border border-cream-300/60 font-mono flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-pink-400" />
                  LOC: {activeFirst.location}
                </span>
              </div>

              {/* Magical stories rants */}
              <div className="border hover:border-pink-200 hover:rotate-1 duration-300 rounded-2xl p-5 bg-cream-100/40 relative">
                {/* Tape seal */}
                <div className="absolute -top-3 left-10 w-16 h-5 bg-pink-100 border border-pink-200 rotate-1 select-none pointer-events-none"></div>

                <p className="font-hand text-2xl sm:text-3xl text-gray-700 leading-relaxed font-normal">
                  {activeFirst.story}
                </p>
              </div>

              {/* Bottom handwriting signoff */}
              <div className="flex justify-between items-end mt-8 border-t border-cream-200 pt-4">
                <div>
                  <span className="block text-[9px] font-mono text-gray-400 uppercase tracking-widest leading-none">
                    Certified memory log
                  </span>
                  <span className="text-xs font-serif font-black text-gray-800">
                    No. 00{activeFirst.id.replace('f', '')}
                  </span>
                </div>

                <span className="font-hand text-2xl text-pink-400 font-semibold flex items-center gap-1 animate-float">
                  <Heart className="w-4 h-4 fill-pink-300 text-pink-300" />
                  Infinite trust
                </span>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
