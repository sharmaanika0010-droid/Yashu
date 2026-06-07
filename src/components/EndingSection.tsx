import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Award, ArrowUp, Calendar, Printer } from 'lucide-react';

export default function EndingSection({ friendsStarryImg }: { friendsStarryImg: string }) {
  const [stampSealed, setStampSealed] = useState(false);
  const [signatureAnika, setSignatureAnika] = useState("Anika 🌸");
  const [signatureYashasvi, setSignatureYashasvi] = useState("Yashasvi ✨");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto relative overflow-hidden" id="ending-promise">
      
      {/* Decorative Starry sky canvas look under */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-45 select-none">
        {[...Array(15)].map((_, idx) => (
          <div
            key={`star-${idx}`}
            className="absolute rounded-full bg-white shadow-lg border border-pink-100"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse-glow ${Math.random() * 4 + 3}s infinite`,
              animationDelay: `${idx * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fae8ff] text-[#a21caf] font-bold uppercase tracking-widest text-xs mb-3">
          <Sparkles className="w-4 h-4 animate-spin text-pink-400" style={{ animationDuration: '4s' }} />
          <span>Forever Friends Oath</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif text-gray-800 font-bold tracking-tight">
          Our Infinite <span className="font-hand text-pink-400 italic text-4xl sm:text-6xl text-sans">Promise</span>
        </h2>
        <p className="max-w-md mx-auto mt-2 text-sm text-gray-500 font-sans">
          Happy Best Friend's Day, Yashasvi! This represents our official binding contract for the next eighty years.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* LEFT COMPONENT: Moving Farewell note */}
        <div className="md:col-span-5 text-left flex flex-col gap-5">
          <div className="rounded-3xl border border-cream-[#ebdcb9] bg-white p-6 sm:p-7 shadow-xl">
            <h3 className="text-xl font-serif font-black text-gray-800 leading-tight flex items-center gap-2">
              Anika's Final Promise 🌸
            </h3>
            
            <p className="font-sans text-sm text-gray-600 mt-3 leading-relaxed">
              Yashu, this website is not just code or text. It is a genuine monument of my gratitude. In 2024, when we met, I was awkward and guarded. But your warm, rare heart unlocked my world. We survived group drama, pinned chaotic sarees, spent endless hours ranting in canteens, and laughed until our ribs ached.
            </p>
            <p className="font-sans text-sm text-gray-600 mt-3 leading-relaxed">
              No matter where career, life, or marriage takes us, I promise: I will never, ever let you go. If you are fifty or eighty, I will still send you 40-minute audio notes, and spill the tea.
            </p>

            <span className="font-hand text-3xl text-pink-500 block mt-4 leading-none">
              - Always & Forever, Anika 💖
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start mt-2 bg-cream-200 hover:bg-cream-300 text-gray-700 font-mono text-[10px] tracking-widest uppercase font-bold py-2.5 px-5 rounded-full flex items-center gap-1.5 shadow cursor-pointer transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" /> Back to Stars Canopy
          </button>
        </div>

        {/* RIGHT COMPONENT: PRINTABLE CERTIFICATE CARD */}
        <div className="md:col-span-7 flex justify-center">
          <motion.div
            whileHover={{ y: -3 }}
            className="w-full max-w-xl bg-[#fffef9] border-8 border-double border-[#d4c18c] p-6 sm:p-10 shadow-2xl rounded-2xl relative text-center"
            id="friends-certificate-board"
          >
            {/* Stamp mark seal indicator */}
            <div className="absolute top-2 right-2 text-[8px] font-mono text-gray-300 uppercase tracking-widest pointer-events-none">
              DEC: BFD-2026
            </div>

            <div className="flex justify-center mb-1">
              <Award className="w-12 h-12 text-[#d4c18c] animate-float" />
            </div>

            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-amber-600 font-black block">
              Certificate of Infinite Alliance
            </span>

            <h3 className="text-2xl sm:text-4xl font-serif text-gray-800 font-extrabold mt-2 leading-none">
              FOREVER BESTIES
            </h3>

            <div className="border-t border-[#ebdcb9] w-24 mx-auto my-4"></div>

            <p className="text-xs text-gray-500 font-sans leading-relaxed max-w-sm mx-auto">
              This document solemnly certifies that the beautiful bond forged in 2024 between
            </p>

            <h4 className="text-xl sm:text-2xl font-serif text-gray-800 font-bold my-3 tracking-wide">
              ANIKA SHARMA & YASHASVI
            </h4>

            <p className="text-xs sm:text-sm text-gray-600 font-hand text-2xl leading-relaxed max-w-sm mx-auto">
              "Has fully and absolutely survived toxic college group drama, 8 stormy angry tantrums, 10,000+ selfie snapshots, and represents an unbreakable alliance bound for the next 80 years."
            </p>

            {/* Signature forms inputs */}
            <div className="grid grid-cols-2 gap-4 mt-8 border-t border-dashed border-[#ddce9e] pt-6 text-left">
              <div>
                <label className="text-[8px] font-mono text-gray-400 block uppercase tracking-wider mb-2 leading-none">
                  Signature of Anika:
                </label>
                <input
                  type="text"
                  value={signatureAnika}
                  onChange={(e) => setSignatureAnika(e.target.value)}
                  maxLength={15}
                  className="w-full border-b border-[#efdeaf] bg-transparent pb-1 text-center font-hand text-2xl text-pink-500 leading-none focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[8px] font-mono text-gray-400 block uppercase tracking-wider mb-2 leading-none">
                  Signature of Yashasvi:
                </label>
                <input
                  type="text"
                  value={signatureYashasvi}
                  onChange={(e) => setSignatureYashasvi(e.target.value)}
                  maxLength={15}
                  className="w-full border-b border-[#efdeaf] bg-transparent pb-1 text-center font-hand text-2xl text-lavender-400 leading-none focus:outline-none"
                />
              </div>
            </div>

            {/* Validate interactive stamp seal button */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <span className="text-[9px] text-gray-400 font-mono tracking-wider flex items-center gap-1 uppercase block">
                <Calendar className="w-3.5 h-3.5" /> Date: June 07, 2026
              </span>

              <div className="flex gap-2">
                {/* Print button */}
                <button
                  onClick={handlePrint}
                  className="p-2.5 bg-cream-200 hover:bg-cream-300 text-gray-600 rounded-xl transition-all cursor-pointer border border-cream-350"
                  title="Print Certificate structure"
                >
                  <Printer className="w-4 h-4" />
                </button>

                {!stampSealed ? (
                  <button
                    onClick={() => setStampSealed(true)}
                    className="bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 px-5 rounded-xl text-xs uppercase tracking-widest shadow cursor-pointer transition-colors animate-pulse"
                  >
                    Seal Stamp
                  </button>
                ) : (
                  <span className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-600 font-mono font-black text-xs uppercase tracking-wider shadow-sm animate-bounce">
                    🛡️ ALLIANCE VALIDATED
                  </span>
                )}
              </div>
            </div>

          </motion.div>
        </div>

      </div>

    </section>
  );
}
