import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, Key, Sparkles, Heart, Gift, BookOpen, AlertCircle, HelpCircle } from 'lucide-react';

export default function SecretSection() {
  const [passcode, setPasscode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [collectedStar, setCollectedStar] = useState(false);

  const attemptUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = passcode.trim().toLowerCase();
    
    if (normalized === 'yashasvi' || normalized === 'yashu') {
      setIsUnlocked(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect clue spelling, try again! Hint: Recipient name in full letters!');
    }
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" id="secret-vault">
      
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-600 font-bold uppercase tracking-widest text-xs mb-3">
          <Lock className="w-3.5 h-3.5" />
          <span>Restricted Sanctuary</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif text-gray-800 font-bold tracking-tight">
          The Secret <span className="font-hand text-pink-400 italic text-4xl sm:text-6xl text-sans">Vault</span>
        </h2>
        <p className="max-w-md mx-auto mt-2 text-sm text-gray-500 font-sans">
          Guarded by Ghibli protection charms. Unravel the password to extract raw unfiltered confessions.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          /* LOCKED KEYPAD INTERFACE panel */
          <motion.div
            key="locked"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="max-w-md mx-auto bg-white border border-[#ebdcb9] p-6 sm:p-9 rounded-3xl shadow-xl text-center"
            id="vault-keypad-box"
          >
            <div className="w-14 h-14 rounded-full bg-rose-50 border border-rose-200 text-rose-400 flex items-center justify-center mx-auto mb-5 shadow animate-float">
              <Lock className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-serif font-black text-gray-800 leading-none">
              CHARMED LOCK ACTIVATED
            </h3>
            <p className="text-xs text-gray-400 mt-1 font-mono uppercase tracking-widest">
              Please enter the passcode key
            </p>

            {/* Micro Clues box */}
            <div className="mt-5 p-4 border border-cream-300 rounded-2xl bg-cream-100/50 text-left relative flex gap-2">
              <HelpCircle className="w-5 h-5 text-lavender-300 shrink-0 mt-0.5" />
              <div>
                <span className="text-[9px] font-mono tracking-widest text-[#94a3b8] font-bold block uppercase leading-none">
                  Scribbled clue on box:
                </span>
                <span className="text-sm font-hand text-2xl text-gray-650 leading-snug">
                  "Whose beautiful presence is this entire website dedicated to? (Begins with Y, ends with I. Spell her full name correctly!)"
                </span>
              </div>
            </div>

            <form onSubmit={attemptUnlock} className="mt-6 flex flex-col gap-3">
              <input
                type="text"
                placeholder="Ex. Yashasvi"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full border-2 border-cream-300 bg-cream-50/10 px-4 py-3 rounded-2xl text-center font-sans font-bold text-gray-700 tracking-widest focus:outline-none focus:border-rose-300 placeholder-gray-300 uppercase shrink"
              />

              {errorMsg && (
                <div className="flex items-center gap-1.5 text-xs text-rose-500 font-semibold justify-center">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                className="bg-rose-300 hover:bg-rose-400 text-white font-bold py-3.5 px-6 rounded-2xl shadow hover:translate-y-[-1px] transition-all cursor-pointer mt-2 uppercase tracking-widest text-xs flex items-center justify-center gap-2"
              >
                <Key className="w-4 h-4" /> Unlock Vault
              </button>
            </form>

          </motion.div>
        ) : (
          /* UNLOCKED CONFIDENTIAL VAULT display */
          <motion.div
            key="unlocked"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-white border border-emerald-300 p-6 sm:p-10 rounded-2xl shadow-2xl text-left relative overflow-hidden"
            id="vault-confessional"
          >
            {/* Green glowing header outline bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#10b981]"></div>

            <div className="flex items-center justify-between border-b border-cream-200 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-full animate-float">
                  <Unlock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[8px] font-mono text-emerald-500 font-bold tracking-[0.25em] block leading-none">
                    DECRYPT SUCCESSFUL
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-gray-800 font-bold block">Confessional Chamber</h3>
                </div>
              </div>

              {/* Gold collectable star sticker */}
              {!collectedStar ? (
                <button
                  onClick={() => setCollectedStar(true)}
                  className="bg-yellow-100 hover:bg-yellow-200 border border-yellow-300 text-yellow-600 font-bold py-2 px-3 rounded-full text-[10px] uppercase font-mono tracking-wider flex items-center gap-1 cursor-pointer animate-pulse"
                >
                  ⭐ Capture Secret Star!
                </button>
              ) : (
                <span className="text-[10px] uppercase font-mono text-emerald-600 bg-emerald-50 py-1 px-3.5 rounded-full border border-emerald-300">
                  💖 Collectable Captured!
                </span>
              )}
            </div>

            <div className="space-y-6">
              {/* Confession block 1 */}
              <div className="p-5 bg-cream-100/50 border border-[#ebdcb9] rounded-2xl relative">
                {/* Washi tape */}
                <div className="absolute -top-3 left-10 w-20 h-5 bg-emerald-100 border border-emerald-200 rotate-2 select-none pointer-events-none"></div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-emerald-600 mb-2 font-mono flex items-center gap-1">
                  <BookOpen className="w-4 h-4" /> Message No. 01: The Truthful confession
                </h4>
                <p className="font-hand text-2xl text-gray-700 leading-relaxed">
                  "Yashu, starting college with people drifting, I was so terrified. I thought friendships are disposable. But when conflicts happened and group chats became toxic dungeons, you looked me in the eyes and said: 'I have your back.' That felt like a massive shield. I want you to know I cherish you more than any espresso or fancy lattes."
                </p>
              </div>

              {/* Confession block 2 */}
              <div className="p-5 bg-cream-100/50 border border-[#ebdcb9] rounded-2xl relative">
                <div className="absolute -top-3 right-10 w-20 h-5 bg-purple-100 border border-purple-200 -rotate-2 select-none pointer-events-none"></div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-purple-600 mb-2 font-mono flex items-center gap-1">
                  <Heart className="w-4 h-4 text-pink-400" /> Confession No. 02: On Anger and Silence
                </h4>
                <p className="font-hand text-2xl text-gray-700 leading-relaxed">
                  "I know I am very hard to handle. I get mad easily, raise storm walls, and shut people out. Usually, they run. You are the only soul who waits patiently, feeds me pastries, and stands underneath the canopy of my anger until the rain stops. You are literally my anger coach. Thank you for staying."
                </p>
              </div>
            </div>

            {collectedStar && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 border border-yellow-300 bg-yellow-50/40 rounded-2xl text-center"
              >
                <div className="flex justify-center text-2xl mb-1 select-none">✨🕵️💫</div>
                <p className="text-xs font-serif text-amber-800 font-bold leading-tight">
                  Congratulations Yashu! You discovered the hidden collectible star of Anika's heart. Your friendship status is officially rated: "Indestructibly Legendary".
                </p>
              </motion.div>
            )}

            <div className="mt-8 pt-4 border-t border-cream-200 text-center font-mono text-[9px] text-[#94a3b8] flex items-center justify-between">
              <span>AUTHORIZED ACCESS ONLY</span>
              <span className="font-bold text-emerald-500 uppercase">UNLOCKED • 🔓</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
