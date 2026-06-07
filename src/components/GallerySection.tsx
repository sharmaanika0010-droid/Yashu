import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Eye, X, ZoomIn, Heart, Sparkles } from 'lucide-react';

interface PolaroidItem {
  id: string;
  src: string;
  title: string;
  date: string;
  caption: string;
  rot: number; // degrees rotate
  comment: string;
}

export default function GallerySection({ friendsStarryImg, ghibliMeadowImg }: { friendsStarryImg: string, ghibliMeadowImg: string }) {
  const [selectedPhoto, setSelectedPhoto] = useState<PolaroidItem | null>(null);
  const [swipeSplitPos, setSwipeSplitPos] = useState(50); // percentage of before/after split slider
  const [isSliding, setIsSliding] = useState(false);

  const photos: PolaroidItem[] = [
    {
      id: 'p1',
      src: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=600", // Vintage books / diary vibe
      title: "Our Saree Day Portrait",
      date: "Nov 14, 2024",
      caption: "Pinning sarees & matching jewels",
      rot: -3,
      comment: "You looked so stunning in your green saree yashu! Everyone in college literally stopped to admire us. Seven pins, two YouTube tutorials, and absolute laughter!"
    },
    {
      id: 'p2',
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600", // Cozy warm cafe
      title: "Spilling The Tea",
      date: "Apr 03, 2024",
      caption: "Hazelnut coffee over drama",
      rot: 2,
      comment: "Our favorite corner table where we discussed everything, survived major group splits, and built an impenetrable alliance."
    },
    {
      id: 'p3',
      src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=600", // Celestial sun breaking clouds
      title: "Under Ghibli Skies",
      date: "Jul 20, 2025",
      caption: "Stargazing and deep vows",
      rot: -1.5,
      comment: "When everything is changing in this university world, you and I sitting on the grass at night was the most steady, beautiful peaceful reality."
    },
    {
      id: 'p4',
      src: friendsStarryImg,
      title: "Our Constellation",
      date: "Present 2026",
      caption: "Our friendship story in stars",
      rot: 4,
      comment: "This original Ghibli painting represents our souls: sitting forever, looking upwards towards a glittering pink and lavender sky with fireflies."
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSliding) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSwipeSplitPos(percentage);
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="photo-gallery">
      
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-600 font-bold uppercase tracking-widest text-xs mb-3">
          <Camera className="w-3.5 h-3.5" />
          <span>Interactive Photo Wall</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif text-gray-800 font-bold tracking-tight">
          Memory <span className="font-hand text-pink-400 italic text-4xl sm:text-6xl text-sans">Polaroids</span>
        </h2>
        <p className="max-w-md mx-auto mt-2 text-sm text-gray-500 font-sans">
          Click on any photo to inspect the handwritten thoughts behind them.
        </p>
      </div>

      {/* BEFORE AFTER INTERACTIVE SPLIT SLIDER SEGMENT */}
      <div className="mb-20 max-w-2xl mx-auto bg-white border border-cream-400/60 p-4 rounded-3xl shadow-xl flex flex-col items-center">
        <div className="flex items-center gap-1.5 text-xs text-lavender-300 font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '4s' }} />
          <span>Before vs After: The Royal Upgrade!</span>
        </div>
        
        {/* The slider container */}
        <div 
          className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-cream-300 shadow-inner"
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsSliding(true)}
          onMouseUp={() => setIsSliding(false)}
          onMouseLeave={() => setIsSliding(false)}
          onTouchMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const touch = e.touches[0];
            const x = touch.clientX - rect.left;
            const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
            setSwipeSplitPos(percentage);
          }}
        >
          {/* BEFORE: Left Side (Campus Assignment Struggle) */}
          <div className="absolute inset-0 bg-[#e0eaeb]">
            <img 
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=700" 
              alt="Assignment files piling up" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale opacity-80"
            />
            {/* Stamp label */}
            <div className="absolute bottom-4 left-4 bg-gray-800/80 text-white font-mono text-[10px] px-2 py-1 rounded tracking-widest uppercase">
              January 2024 • Boring Assignments & Nervous Hello
            </div>
          </div>

          {/* AFTER: Right Side (Royal Saree Upgradation) */}
          <div 
            className="absolute inset-y-0 right-0 overflow-hidden"
            style={{ left: `${swipeSplitPos}%` }}
          >
            <div className="absolute inset-y-0 right-0 w-full" style={{ width: '640px', right: 0 }}>
              <img 
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=700" // A beautiful Indian textile / colorful background representing sarees
                alt="Colorful traditional sarees" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            {/* Stamp label */}
            <div className="absolute bottom-4 right-4 bg-pink-500/85 text-white font-mono text-[10px] px-2 py-1 rounded tracking-widest uppercase shadow">
              Present 2026 • Ghibli Saree Queens! 🌸
            </div>
          </div>

          {/* Split line separator handle */}
          <div 
            className="absolute top-0 bottom-0 w-1.5 bg-white shadow-xl cursor-ew-resize flex items-center justify-center"
            style={{ left: `${swipeSplitPos}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-white border-2 border-pink-300 shadow flex items-center justify-center text-xs font-bold text-pink-400 select-none">
              ↔
            </div>
          </div>

        </div>
        <p className="text-center text-xs text-gray-400 font-mono italic mt-3">
          Drag or move your cursor across the photo to watch our magical upgrade!
        </p>
      </div>

      {/* PHOTO POLAROID WALL MASONRY LAYOUT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2" id="polaroids-grid">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ rotate: `${photo.rot}deg` }}
            onClick={() => setSelectedPhoto(photo)}
            className="polaroid-card cursor-zoom-in"
          >
            <div className="relative aspect-square overflow-hidden bg-cream-200 rounded mb-3 group">
              <img 
                src={photo.src} 
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-80" />
              </div>
            </div>

            <div className="text-center font-hand text-xl text-gray-700">
              {photo.caption}
            </div>
            <div className="text-[9px] text-gray-400 uppercase tracking-widest mt-1 text-center font-mono">
              {photo.date}
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULL SCREEN DREAMS LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black/65 z-[100] backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#fffefc] border-2 border-[#ebdcb9] max-w-md w-full p-4 sm:p-6 rounded-3xl shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-cream-200 text-gray-600 transition-all cursor-pointer shadow"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-cream-200 border border-cream-300">
                <img 
                  src={selectedPhoto.src} 
                  alt={selectedPhoto.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Memory description */}
              <div className="mt-5 text-left">
                <span className="text-[10px] font-mono tracking-widest text-[#94a3b8] uppercase font-semibold">
                  {selectedPhoto.date} • PHOTO RECORDING
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-gray-800 font-bold leading-tight mt-0.5">
                  {selectedPhoto.title}
                </h3>
                
                <div className="mt-3 bg-pink-100/30 p-4 border-l-4 border-pink-300 rounded-r-xl italic font-hand text-2xl text-gray-700">
                  "{selectedPhoto.comment}"
                </div>

                <div className="flex justify-between items-center mt-4 text-[11px] font-mono text-gray-400 border-t border-cream-200 pt-3">
                  <span>CAP: {selectedPhoto.caption}</span>
                  <span className="flex items-center gap-1 text-pink-400">
                    <Heart className="w-3.5 h-3.5 fill-pink-300 text-pink-300" />
                    Undefeated Duo
                  </span>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
