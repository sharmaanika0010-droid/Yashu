import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, BookOpen, Star, Filter, Heart, Coffee } from 'lucide-react';
import { MEMORIES_LIST } from '../data';
import { Memory } from '../types';

export default function TimelineSection() {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Collect unique category tags
  const tags = ['All', 'Milestone', 'Cafe', 'Saree Day', 'Drama Survival', 'College', 'Laughs'];

  const filteredMemories = selectedTag === 'All' 
    ? MEMORIES_LIST 
    : MEMORIES_LIST.filter(m => m.tag === selectedTag);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="friendship-timeline">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-600 font-bold uppercase tracking-widest text-xs mb-3 animate-pulse">
          <Calendar className="w-3.5 h-3.5" />
          <span>Our Friendship Chronicles</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif text-gray-800 font-bold tracking-tight">
          The Chapters of <span className="font-hand text-lavender-300 italic text-4xl sm:text-6xl text-sans hover:scale-105 duration-200 inline-block pointer-events-none">Us</span>
        </h2>
        <p className="max-w-xl mx-auto mt-3 text-sm sm:text-base text-gray-500 font-sans">
          Tracing our beautiful, chaotic, and unshakeable adventure from the snowy days of early 2024 to our loving, present-day celebration in 2026.
        </p>
      </div>

      {/* category filtering */}
      <div className="flex flex-wrap justify-center gap-2 mb-10" id="timeline-filters">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 text-xs font-semibold rounded-full uppercase tracking-wider transition-all cursor-pointer ${
              selectedTag === tag 
                ? 'bg-lavender-200 text-white shadow-md shadow-lavender-100 scale-105' 
                : 'bg-white hover:bg-cream-200 border border-cream-300 text-gray-600'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Dynamic Vertical Timeline */}
      <div className="relative border-l-2 border-dashed border-cream-400 pl-6 ml-4 sm:ml-8 space-y-12" id="timeline-scroll-path">
        
        {/* Floating background star particles on line */}
        <div className="absolute top-0 bottom-0 left-0 -translate-x-1.5 flex flex-col justify-around pointer-events-none select-none">
          {[...Array(5)].map((_, idx) => (
            <Star key={idx} className="w-3 h-3 text-cream-400 fill-cream-300 animate-pulse-glow" style={{ animationDelay: `${idx * 0.4}s` }} />
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          {filteredMemories.map((memory: Memory, index: number) => {
            const isExpanded = expandedId === memory.id;

            return (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group"
              >
                {/* Node Pointer star badge */}
                <span className="absolute -left-10 top-1 w-7 h-7 rounded-full bg-cream-100 border-2 border-cream-400 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-pink-100 group-hover:border-pink-300 duration-300">
                  {memory.tag === 'Cafe' ? (
                    <Coffee className="w-3.5 h-3.5 text-cream-400 group-hover:text-pink-500" />
                  ) : memory.tag === 'Milestone' ? (
                    <Sparkles className="w-3.5 h-3.5 text-cream-400 group-hover:text-pink-500" />
                  ) : (
                    <Heart className="w-3.5 h-3.5 text-cream-400 group-hover:text-pink-500" />
                  )}
                </span>

                {/* Scrapbook Sticky Paper card */}
                <div 
                  className={`border border-cream-300 p-5 rounded-2xl cursor-pointer max-w-3xl hover:shadow-xl transition-all duration-300 relative ${isExpanded ? 'bg-white' : 'bg-cream-100/50 hover:bg-white'}`}
                  style={{ borderLeftColor: memory.bgColor || '#ebdcb9', borderLeftWidth: '6px' }}
                  onClick={() => toggleExpand(memory.id)}
                >
                  
                  {/* Tape Sticker Deco */}
                  {index % 2 === 0 && (
                    <div className="absolute -top-3 left-10 w-16 h-5 bg-lavender-100/40 border border-lavender-200/30 rotate-2 select-none pointer-events-none"></div>
                  )}
                  {index % 3 === 1 && (
                    <div className="absolute -top-3 right-10 w-14 h-5 bg-pink-100/40 border border-pink-200/30 -rotate-3 select-none pointer-events-none"></div>
                  )}

                  {/* Date Heading */}
                  <span className="font-mono text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-lavender-300" />
                    {memory.date}
                  </span>

                  <div className="flex items-start justify-between gap-4 mt-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-800 flex items-center gap-2 group-hover:text-lavender-300 duration-300">
                        {memory.title}
                      </h3>
                      <p className={`text-sm text-gray-500 transition-all font-sans duration-300 mt-1 lines-clamp-2 ${isExpanded ? 'line-clamp-none' : 'line-clamp-2'}`}>
                        {memory.description}
                      </p>
                    </div>

                    {/* Stickers tag badges */}
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="px-2 py-0.5 rounded-full text-[10px] uppercase font-bold text-gray-500 tracking-wider bg-cream-300/60 border border-cream-400/40">
                        {memory.tag}
                      </span>
                      <div className="flex gap-1">
                        {memory.stickers?.slice(0, 2).map((stk, i) => (
                          <span key={i} className="text-base select-none">{stk}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expand note segment */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mt-4 pt-4 border-t border-cream-300 flex flex-col gap-3"
                      >
                        <p className="font-hand text-2xl text-pink-500 leading-snug">
                          {memory.tag === 'Drama Survival' 
                            ? "Anika\'s diary entry: We sat together on the backbench, looked at the empty seats, sighed, but held hands tightly. I knew we are for keeps."
                            : memory.tag === 'Saree Day'
                            ? "I was struggling with my pallu pin, swearing under my breath, but you patted my head and calmly redid all the safety pins for me while laughing."
                            : memory.tag === 'Laughs'
                            ? "Even on my absolute grumpiest days, your stupid memes or quiet support can dismantle my thick steel walls. Thank you."
                            : "A core moment in Anika and Yashu\'s magical notebook of life."}
                        </p>

                        <div className="flex flex-wrap gap-2 items-center text-xs text-gray-400 font-mono mt-2">
                          <span>Doodles captured:</span>
                          <div className="flex gap-1.5 bg-cream-200/50 py-1 px-2.5 rounded-full border border-cream-300/40">
                            {memory.doodles?.map((d, i) => (
                              <span key={i} className="text-sm">{d}</span>
                            ))}
                            <span className="font-sans font-semibold text-[10px] text-gray-500">Hand drawn</span>
                          </div>
                        </div>

                        <span className="text-[11px] self-end text-lavender-300 font-sans underline cursor-pointer hover:font-bold">
                          Click card to fold back
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

      </div>
    </section>
  );
}
