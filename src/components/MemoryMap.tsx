import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Map, MapPin, Sparkles, X, Heart, Star, Calendar, Coffee } from 'lucide-react';
import { MAP_SPOTS } from '../data';
import { MemoryPosition } from '../types';

export default function MemoryMap({ ghibliMeadowImg }: { ghibliMeadowImg: string }) {
  const [selectedSpot, setSelectedSpot] = useState<MemoryPosition | null>(null);

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto" id="memory-map">
      
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-300 text-amber-800 font-bold uppercase tracking-widest text-xs mb-3">
          <Map className="w-3.5 h-3.5" />
          <span>Interactive Memories Cartography</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif text-gray-800 font-bold tracking-tight">
          Our Map of <span className="font-hand text-pink-400 italic text-4xl sm:text-6xl text-sans">Wanderings</span>
        </h2>
        <p className="max-w-md mx-auto mt-2 text-sm text-gray-500 font-sans">
          Click on the twinkling stars across our custom-drawn memory landscape to extract cozy coordinate logs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT ZONE: Illustrated Map Landscape Container canvas */}
        <div className="lg:col-span-8 bg-white border-2 border-cream-400 p-3 rounded-3xl shadow-xl overflow-hidden relative aspect-video" id="map-illustration-box">
          
          {/* Custom Ghibli Watercolor illustration background */}
          <div className="w-full h-full rounded-2xl overflow-hidden relative bg-cream-100">
            <img 
              src={ghibliMeadowImg} 
              alt="Ghibli meadows map" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-90 blur-[0.5px]"
            />
            {/* Dark cozy overlay filter to make stars shine */}
            <div className="absolute inset-0 bg-blue-900/15 mix-blend-multiply pointer-events-none"></div>

            {/* Twinkling star map marker pins */}
            {MAP_SPOTS.map((spot: MemoryPosition) => {
              const isSelected = selectedSpot?.id === spot.id;
              
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedSpot(spot)}
                  className={`absolute p-1 group flex items-center justify-center transition-all cursor-pointer ${
                    isSelected ? 'z-30 scale-125' : 'z-20 hover:scale-115'
                  }`}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  title={`View ${spot.name}`}
                >
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    {/* Ripple halo pulse */}
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-100 opacity-60"></span>
                    
                    {/* Twinkly Star circle inside */}
                    <span className={`relative inline-flex rounded-full h-6 w-6 items-center justify-center border-2 shadow-md ${
                      isSelected 
                        ? 'bg-pink-400 border-white text-white' 
                        : 'bg-white border-cream-400 text-pink-400 hover:bg-pink-100 duration-200'
                    }`}>
                      <Star className={`w-3.5 h-3.5 fill-current ${isSelected ? 'animate-spin duration-3000' : ''}`} />
                    </span>
                  </span>

                  {/* Tiny floating hover tooltip name labels */}
                  <span className="absolute top-9 left-1/2 -translate-x-1/2 bg-gray-800/90 text-white text-[9px] font-mono tracking-widest uppercase font-bold py-1 px-2.5 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {spot.name}
                  </span>
                </button>
              );
            })}

            {/* Custom SVG stylized coordinate connections */}
            <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-35" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M25,35 Q45,20 60,20 Q48,55 82,55" fill="none" stroke="#ebdcb9" strokeWidth="0.5" strokeDasharray="3,3" />
              <path d="M60,20 Q45,75 45,75" fill="none" stroke="#ebdcb9" strokeWidth="0.5" strokeDasharray="3,3" />
            </svg>
          </div>

          <div className="absolute bottom-5 left-5 bg-white/90 border border-cream-300 py-1.5 px-3 rounded-full text-[9px] font-mono tracking-widest text-gray-500 font-bold pointer-events-none select-none">
            LAT 20.24N • LON 20.26E
          </div>
        </div>

        {/* RIGHT ZONE: Info Showcase diary leaf */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {selectedSpot ? (
              <motion.div
                key={selectedSpot.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-[#ebdcb9] p-6 sm:p-7 rounded-3xl shadow-xl text-left flex flex-col h-full relative"
                id="map-details-card"
              >
                {/* Torn paper design */}
                <div className="absolute top-2 right-2 flex gap-1 select-none pointer-events-none font-mono text-xs opacity-20">
                  <span>GPS: SPOT0{selectedSpot.id.replace('spot', '')}</span>
                </div>

                <div className="flex items-center gap-1.5 text-lavender-300 font-bold uppercase tracking-widest text-[10px] mb-2 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-pink-400" />
                  <span>Interactive Log</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-gray-800 font-bold leading-tight">
                  {selectedSpot.name}
                </h3>
                <p className="text-xs text-gray-400 font-mono italic inline-block mt-0.5 uppercase tracking-wider">
                  VISITED: {selectedSpot.visitedDate}
                </p>

                {/* Cozy handwriting body text */}
                <div className="mt-5 flex-1 p-4 bg-cream-100/40 rounded-2xl border border-[#eee5cc] italic font-hand text-2xl text-gray-700 leading-snug">
                  "{selectedSpot.details}"
                </div>

                {/* Specific Food Menu detail */}
                {selectedSpot.specialDish && (
                  <div className="mt-5 p-3.5 bg-lavender-100/40 rounded-xl border border-lavender-200/50 flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-lavender-400" />
                    <div>
                      <span className="block text-[9px] text-[#94a3b8] tracking-widest uppercase font-mono font-bold leading-none">
                        Our Star Order:
                      </span>
                      <span className="text-sm font-sans font-semibold text-gray-700">
                        {selectedSpot.specialDish}
                      </span>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setSelectedSpot(null)}
                  className="mt-6 text-center text-xs text-gray-400 hover:text-gray-700 font-mono uppercase tracking-widest cursor-pointer underline flex items-center gap-1 self-center"
                >
                  <X className="w-3.5 h-3.5" /> Close Details
                </button>
              </motion.div>
            ) : (
              /* IDLE VIEW */
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-cream-100/40 border-2 border-dashed border-cream-400 p-8 rounded-3xl text-center flex flex-col items-center justify-center h-full min-h-[300px]"
              >
                <span className="p-4 rounded-full bg-white text-cream-400 border border-cream-300/60 mb-4 animate-float shadow">
                  <MapPin className="w-6 h-6" />
                </span>
                <h4 className="text-base font-serif font-bold text-gray-700">Select key star on the map</h4>
                <p className="text-xs text-gray-400 max-w-[200px] mt-1 font-serif">
                  Unlock the cozy coordinates of our college benches, Saree photoshoot gardens, and cozy coffee spots!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
