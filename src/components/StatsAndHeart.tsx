import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, AlertCircle, Quote, ThumbsUp, Calendar } from 'lucide-react';
import { PERSONAL_STORY_HIGHLIGHTS } from '../data';

export default function StatsAndHeart() {
  const [activeHeartTopic, setActiveState] = useState<number>(0);

  const heartTopics = [
    {
      title: "Why Yashasvi is Special & Rare",
      desc: "There are billions of people in this world, yet no one has your exact warmth. You have this rare, quiet magical aura that makes everyone feel entirely understood and safe. You excel at looking directly past my messy steel shell, finding my true self, and wrapping it in pure love. That is why you are rare, Yashu.",
      emoji: "🌟"
    },
    {
      title: "What Anika Admires About You",
      desc: "I admire your infinite, silent strength. You survive life storms, college assignments, and personal hardships with this grace that is beautiful to see. I admire how you never judge, how you can listen to my 45-minute audio rants and reply with actual thoughtful notes, and how patient your soul can be.",
      emoji: "💖"
    },
    {
      title: "Wisdom She Taught Me",
      desc: "You taught me that true friendship isn't about being identical or always happy; it's about staying. You taught me the art of being patient, slowing down my stormy tempers, and realizing that simple moments—sipping coffee in complete silent comfort—are the highest blessings of life.",
      emoji: "🌱"
    },
    {
      title: "When others left, you held the line...",
      desc: "This is what I cherish most. In 2024, when conflicts tore our entire friend group to pieces and people drifted away like leaves in an autumn gale, we didn't fold. Many times I got extremely angry over stupid things, but you never packed your bags. You absorbed the rain, and stayed. That is true loyalty.",
      emoji: "🛡️"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="friendship-stats-heart">
      
      {/* HEADER SECTION */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-600 font-bold uppercase tracking-widest text-xs mb-3 animate-pulse">
          <Heart className="w-3.5 h-3.5 fill-current" />
          <span>The Soul Room</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif text-gray-800 font-bold tracking-tight">
          Metrics of our <span className="font-hand text-pink-400 italic text-4xl sm:text-6xl text-sans">Alliance</span>
        </h2>
        <p className="max-w-md mx-auto mt-2 text-sm text-gray-500 font-sans">
          A combination of beautiful numeric stats and deeply emotional statements detailing why Yashasvi is my absolute favorite human.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
        
        {/* LEFT ZONE: SCI-ENTIFIC SCORE SHEET OF LOVING COUNTERS */}
        <div className="lg:col-span-5 bg-white border border-cream-400 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between" id="friendship-metrics-box">
          <div className="flex items-center gap-1 text-lavender-300 font-mono text-[10px] uppercase font-bold tracking-widest mb-6">
            <Calendar className="w-4 h-4 text-pink-400" />
            <span>Friendship Statistics Ledger</span>
          </div>

          <div className="space-y-6">
            
            {/* Stat 1 */}
            <div className="flex items-center justify-between border-b border-cream-200 pb-3">
              <div>
                <span className="block text-2xl font-bold font-mono text-gray-800">
                  {PERSONAL_STORY_HIGHLIGHTS.stats.daysCount}
                </span>
                <span className="text-[10px] tracking-wide uppercase text-gray-400 font-sans font-bold block">
                  Total days side-by-side
                </span>
              </div>
              <span className="text-2xl">🍀</span>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center justify-between border-b border-cream-200 pb-3">
              <div>
                <span className="block text-2xl font-bold font-mono text-gray-800">
                  {PERSONAL_STORY_HIGHLIGHTS.stats.photosTaken}
                </span>
                <span className="text-[10px] tracking-wide uppercase text-gray-400 font-sans font-bold block">
                  Clickable Photos together
                </span>
              </div>
              <span className="text-2xl">📸</span>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center justify-between border-b border-cream-200 pb-3">
              <div>
                <span className="block text-2xl font-bold font-mono text-gray-800">
                  {PERSONAL_STORY_HIGHLIGHTS.stats.cafesVisits}
                </span>
                <span className="text-[10px] tracking-wide uppercase text-gray-400 font-sans font-bold block">
                  Cafés visited & ranted at
                </span>
              </div>
              <span className="text-2xl">☕</span>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center justify-between pointer-events-none">
              <div>
                <span className="block text-2xl font-bold font-mono text-pink-500">
                  {PERSONAL_STORY_HIGHLIGHTS.stats.fightsSurvived} / {PERSONAL_STORY_HIGHLIGHTS.stats.reconciliations}
                </span>
                <span className="text-[10px] tracking-wide uppercase text-gray-400 font-sans font-bold block">
                  Stupid arguments vs Reconciliations
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-pink-100/60 border border-pink-200/50 flex items-center justify-center text-pink-500">
                <AlertCircle className="w-4.5 h-4.5" />
              </div>
            </div>

          </div>

          {/* Ledger Sign off Stamp */}
          <div className="mt-8 pt-4 border-t border-cream-200 text-center font-mono text-[10px] text-gray-400 flex items-center justify-between">
            <span>AUDIT ID: BFD-001</span>
            <span className="font-bold uppercase text-lavender-300">STILL CELEBRATING • ✨</span>
          </div>
        </div>

        {/* RIGHT ZONE: ACCORDION TRIBUTE LIST */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-[#fffef9] border border-cream-400/60 p-6 sm:p-8 rounded-3xl shadow-lg relative">
          
          <div className="flex items-center gap-1.5 text-xs text-lavender-300 font-bold uppercase tracking-widest mb-5">
            <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Why Yashasvi is Irreplaceable</span>
          </div>

          <div className="space-y-3 flex-1 flex flex-col justify-start">
            {heartTopics.map((item, idx) => {
              const active = activeHeartTopic === idx;

              return (
                <div 
                  key={idx}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${active ? 'bg-white border-pink-300/60 shadow-md' : 'bg-cream-100/30 border-cream-350 hover:bg-white'}`}
                >
                  <button
                    onClick={() => setActiveState(idx)}
                    className="w-full p-4 text-left flex items-center justify-between cursor-pointer font-serif font-bold text-gray-700 hover:text-pink-400 duration-200 text-sm sm:text-base"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{item.emoji}</span>
                      <span>{item.title}</span>
                    </span>
                    <span className="text-xs transition-transform duration-350 text-gray-400 font-mono">
                      {active ? 'FOLD' : 'EXPAND'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {active && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-[#fffdfa]"
                      >
                        <p className="p-4 pt-1 border-t border-cream-200 text-sm leading-relaxed text-gray-600 font-sans font-medium">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Loving Quote watermark sign off */}
          <div className="mt-6 p-4 border border-[#ebdcb9] rounded-2xl bg-cream-100 flex items-start gap-3 justify-center relative">
            <Quote className="w-5 h-5 text-gray-300 shrink-0" />
            <p className="font-hand text-2xl text-gray-650 italic text-center">
              "A best friend is a rare garden who absorbs your storms and reflects your stars."
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
