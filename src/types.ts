export interface Memory {
  id: string;
  year: number;
  date: string;
  title: string;
  description: string;
  image?: string;
  tag: 'Milestone' | 'Cafe' | 'College' | 'Saree Day' | 'Drama Survival' | 'Laughs';
  bgColor?: string;
  stickers?: string[];
  doodles?: string[];
}

export interface FirstItem {
  id: string;
  title: string;
  date: string;
  story: string;
  location: string;
  icon: string;
  illustrationBg?: string;
  personalNote?: string;
}

export interface InsideJoke {
  id: string;
  quote: string;
  context: string;
  severity: 'mild' | 'spicy' | 'chaotic';
  memeImg?: string;
}

export interface OpenWhenLetter {
  id: string;
  type: 'happy' | 'sad' | 'angry' | 'missing' | 'custom';
  title: string;
  envelopeColor: string;
  emoji: string;
  prompt: string;
  content: string;
  specialAdvice: string[];
}

export interface MemoryPosition {
  id: string;
  name: string;
  description: string;
  x: number; // percentage coordinate 0-100 on the custom illustrated map
  y: number; // percentage coordinate 0-100 on the custom illustrated map
  details: string;
  visitedDate: string;
  specialDish?: string;
}

export interface DreamGoal {
  id: string;
  item: string;
  category: 'travel' | 'adventure' | 'silly' | 'lifegoal';
  completed: boolean;
  targetYear?: string;
  emoji: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
