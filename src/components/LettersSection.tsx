import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ArrowLeft, Heart, Sparkles, BookOpen, Clock } from 'lucide-react';
import { OPEN_LETTERS_LIST } from '../data';
import { OpenWhenLetter } from '../types';

export default function LettersSection() {
  const [selectedLetter, setSelectedLetter] = useState<OpenWhenLetter | null>(null);

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="letters-section">
      
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-600 font-bold uppercase tracking-widest text-xs mb-3 animate-pulse">
          <Mail className="w-3.5 h-3.5" />
          <span>Long Emotional Friendship Letters</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif text-gray-800 font-bold tracking-tight">
          Letters of the <span className="font-hand text-pink-400 italic text-4xl sm:text-6xl text-sans">Heart</span>
        </h2>
        <p className="max-w-md mx-auto mt-2 text-sm text-gray-500 font-sans">
          Click on any interactive virtual envelope whenever your soul needs a warm hug or a quiet reminder of we.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!selectedLetter ? (
          /* DISPLAY LETTERS ENVELOPES LIST grid */
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2"
            id="envelope-rack"
          >
            {OPEN_LETTERS_LIST.map((letter: OpenWhenLetter) => (
              <motion.div
                key={letter.id}
                whileHover={{ y: -6, rotate: 1 }}
                onClick={() => setSelectedLetter(letter)}
                className={`border p-6 rounded-3xl shadow-lg cursor-pointer flex flex-col items-center text-center transition-all duration-300 relative ${letter.envelopeColor}`}
              >
                {/* Vintage postal stamp look */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded bg-white/40 border border-white/60 flex items-center justify-center font-serif text-xs font-bold leading-none select-none">
                  BFD
                </div>

                <div className="w-14 h-14 rounded-full bg-white/70 border border-white flex items-center justify-center text-3xl shadow-sm mb-4">
                  {letter.emoji}
                </div>

                <h3 className="text-lg font-serif font-bold text-gray-800 leading-tight">
                  {letter.title}
                </h3>
                
                <p className="text-xs opacity-80 mt-2 font-hand text-lg leading-relaxed text-gray-700 select-none">
                  {letter.prompt}
                </p>

                <div className="mt-5 text-[10px] font-mono tracking-wider bg-white/30 px-3 py-1 rounded-full uppercase border border-white/40">
                  Click to open
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* DETAILED LETTER READING ROOM sheet */
          <motion.div
            key="read"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="bg-white border border-[#ebdcb9] max-w-2xl mx-auto p-6 sm:p-10 rounded-2xl shadow-2xl text-left relative"
            id="letter-reading-desk"
          >
            {/* Back action */}
            <button
              onClick={() => setSelectedLetter(null)}
              className="mb-6 flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 font-mono uppercase tracking-widest cursor-pointer transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Fold Letter & Return</span>
            </button>

            {/* Stamp logo mark */}
            <div className="absolute top-10 right-10 w-16 h-16 rounded-full border-2 border-[#ebdcb9] text-[#ebdcb9] flex items-center justify-center font-serif text-xs font-black select-none -rotate-12">
              SEALED
            </div>

            <div className="flex items-center gap-2 text-lavender-300 font-mono text-xs uppercase tracking-widest mb-3 font-semibold">
              <Sparkles className="w-4.5 h-4.5 animate-pulse" />
              <span>SPECIAL ENCLOSURE • FOR YASHASVI</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif text-gray-800 font-bold leading-tight">
              {selectedLetter.title}
            </h3>

            {/* Paragraph Content letter */}
            <div className="mt-6 border-t border-dashed border-cream-400 pt-6">
              <div className="p-5 sm:p-8 bg-[#fffdf9] border-2 border-[#ebdcb9] rounded-2xl shadow-inner font-hand text-2xl sm:text-3xl text-gray-700 leading-relaxed max-h-[380px] overflow-y-auto relative whitespace-pre-wrap">
                {selectedLetter.content}
              </div>
            </div>

            {/* Mini coping rants lists instructions */}
            <div className="mt-8 bg-pink-100/30 border border-pink-200 p-5 rounded-2xl">
              <h4 className="text-xs uppercase tracking-wider font-bold text-pink-500 mb-2.5 flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                Special Coping Instructions:
              </h4>
              <ul className="space-y-2">
                {selectedLetter.specialAdvice.map((adv, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-300 rounded-full mt-1.5 shrink-0" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom metadata */}
            <div className="mt-8 flex justify-between items-center text-[10px] font-mono text-gray-400 border-t border-cream-200 pt-4">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                SEALED: JAN 2024 - 2026
              </span>
              <span className="flex items-center gap-1 text-pink-400">
                <Heart className="w-3.5 h-3.5 fill-pink-300 text-pink-300 animate-pulse" />
                Your Bestie, Anika
              </span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
