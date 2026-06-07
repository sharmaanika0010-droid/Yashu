import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Sparkles, Heart, ChevronLeft, ChevronRight, Edit3 } from 'lucide-react';

interface ScrapPage {
  title: string;
  sub: string;
  handText: string;
  sticker: string;
  tapeColor: string;
  doodleEmoji: string;
  tag: string;
}

export default function ScrapbookSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages: ScrapPage[] = [
    {
      title: "The Cover Book",
      sub: "Dedicated to Yashasvi",
      handText: "Dear Yashu, this little scrap notebook stores our smiles from the past 2 years (2024–2026). Flip through these cozy notes and washi tapes to read our absolute favorite truths. – Anika",
      sticker: "📓",
      tapeColor: "bg-amber-100/60 border-amber-300",
      doodleEmoji: "🌿",
      tag: "MEMOIRES"
    },
    {
      title: "Our Saree Protocol",
      sub: "November 2024",
      handText: "Remember how we bought sarees on a random whim and spent 2 hours arguing with safety pins? We pinned them everywhere, so tightly that we could barely take regular strides. But oh my god, we looked like true royal queens! I wouldn't trade that laughter for anything.",
      sticker: "💃",
      tapeColor: "bg-pink-100/60 border-pink-300",
      doodleEmoji: "🌸",
      tag: "SILLY DREAM"
    },
    {
      title: "The Great Cafe Tea Spill",
      sub: "April - September",
      handText: "The corner table at our cafe was our fortress. As conflicts erupted in our friend group and friends walked away, we sat over hazelnut mocha lattes and promised we would never do the same. We held our line in the sand—and we won.",
      sticker: "☕",
      tapeColor: "bg-purple-100/60 border-purple-300",
      doodleEmoji: "💡",
      tag: "THE SHIELD"
    },
    {
      title: "Anika's Sparks & Storms",
      sub: "Acknowledging Reality",
      handText: "I know I can be incredibly hot-headed and throw absolute lightning bolts of anger. Yet, while others folded, you always wait for me to calm down and hand me chocolate. You are the only person who can absorb my tantrums and make me feel loved.",
      sticker: "⛈️",
      tapeColor: "bg-blue-100/60 border-blue-300",
      doodleEmoji: "⚓",
      tag: "LOYALTY"
    },
    {
      title: "The Rocking Chair Pact",
      sub: "Our Future Dream",
      handText: "When we are 80, we are buying adjacent wood cabins in the mist. We will sit on matching porch rocking chairs, drink premium tea, hold a pack of kittens, and loudly make fun of college assignments we survived decades ago. It's a solid contract!",
      sticker: "🏡",
      tapeColor: "bg-rose-100/60 border-rose-300",
      doodleEmoji: "💫",
      tag: "FOREVER"
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const activePage = pages[currentPage];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" id="digital-scrapbook">
      
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-300 text-amber-800 font-bold uppercase tracking-widest text-xs mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Interactive Flipbook</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif text-gray-800 font-bold tracking-tight">
          Our Digital <span className="font-hand text-pink-400 italic text-4xl sm:text-6xl text-sans">Scrapbook</span>
        </h2>
        <p className="max-w-md mx-auto mt-2 text-sm text-gray-500 font-sans">
          Flipped leaf by leaf, styled with washi tapes, handwritten diary notes, and absolute pure memory.
        </p>
      </div>

      {/* Main Scrapbook Leaves Container container */}
      <div className="relative bg-[#fffdf5] border-2 border-[#e6dcc5] p-6 sm:p-10 rounded-2xl shadow-2xl overflow-hidden min-h-[350px] max-w-2xl mx-auto" id="scrapbook-canvas">
        
        {/* Binder spiral lines on left side of page */}
        <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-cream-300/40 via-transparent to-transparent flex flex-col justify-around py-4 pointer-events-none select-none">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-4 h-4 rounded-full border-2 border-[#d5caab] bg-white opacity-60"></div>
          ))}
        </div>

        {/* Paper corners deco */}
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#ebdcb9] rounded-tr-xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#ebdcb9] rounded-br-xl pointer-events-none"></div>

        {/* Page Content Animation slide wrapper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, rotate: 1, scale: 0.98, x: 15 }}
            animate={{ opacity: 1, rotate: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, rotate: -1, scale: 0.98, x: -15 }}
            transition={{ duration: 0.4 }}
            className="pl-8 relative flex flex-col h-full"
          >
            {/* Washi tape sticker sticker */}
            <div className={`absolute -top-1 left-24 w-28 h-7 border-dashed border ${activePage.tapeColor} rotate-2 select-none pointer-events-none flex items-center justify-center`}>
              <span className="font-mono text-[9px] font-bold tracking-widest text-gray-400 select-none">TAPE RECORD</span>
            </div>

            {/* Doodles stickers inside page corners */}
            <div className="absolute top-2 right-4 text-3xl select-none animate-bounce" style={{ animationDuration: '3s' }}>
              {activePage.sticker}
            </div>

            {/* Page header and indexing */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 rounded bg-cream-200 border border-cream-400/40 text-[9px] font-mono font-bold tracking-wider text-gray-500">
                {activePage.tag}
              </span>
              <span className="text-xs font-mono text-gray-400">PAGE {currentPage + 1} OF {pages.length}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-gray-800 leading-none">
              {activePage.title}
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold mt-1 font-mono">
              {activePage.sub}
            </p>

            {/* Handwritten letter text body */}
            <div className="mt-6 flex-1 flex items-start gap-3 bg-cream-100/40 p-4 border border-[#eee5cc] rounded-xl shadow-inner relative">
              <Edit3 className="w-5 h-5 text-pink-300 absolute -top-2 -right-1.5 rotate-12" />
              
              <p className="font-hand text-2xl sm:text-3xl text-gray-700 leading-relaxed font-normal">
                {activePage.handText}
              </p>
            </div>

            {/* Botanical decorative leaves */}
            <div className="absolute bottom-1 right-2 text-2xl opacity-40 select-none animate-float-delayed">
              {activePage.doodleEmoji}
            </div>

            <div className="absolute bottom-1 left-4 text-2xl opacity-30 select-none animate-float">
              ❤️
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Action Controls buttons */}
        <div className="flex items-center justify-between mt-10 border-t border-cream-300/60 pt-4 pl-8" id="scrapbook-controls">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`p-2 rounded-full cursor-pointer transition-all ${currentPage === 0 ? 'text-gray-300 pointer-events-none' : 'text-gray-700 hover:bg-cream-200'}`}
            title="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-1">
            {pages.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all ${currentPage === i ? 'bg-pink-400 w-4' : 'bg-cream-400'}`}
              ></div>
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className={`p-2 rounded-full cursor-pointer transition-all ${currentPage === pages.length - 1 ? 'text-gray-300 pointer-events-none' : 'text-gray-700 hover:bg-cream-200'}`}
            title="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </section>
  );
}
