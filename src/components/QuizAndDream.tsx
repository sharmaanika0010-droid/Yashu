import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trophy, CheckSquare, Square, ChevronRight, RotateCcw, ShieldCheck, Heart, Trash2, Edit3, Plus } from 'lucide-react';
import { QUIZ_QUESTIONS, DREAM_GOALS_LIST } from '../data';
import { QuizQuestion, DreamGoal } from '../types';

export default function QuizAndDream() {
  // Quiz states
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Dream list states
  const [dreams, setDreams] = useState<DreamGoal[]>(DREAM_GOALS_LIST);
  const [newDreamText, setNewDreamText] = useState('');
  const [newDreamCat, setNewDreamCat] = useState<'travel' | 'adventure' | 'silly' | 'lifegoal'>('travel');

  // Submit quiz choice
  const handleQuizChoice = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const submitQuizAnswer = () => {
    if (selectedOption === null || isSubmitted) return;
    
    setIsSubmitted(true);
    const correct = QUIZ_QUESTIONS[currentQuizIndex].correctAnswer;
    if (selectedOption === correct) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuizQuestion = () => {
    setSelectedOption(null);
    setIsSubmitted(false);

    if (currentQuizIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  // Toggle bucket list items
  const toggleDream = (id: string) => {
    setDreams(prev => prev.map(d => d.id === id ? { ...d, completed: !d.completed } : d));
  };

  // Add custom dream
  const addCustomDream = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDreamText.trim()) return;

    const emojisMap = {
      travel: '✈️',
      adventure: '🧗',
      silly: '🤡',
      lifegoal: '🎓'
    };

    const newDreamItem: DreamGoal = {
      id: `d-custom-${Date.now()}`,
      item: newDreamText,
      category: newDreamCat,
      completed: false,
      emoji: emojisMap[newDreamCat] || '⭐'
    };

    setDreams(prev => [...prev, newDreamItem]);
    setNewDreamText('');
  };

  // Delete custom dream
  const deleteDream = (id: string) => {
    setDreams(prev => prev.filter(d => d.id !== id));
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="quiz-dream-wall">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* LEFT COLUMN: THE CRINGE / FUN TRIVIA QUIZ */}
        <div className="bg-white border border-[#ebdcb9] p-6 sm:p-9 rounded-3xl shadow-xl text-left relative min-h-[440px] flex flex-col justify-between" id="friendship-trivia">
          <div className="absolute top-4 right-4 text-xs font-mono text-gray-300 font-bold tracking-widest pointer-events-none uppercase">
            BESTIE TEST
          </div>

          <div className="flex items-center gap-2 text-lavender-300 font-mono text-[10px] uppercase tracking-widest font-bold mb-4">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span>Trivia Arena • Round {currentQuizIndex + 1} of {QUIZ_QUESTIONS.length}</span>
          </div>

          <AnimatePresence mode="wait">
            {!quizFinished ? (
              /* ACTIVE QUESTIONS VIEW */
              <motion.div
                key={currentQuizIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex flex-col justify-start"
              >
                <h3 className="text-xl sm:text-2xl font-serif text-gray-800 font-bold leading-tight mb-6">
                  {QUIZ_QUESTIONS[currentQuizIndex].question}
                </h3>

                <div className="space-y-2.5">
                  {QUIZ_QUESTIONS[currentQuizIndex].options.map((opt, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrectOption = idx === QUIZ_QUESTIONS[currentQuizIndex].correctAnswer;
                    
                    let btnStyle = "border-cream-300 bg-cream-50/20 text-gray-700 hover:bg-cream-100/40";
                    if (isSelected) {
                      btnStyle = "bg-lavender-100 border-lavender-300 text-gray-800 font-semibold";
                    }
                    if (isSubmitted) {
                      if (isCorrectOption) {
                        btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-800 font-bold";
                      } else if (isSelected) {
                        btnStyle = "bg-rose-100 border-rose-300 text-rose-800";
                      } else {
                        btnStyle = "opacity-45 bg-gray-50 border-gray-200 text-gray-400";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleQuizChoice(idx)}
                        disabled={isSubmitted}
                        className={`w-full p-3.5 text-left rounded-xl border text-sm transition-all duration-200 cursor-pointer ${btnStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {/* Submit / Next Button controls */}
                <div className="mt-8 flex items-center justify-between gap-4">
                  {isSubmitted ? (
                    <div className="text-xs sm:text-sm text-gray-600 italic font-serif">
                      💡 {QUIZ_QUESTIONS[currentQuizIndex].explanation}
                    </div>
                  ) : (
                    <div className="text-xs text-gray-400 font-mono">
                      Please pick your truthful answer
                    </div>
                  )}

                  {!isSubmitted ? (
                    <button
                      onClick={submitQuizAnswer}
                      disabled={selectedOption === null}
                      className={`py-2.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors ${selectedOption === null ? 'bg-cream-200 text-gray-400' : 'bg-pink-300 text-white shadow hover:bg-pink-400'}`}
                    >
                      Acknowledge
                    </button>
                  ) : (
                    <button
                      onClick={nextQuizQuestion}
                      className="py-2.5 px-6 rounded-full text-xs font-bold uppercase tracking-widest bg-lavender-200 hover:bg-lavender-300 text-white shadow cursor-pointer flex items-center gap-1"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </motion.div>
            ) : (
              /* FINISHED VIEW SHOW DIPLOMA */
              <motion.div
                key="diploma"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center p-4 border border-[#e2d6b3] rounded-2xl bg-cream-100/50"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-100 border-2 border-yellow-300 text-yellow-500 flex items-center justify-center text-3xl shadow-md mb-4 animate-bounce">
                  🏆
                </div>

                <span className="text-[9px] font-mono tracking-[0.25em] text-pink-400 uppercase font-black block">
                  Bestie IQ results
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-gray-800 font-bold leading-tight mt-1">
                  Quiz Completed!
                </h3>
                <p className="text-sm text-gray-500 mt-1 max-w-[280px] font-sans">
                  You successfully scored <strong className="text-pink-500 font-mono">{score} / {QUIZ_QUESTIONS.length}</strong>! 
                </p>

                {score === QUIZ_QUESTIONS.length ? (
                  <div className="mt-6 p-4 border-2 border-dashed border-emerald-400 bg-emerald-50/50 rounded-2xl max-w-sm" id="bestie-diploma">
                    <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1 mb-1">
                      <ShieldCheck className="w-4 h-4" /> Gold Grade Bestie Certified
                    </span>
                    <p className="text-xs text-emerald-700 font-hand text-xl">
                      "Yashasvi holds the absolute highest knowledge parameters of Anika's weird logic systems and tantrum schedules. Valid for eternity!"
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 p-4 border-2 border-dashed border-yellow-300 bg-yellow-50/50 rounded-2xl max-w-sm">
                    <span className="text-amber-600 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1 mb-1">
                      Silver grade accomplice
                    </span>
                    <p className="text-xs text-[#b45309] font-hand text-xl">
                      "A beautiful score! You know me better than anyone anyway. Let's coffee and close the gap!"
                    </p>
                  </div>
                )}

                <button
                  onClick={restartQuiz}
                  className="mt-8 flex items-center gap-1 text-xs uppercase tracking-widest font-mono text-gray-400 hover:text-gray-700 cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-4.5 h-4.5" /> Retry bestie test
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* RIGHT COLUMN: INTERACTIVE BUCKET LIST / DREAM WALL */}
        <div className="bg-white border border-[#ebdcb9] p-6 sm:p-9 rounded-3xl shadow-xl text-left flex flex-col justify-between min-h-[440px]" id="bucket-list">
          
          <div>
            <div className="flex items-center gap-2 text-lavender-300 font-mono text-[10px] uppercase tracking-widest font-bold mb-3">
              <CheckSquare className="w-5 h-5 text-pink-400" />
              <span>Friendship Dream Wall & Bucket list</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif text-gray-800 font-semibold leading-tight">
              Our Future <span className="font-hand text-pink-400 italic text-2xl sm:text-4xl text-sans">Visions Together</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1 font-serif">
              Ticking off adventures we must survive side-by-side. Yashu, feel free to add your own secret dreams inside the scribbler!
            </p>

            {/* Scrollable list of items */}
            <div className="mt-6 space-y-2 max-h-[220px] overflow-y-auto pr-2" id="dreams-scroller">
              {dreams.map((dream) => (
                <div
                  key={dream.id}
                  className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-colors ${dream.completed ? 'bg-cream-100/30 border-cream-200/50 opacity-60' : 'bg-[#fffefe] border-cream-300 hover:bg-cream-50/10'}`}
                >
                  <button
                    onClick={() => toggleDream(dream.id)}
                    className="flex-1 flex items-center gap-3 text-left font-serif text-sm cursor-pointer select-none"
                  >
                    <span className="text-lg shrink-0">{dream.emoji}</span>
                    <span className={`text-gray-700 font-semibold text-xs sm:text-sm font-sans ${dream.completed ? 'line-through text-gray-400' : ''}`}>
                      {dream.item}
                    </span>
                  </button>

                  <div className="flex items-center gap-2">
                    {dream.targetYear && (
                      <span className="text-[9px] text-[#94a3b8] font-mono border border-cream-300 rounded px-1.5 py-0.5 uppercase tracking-wide">
                        BY {dream.targetYear}
                      </span>
                    )}
                    {/* Only allow deleting custom goals to keep primary list clean */}
                    {dream.id.startsWith('d-custom-') && (
                      <button
                        onClick={() => deleteDream(dream.id)}
                        className="text-gray-400 hover:text-red-500 rounded p-1 transition-colors cursor-pointer"
                        title="Delete custom goal"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ADD CUSTOM GOAL FORM PANEL */}
          <form onSubmit={addCustomDream} className="mt-6 border-t border-cream-200 pt-4" id="dream-add-form">
            <span className="text-[10px] font-mono text-[#94a3b8] uppercase font-bold tracking-wider block mb-2">
              Scribble a new dream together:
            </span>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ex. Move to Ghibli cottage..."
                value={newDreamText}
                onChange={(e) => setNewDreamText(e.target.value)}
                maxLength={50}
                className="flex-1 border border-cream-300 rounded-xl bg-cream-50/10 px-3.5 py-2 text-xs font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-300"
              />

              {/* Categorization selector */}
              <select
                value={newDreamCat}
                onChange={(e: any) => setNewDreamCat(e.target.value)}
                className="border border-cream-300 rounded-xl bg-white text-xs px-2.5 py-2 text-gray-600 focus:outline-none focus:border-pink-300 cursor-pointer"
              >
                <option value="travel">✈️ Travel</option>
                <option value="adventure">🛡️ Adv</option>
                <option value="silly">🤡 Silly</option>
                <option value="lifegoal">🎓 Goal</option>
              </select>

              <button
                type="submit"
                className="bg-lavender-200 hover:bg-lavender-300 text-white rounded-xl p-2 px-3 shadow cursor-pointer transition-colors"
                title="Add dream"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </form>

        </div>

      </div>

    </section>
  );
}
