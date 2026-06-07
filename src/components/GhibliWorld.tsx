import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Star, Sun, Heart, Sparkles, Navigation, ShieldCheck } from 'lucide-react';

interface ConstellationStar {
  id: string;
  name: string;
  message: string;
  x: number; // coordinates
  y: number;
  delay: number;
}

export default function GhibliWorld({ ghibliMeadowImg }: { ghibliMeadowImg: string }) {
  const [activeStar, setActiveStar] = useState<ConstellationStar | null>(null);

  const stars: ConstellationStar[] = [
    {
      id: 's1',
      name: "The Anchor Star",
      message: "You stayed when others drifted away. That single act of holding my line is what made me believe in true forever friendship again.",
      x: 18,
      y: 25,
      delay: 0.1
    },
    {
      id: 's2',
      name: "The Giggles Star",
      message: "Scolded by the library marshal for laughing uncontrollably at a meme you shared. Our laughter was always worth every single penalty points!",
      x: 42,
      y: 15,
      delay: 0.3
    },
    {
      id: 's3',
      name: "The Saree Photoshoot Star",
      message: "Standing under the Surbhi gardens arches, hand-pinning individual saree pleats, clicking 1,000 selfies and adjusting our traditional heavy jewels.",
      x: 65,
      y: 35,
      delay: 0.5
    },
    {
      id: 's4',
      name: "The Couch Rant Star",
      message: "Endless hours on the college canteen corner bench, drinking cutting chai, sharing hot fries and spilling the absolute highest group drama tea.",
      x: 85,
      y: 20,
      delay: 0.2
    },
    {
      id: 's5',
      name: "The Storm Buffer Star",
      message: "I gets terribly hotheaded and scream. Anyone else would leave instantly, but you waiting patiently with chocolates is my ultimate safe space.",
      x: 52,
      y: 45,
      delay: 0.4
    }
  ];

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="ghibli-memory-world">
      
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender-100 text-lavender-750 font-bold uppercase tracking-widest text-xs mb-3">
          <Moon className="w-3.5 h-3.5 text-lavender-600" />
          <span>Interactive Stargazing Canopy</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif text-gray-800 font-bold tracking-tight">
          Ghibli Constellation <span className="font-hand text-pink-400 italic text-4xl sm:text-6xl text-sans">World</span>
        </h2>
        <p className="max-w-md mx-auto mt-2 text-sm text-gray-500 font-sans">
          Click on the glowing star nodes twinkling across our sky canopy to unveil secret thoughts.
        </p>
      </div>

      <div className="relative aspect-[16/9] w-full rounded-3xl border-2 border-cream-450 overflow-hidden bg-cream-150 shadow-2xl" id="stargazing-canopy-box">
        {/* Watercolor landscape background card image */}
        <img 
          src={ghibliMeadowImg} 
          alt="Ghibli meadow background landscape" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Midnight twilight overlay filtering */}
        <div className="absolute inset-0 bg-[#1e293b]/15 mix-blend-multiply pointer-events-none select-none"></div>

        {/* Floating Paper lanterns ascending */}
        <div className="absolute inset-x-0 bottom-0 top-0 pointer-events-none z-10 overflow-hidden select-none">
          {[...Array(6)].map((_, idx) => (
            <div
              key={`lantern-${idx}`}
              className="absolute bg-orange-100/50 blur-[1px] rounded-t-full rounded-b-xl border border-orange-200"
              style={{
                width: '12px',
                height: '18px',
                left: `${15 + idx * 16}%`,
                bottom: '-20px',
                boxShadow: '0 0 10px rgba(251, 146, 60, 0.5)',
                animation: `drift-left ${Math.random() * 12 + 15}s linear infinite`,
                animationDelay: `${idx * 2}s`
              }}
            />
          ))}
        </div>

        {/* Twinkling Constellation connect-the-dots stars */}
        {stars.map((star) => {
          const isSelected = activeStar?.id === star.id;

          return (
            <button
              key={star.id}
              onClick={() => setActiveStar(star)}
              className="absolute p-2 group transition-all duration-300 z-20 cursor-pointer"
              style={{ left: `${star.x}%`, top: `${star.y}%` }}
              title={star.name}
              id={`constellation-star-${star.id}`}
            >
              <div className="relative flex h-8 w-8 items-center justify-center">
                {/* Outer halo */}
                <span className={`absolute inline-flex h-full w-full rounded-full bg-yellow-100 opacity-0 group-hover:opacity-40 animate-ping ${isSelected ? 'opacity-50' : ''}`}></span>
                
                {/* Tiny Star icon */}
                <Star className={`w-4 h-4 text-yellow-300 fill-yellow-200 transition-all ${isSelected ? 'scale-130 text-pink-400 fill-pink-300' : 'group-hover:scale-110 group-hover:text-amber-300'}`} />
              </div>
            </button>
          );
        })}

        {/* Connection constellation path line drawing */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-yellow-200/20 fill-none stroke-dasharray-[2]">
          <path d="M18,25 L42,15 L65,35 L85,20 L52,45 Z" strokeWidth="1" strokeDasharray="3,3" />
        </svg>

        {/* Dialog bubble on top popup */}
        <AnimatePresence>
          {activeStar && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-sm bg-white/95 backdrop-blur-md border border-yellow-200/60 p-4 sm:p-5 rounded-2xl shadow-xl z-35 text-left"
              id="star-secrets-bubble"
            >
              <span className="text-[8px] font-mono tracking-widest text-[#94a3b8] font-bold block uppercase mb-1">
                Constellation message Unlocked
              </span>
              <h4 className="text-sm font-serif font-black text-gray-850 flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-amber-400" />
                {activeStar.name}
              </h4>
              <p className="font-hand text-xl text-gray-650 tracking-wide mt-2 leading-snug">
                "{activeStar.message}"
              </p>

              <button
                onClick={() => setActiveStar(null)}
                className="mt-3 text-[10px] uppercase font-mono text-gray-400 hover:text-gray-750 underline tracking-wider cursor-pointer font-bold leading-none block"
              >
                Close Bubble
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      
    </section>
  );
}
