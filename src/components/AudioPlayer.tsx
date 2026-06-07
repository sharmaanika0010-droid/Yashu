import React, { useRef, useState, useEffect } from 'react';
import { Music, Play, Pause, Volume2, VolumeX, Eye, Sparkles } from 'lucide-react';

interface Track {
  name: string;
  description: string;
  notes: number[][]; // [frequency, duration, delay]
}

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<any>(null);
  const currentNodesRef = useRef<AudioNode[]>([]);

  // Dreamy chord progression: Cmaj9 -> Fmaj7 -> Am9 -> Gsus4
  // Notes in MIDI, converted to of Hertz
  const tracks: Track[] = [
    {
      name: "Sparkle of Yashasvi",
      description: "Tender, starry arpeggios of our beginning",
      notes: [
        // Pitch (Hz), Duration (s), Delay from previous note (s)
        [261.63, 1.2, 0],   // C4
        [329.63, 1.2, 0.2], // E4
        [392.00, 1.2, 0.4], // G4
        [493.88, 1.5, 0.6], // B4
        [587.33, 2.0, 0.8], // D5 (twinkle)
        // Fmaj7 arpeggios
        [349.23, 1.2, 1.6], // F4
        [440.00, 1.2, 1.8], // A4
        [523.25, 1.5, 2.0], // C5
        [659.25, 2.0, 2.2], // E5 (twinkle)
        // Am9
        [220.00, 1.2, 3.2], // A3
        [329.63, 1.2, 3.4], // E4
        [440.00, 1.2, 3.6], // A4
        [523.25, 1.2, 3.8], // C5
        [587.33, 2.0, 4.0], // D5
        // G11
        [196.00, 1.2, 4.8], // G3
        [293.66, 1.2, 5.0], // D4
        [392.00, 1.2, 5.2], // G4
        [440.00, 1.2, 5.4], // A4
        [493.88, 2.5, 5.6], // B4
      ]
    },
    {
      name: "Ghibli Summer Meadow",
      description: "Warm, nostalgic breeze in a flower hill",
      notes: [
        [293.66, 1.2, 0],   // D4
        [369.99, 1.2, 0.25], // F#4
        [440.00, 1.2, 0.5],  // A4
        [554.37, 2.0, 0.75], // C#5
        // Gmaj7
        [196.00, 1.2, 1.5],  // G3
        [293.66, 1.2, 1.75], // D4
        [392.00, 1.2, 2.0],  // G4
        [493.88, 2.2, 2.25], // B4
        // Em9
        [164.81, 1.2, 3.0],  // E3
        [261.63, 1.2, 3.25], // C4
        [329.63, 1.2, 3.5],  // E4
        [392.00, 2.0, 3.75], // G4-B4
        // A7sus4
        [220.00, 1.2, 4.5],  // A3
        [293.66, 1.2, 4.75], // D4
        [440.00, 1.2, 5.0],  // A4
        [587.33, 2.5, 5.25], // D5
      ]
    },
    {
      name: "Saree Day Lullaby",
      description: "Soft, traditional memories of dressing up",
      notes: [
        [329.63, 1.5, 0],    // E4
        [392.00, 1.5, 0.3],  // G4
        [493.88, 1.5, 0.6],  // B4
        [587.33, 2.5, 0.9],  // D5
        // Cmaj7
        [261.63, 1.5, 1.8],  // C4
        [329.63, 1.5, 2.1],  // E4
        [440.00, 1.5, 2.4],  // A4
        [523.25, 2.5, 2.7],  // C5
        // G/B
        [246.94, 1.5, 3.6],  // B3
        [329.63, 1.5, 3.9],  // E4
        [392.00, 1.5, 4.2],  // G4
        [587.33, 2.5, 4.5],  // D5
        // D7
        [293.66, 1.5, 5.4],  // D4
        [349.23, 1.5, 5.7],  // F4
        [440.00, 1.5, 6.0],  // A4
        [698.46, 3.0, 6.3],  // F5
      ]
    }
  ];

  const playSynthesizedTone = (freq: number, duration: number, delayTime: number) => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;

    // Create custom oscillator and gain node (synthesizer engine)
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    // Use a soft sine-triangle hybrid waveshape (sounds like a dreamy vintage music box)
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, ctx.currentTime + delayTime);

    // Dynamic Filter for warmer sound
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, ctx.currentTime + delayTime);
    filter.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + delayTime + duration);

    // Velvet envelope: instant attack, long, warm decay and release
    const gainVal = isMuted ? 0 : volume * 0.15;
    gainNode.gain.setValueAtTime(0, ctx.currentTime + delayTime);
    gainNode.gain.linearRampToValueAtTime(gainVal, ctx.currentTime + delayTime + 0.08); // attack
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delayTime + duration); // release

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(ctx.currentTime + delayTime);
    osc.stop(ctx.currentTime + delayTime + duration);

    // Keep reference to nodes to cleanup if stopped
    currentNodesRef.current.push(osc, gainNode);
  };

  const startPlaying = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    setIsPlaying(true);
    const track = tracks[currentTrackIndex];
    let cycleDuration = Math.max(...track.notes.map(n => n[2] + n[1])) * 1000 + 400;

    // Play initial cycle
    track.notes.forEach(([freq, dur, del]) => {
      playSynthesizedTone(freq, dur, del);
    });

    // Schedule subsequent loops
    intervalRef.current = setInterval(() => {
      track.notes.forEach(([freq, dur, del]) => {
        playSynthesizedTone(freq, dur, del);
      });
    }, cycleDuration);
  };

  const stopPlaying = () => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Fade out active synthesizer sounds
    try {
      currentNodesRef.current.forEach((node: any) => {
        if (node.stop) {
          node.stop();
        }
      });
    } catch (e) {
      // ignore state limits
    }
    currentNodesRef.current = [];
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopPlaying();
    } else {
      startPlaying();
    }
  };

  // Track switching
  const handleTrackChange = (index: number) => {
    stopPlaying();
    setCurrentTrackIndex(index);
    // Auto-resume after short delay
    setTimeout(() => {
      if (isPlaying || !isPlaying) {
        startPlaying();
      }
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-cream-100/90 backdrop-blur-md border border-cream-400 p-4 rounded-3xl shadow-lg flex items-center gap-4 transition-all duration-300 max-w-sm sm:max-w-md animate-float" id="background-music-player">
      {/* Tape Spinning Visualization */}
      <div className={`relative w-12 h-12 rounded-full border-2 border-cream-400 bg-cream-300 flex items-center justify-center overflow-hidden shrink-0 ${isPlaying ? 'animate-spin duration-1000' : ''}`}>
        <DiscIcon className="w-8 h-8 text-cream-400" />
        <div className="absolute w-3 h-3 rounded-full bg-cream-100 border border-cream-400"></div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 text-xs text-lavender-300 font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Background Song</span>
        </div>
        <h4 className="text-sm font-semibold truncate text-cream-100 bg-cream-400/0 text-sans text-gray-800 leading-tight">
          {tracks[currentTrackIndex].name}
        </h4>
        <p className="text-[11px] text-gray-500 font-medium truncate font-serif italic">
          {tracks[currentTrackIndex].description}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        {/* Play Pause */}
        <button
          onClick={togglePlay}
          className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer ${isPlaying ? 'bg-lavender-300 text-white shadow-md shadow-lavender-200' : 'bg-cream-300 hover:bg-cream-400 text-gray-700'}`}
          title={isPlaying ? "Pause music" : "Play warm background music"}
          id="music-play-pause"
        >
          {isPlaying ? <Pause className="w-4 h-4 ml-0" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        {/* Mute toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 rounded-full bg-cream-200 hover:bg-cream-300 text-gray-600 transition-all cursor-pointer"
          title={isMuted ? "Unmute" : "Mute"}
          id="music-mute-toggle"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Popovers or Tracks Drawer list */}
      <div className="hidden sm:flex flex-col gap-1 text-[10px] text-gray-400 border-l border-cream-300 pl-3">
        {tracks.map((t, idx) => (
          <button
            key={t.name}
            onClick={() => handleTrackChange(idx)}
            className={`text-left hover:text-lavender-300 font-medium truncate cursor-pointer transition-colors max-w-[80px] ${currentTrackIndex === idx ? 'text-lavender-300 font-bold' : 'text-gray-500'}`}
          >
            {t.name.split(' ')[0]}..
          </button>
        ))}
      </div>
    </div>
  );
}

function DiscIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 12a1 2 0 1 0 0 2 1 2 0 0 0 0-2z" />
      <path d="M12 2a10 10 0 0 1 8 5" />
    </svg>
  );
}
