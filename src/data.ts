import { Memory, FirstItem, InsideJoke, OpenWhenLetter, MemoryPosition, DreamGoal, QuizQuestion } from './types';

export const PERSONAL_STORY_HIGHLIGHTS = {
  intro: "Our friendship began in 2024 through a mutual friend. In a world full of noise, Yashasvi was the only person who truly understood me when no one else did. We survived the drama, the drifting friend groups, the chaotic assignments, and built a beautiful, unbreakable story.",
  sareeDay: "We fulfilled our silly dreams together, including dressing up in gorgeous sarees and taking beautiful photos, laughing like teenagers. These are moments preserved in amber.",
  angerBond: "I got angry countless times, but never once did I want to lose you. You are the only person who can handle my storm, anchor me, and stay by my side.",
  stats: {
    daysCount: Math.floor((new Date().getTime() - new Date('2024-01-15').getTime()) / (1000 * 60 * 60 * 24)),
    photosTaken: "10,000+",
    cafesVisits: "42",
    canteenHours: "150+",
    fightsSurvived: "8",
    reconciliations: "8"
  }
};

export const MEMORIES_LIST: Memory[] = [
  {
    id: 'm1',
    year: 2024,
    date: 'Jan 15, 2024',
    title: 'The Spark of Us',
    description: 'We were introduced by a mutual friend. Little did we know that from a simple, polite "Hi!", we were about to co-write our absolute favorite chapters of life.',
    tag: 'Milestone',
    bgColor: '#ffebeb',
    stickers: ['✨', '🌱'],
    doodles: ['🌸']
  },
  {
    id: 'm2',
    year: 2024,
    date: 'Apr 03, 2024',
    title: 'Chai, Lattea & Endless Rants',
    description: 'Our first deep, unfiltered talk at our favorite cafe. We spoke about everything—dreams, traumas, and silly things in the college canteen, realizing we possessed matching souls.',
    tag: 'Cafe',
    bgColor: '#faf5ff',
    stickers: ['☕', '🍪'],
    doodles: ['💡']
  },
  {
    id: 'm3',
    year: 2024,
    date: 'Sep 12, 2024',
    title: 'Surviving the Big Drift',
    description: 'Conflicts shook our entire friend group and people slowly drifted away. It was a chaotic storm, but somehow, we held on and never left each other\'s side.',
    tag: 'Drama Survival',
    bgColor: '#f2f7f2',
    stickers: ['🛡️', '❤️'],
    doodles: ['🤝']
  },
  {
    id: 'm4',
    year: 2024,
    date: 'Nov 14, 2024',
    title: 'The Saree Day Princesses',
    description: 'Fulfilling our biggest silly dream! Hand-pinning sarees, matching silver earrings, clicking a thousand photos, and laughing when the pleats started to slide.',
    tag: 'Saree Day',
    bgColor: '#ffebeb',
    stickers: ['💃', '💍', '📸'],
    doodles: ['👑', '⭐']
  },
  {
    id: 'm5',
    year: 2025,
    date: 'Feb 10, 2025',
    title: 'The Canteen Giggles',
    description: 'When we got so majorly scolded by the college librarian for laughing uncontrollable at a meme Yashasvi showed. Our laughter was loud enough to echo in the halls.',
    tag: 'College',
    bgColor: '#fcf8f0',
    stickers: ['🍕', '🎒'],
    doodles: ['📚', '😹']
  },
  {
    id: 'm6',
    year: 2025,
    date: 'Jul 20, 2025',
    title: 'The Lightning Storm',
    description: 'I got angry and threw tantrums. Anyone else would have packed their bags and left, but you stayed. You held my anger, waited for the storm to clear, and loved me anyway.',
    tag: 'Laughs',
    bgColor: '#faf5ff',
    stickers: ['⛈️', '🌈'],
    doodles: ['❤️', '⚓']
  },
  {
    id: 'm7',
    year: 2026,
    date: 'Jan 05, 2026',
    title: 'Warm Hazelnut & Future Wills',
    description: 'Sitting inside on a chilly morning, wrapping hands around warm mugs, and charting out our plans to build adjacent Ghibli cottages when we are eighty.',
    tag: 'Cafe',
    bgColor: '#f2f7f2',
    stickers: ['🏡', '❄️'],
    doodles: ['☕', '🏡']
  },
  {
    id: 'm8',
    year: 2026,
    date: 'Jun 07, 2026',
    title: 'Best Friend\'s Day Milestone',
    description: 'Here we are, celebrating Our Forever Story! Undefeated, stronger, and more in sync than ever. Happy Best Friend\'s Day, Yashasvi!',
    tag: 'Milestone',
    bgColor: '#ffebeb',
    stickers: ['🏆', '🍀', '🍰'],
    doodles: ['💖', '🎈']
  }
];

export const FIRSTS_LIST: FirstItem[] = [
  {
    id: 'f1',
    title: 'First Conversation',
    date: 'January 2024',
    story: 'It started on a cold afternoon. A mutual acquaintance introduced us, and we exchanged shy, formal smiles. Little did we know we had just met our primary cheerleader for life!',
    location: 'College Main Hallway',
    icon: 'MessageCircle'
  },
  {
    id: 'f2',
    title: 'First Polaroid Photo',
    date: 'February 2024',
    story: 'A quick, blurry selfie in the bright sunlight. We both thought we looked goofy, but our smiles were absolutely radiant. It became the very first brick of our massive photo vault.',
    location: 'Canteen Garden Bench',
    icon: 'Camera'
  },
  {
    id: 'f3',
    title: 'First Outing',
    date: 'March 2024',
    story: 'We slipped away for a quick break and ended up walking and talking for three continuous hours, missing a lecture but gaining a lifetime of solid trust.',
    location: 'Nearby Flower Alley Park',
    icon: 'MapPin'
  },
  {
    id: 'f4',
    title: 'First Café Memory',
    date: 'April 2024',
    story: 'We spent hours at our corner table, sharing a huge plate of hot fries and spilling the massive college group drama tea. It was then we knew: we are a direct team.',
    location: 'The Roasted Bean Café',
    icon: 'Coffee'
  },
  {
    id: 'f5',
    title: 'First Saree Day Memory',
    date: 'November 2024',
    story: 'Fulfilling our aesthetic dream. It took seven YouTube tutorials and absolute chaos to tie the sarees, but when we stepped out, everyone was gasping. We felt magical.',
    location: 'Surbhi Courtyard Gardens',
    icon: 'Sparkles'
  }
];

export const INSIDE_JOKES_LIST: InsideJoke[] = [
  {
    id: 'j1',
    quote: '"Wait, is he looking at you or the librarian?"',
    context: 'The hilarious incident where a highly confused guy tried to slide into our table but made eye contact with the wrong person.',
    severity: 'mild'
  },
  {
    id: 'j2',
    quote: '"Yes, Anika is angry. Prepare the protective bunker!"',
    context: 'Yashasvi\'s legendary defense protocol whenever I get super mad over small things. She just holds out chocolate and waits.',
    severity: 'spicy'
  },
  {
    id: 'j3',
    quote: '"The 60-Pin Saree Trap"',
    context: 'Thinking we secured our saree pleats perfectly, only to run like penguins because we pinned them so tightly we couldn\'t walk!',
    severity: 'chaotic'
  },
  {
    id: 'j4',
    quote: '"Group Chat Archeology"',
    context: 'Surviving group drama with precise screenshot receipts, dissecting them like ancient scrolls over hot canteen samosas.',
    severity: 'chaotic'
  }
];

export const OPEN_LETTERS_LIST: OpenWhenLetter[] = [
  {
    id: 'l1',
    type: 'happy',
    title: 'Open when you are Happy',
    envelopeColor: 'bg-rose-100 border-rose-300 hover:bg-rose-200 text-rose-700',
    emoji: '🌸',
    prompt: 'Read this when you are smiling and want to share your joy with me!',
    content: `My dearest Yashasvi,

Seeing you happy is my absolute favorite sight! Your laugh is like sunshine breaking through a misty Ghibli forest. Whenever good things happen to you, remember I am in the front row, cheering the loudest for you. Thank you for being the happiest spark in my life. Never forget how incredibly talented, beautiful, and rare you are. Let's celebrate your happiness together with warm tea and hazelnut donuts very soon!

Love, always,
Anika`,
    specialAdvice: [
      'Take a silly selfie right now and send it to me!',
      'Treat yourself to a chocolate pastry today.',
      'Remember that you deserve every bit of this joy!'
    ]
  },
  {
    id: 'l2',
    type: 'sad',
    title: 'Open when you are Sad',
    envelopeColor: 'bg-blue-100 border-blue-300 hover:bg-blue-200 text-blue-700',
    emoji: '☁️',
    prompt: 'Read this when the day feels grey, heavy, and the clouds won\'t clear.',
    content: `My precious Yashasvi,

If today is heavy, please lay some of that weight on me. Remember: you don\'t have to carry the whole world on your shoulders. It is okay to feel tired, and it is okay to cry. The clouds in Ghibli movies always pass, and so will this storm. You are so strong, but with me, you are allowed to be vulnerable. I am right here. I am not going anywhere. If you want to talk, I am listening. If you want to sit in absolute silence, I will sit next to you.

You are never, ever alone.

With warm hugs,
Anika`,
    specialAdvice: [
      'Close your eyes, breathe, and drink a glass of water.',
      'Put on your favorite soft music track.',
      'Message me the word "umbrella" - I will immediately call you.'
    ]
  },
  {
    id: 'l3',
    type: 'angry',
    title: 'Open when you are Angry',
    envelopeColor: 'bg-purple-100 border-purple-300 hover:bg-purple-200 text-purple-700',
    emoji: '🔥',
    prompt: 'Read this when someone has annoyed you or we had a stupid argument.',
    content: `Uh oh, is the volcano erupting? 

If you are mad at someone else: Tell me who they are and I will prepare the Ghibli spell to turn them into a toad! (Or we can just write a highly aggressive letter we will never send). 

If you are mad at ME: I am so, so sorry. I know I can be stubborn, hotheaded, and downright annoying. But please know I never, ever mean to hurt you. My anger is messy, but my love for you is pure. I value us way too much to let an argument slide between us. Let\'s make a truce? I will buy you your favorite coffee and we can roast each other until we laugh!

Stubborn but sorry,
Anika`,
    specialAdvice: [
      'Scream into a pillow for 5 seconds.',
      'Write down all your rants in a scratch notes - tear it up!',
      'Remember that our friendship is bigger than any silly conflict.'
    ]
  },
  {
    id: 'l4',
    type: 'missing',
    title: 'Open when you Missing me',
    envelopeColor: 'bg-amber-100 border-amber-300 hover:bg-amber-200 text-amber-700',
    emoji: '🦉',
    prompt: 'Read this when we haven\'t met in a while and you want a warm embrace.',
    content: `Yashasvi!!

I miss you too! I am probably looking at our saree photos or scrolling through our insane college meme archives right now. Distance is just a minor physical detail. Our hearts are permanently linked under the same sky. If you are missing me, open this website, click on our Ghibli stars, play our warm background song, and know that I am thinking of you. 

I am just one call away. Let\'s plan our next cafe date immediately! I have so much tea to spill!

Forever your buddy,
Anika`,
    specialAdvice: [
      'Look at our funniest photo in the secret vault.',
      'Send me a voice note saying "Spill the tea!"',
      'Listen to our background piano track and imagine our next cafe meet.'
    ]
  }
];

export const MAP_SPOTS: MemoryPosition[] = [
  {
    id: 'spot1',
    name: 'College Canteen Corner',
    description: 'Our designated headquarters.',
    x: 25,
    y: 35,
    details: 'Where 80% of our rants, deep sighs, and quick gossip took place. Best samosas paired with endless laughter.',
    visitedDate: 'Every single weekday since 2024',
    specialDish: 'Samosa & Hot Cutting Chai'
  },
  {
    id: 'spot2',
    name: 'The Spill-the-Tea Café',
    description: 'Witness to our emotional breakdowns.',
    x: 60,
    y: 20,
    details: 'Our cozy little corner cafe. Its warm fairy lights and hazelnut chocolate lattes saw us through group conflicts and late-night assignment panics.',
    visitedDate: 'April 3, 2024 (First deep talk)',
    specialDish: 'Hazelnut Latte & Sizzling Molten Brownie'
  },
  {
    id: 'spot3',
    name: 'Surbhi Courtyard Gardens',
    description: 'The Saree Day Photoshoot Arena.',
    x: 45,
    y: 75,
    details: 'A beautiful lush botanical garden where Yashasvi hand-pinned Anika\'s pleats and we posed under the flower arches for hours.',
    visitedDate: 'November 14, 2024 (Saree day celebration)',
    specialDish: 'Magical flower crown selfies'
  },
  {
    id: 'spot4',
    name: 'Twilight Starry Overlook',
    description: 'Dreamland of Ghibli plans.',
    x: 82,
    y: 55,
    details: 'The scenic hill overlooking the city lights. Sitting under the stars, planning our future organic farm and matching old-lady rocking chairs.',
    visitedDate: 'Summer of 2025',
    specialDish: 'Warm breeze & magical dreams'
  }
];

export const DREAM_GOALS_LIST: DreamGoal[] = [
  { id: 'd1', item: 'See Cherry Blossom Festival in Japan', category: 'travel', completed: false, emoji: '🌸', targetYear: '2028' },
  { id: 'd2', item: 'Get matching tiny constellation tattoos', category: 'silly', completed: false, emoji: '✨' },
  { id: 'd3', item: 'Open a tiny floral tea-bookstore with cats', category: 'lifegoal', completed: false, emoji: '🐱' },
  { id: 'd4', item: 'Rent a cozy wooden cabin in the mountains', category: 'travel', completed: false, emoji: '🏡', targetYear: '2027' },
  { id: 'd5', item: 'Dress up in traditional royal sarees in Jaipur', category: 'saree', completed: false, emoji: '👑' } as any,
  { id: 'd6', item: 'Survive 50 more group dramas undefeated', category: 'adventure', completed: true, emoji: '🛡️' }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'How did our magical partnership begin?',
    options: [
      'At a chaotic rock concert',
      'Through a mutual friend in early 2024',
      'By fighting over the last bench in college',
      'On a random social media post'
    ],
    correctAnswer: 1,
    explanation: 'We were introduced by a mutual friend in early 2024, embarking on an epic friendship story!'
  },
  {
    id: 'q2',
    question: 'What is our ultimate absolute silly dress-up dream we fulfilled?',
    options: [
      'Gothic wizard robes',
      'Matching modern suits',
      'Dressing up in beautiful sarees and taking endless photos',
      'Wearing pajamas and animal onesies to class'
    ],
    correctAnswer: 2,
    explanation: 'Saree Day! We dressed up in gorgeous sarees, took thousands of photos, and had a magical Ghibli-inspired photoshoot!'
  },
  {
    id: 'q3',
    question: 'What is Anika\'s biggest flaws/habits that only Yashasvi can patiently handle?',
    options: [
      'Singing off-key in public',
      'Messy angry rants and storming off',
      'Always being 2 hours late',
      'Stealing all the food from Yashasvi\'s plate'
    ],
    correctAnswer: 1,
    explanation: 'Anika gets angry countless times, but Yashasvi holds the storm, understands, and stays when others drift, which is Yashasvi\'s superpower!'
  },
  {
    id: 'q4',
    question: 'What is our signature absolute favorite drink during cafe rants?',
    options: [
      'Highly bitter black coffee',
      'Sweet strawberry milkshakes',
      'Warm comforting Chai or Hazelnut Lattes',
      'Green glowing energy drinks'
    ],
    correctAnswer: 2,
    explanation: 'Nothing beats our warm comforting Hazelnut Lattes and Chai while spills-the-tea moments happen.'
  },
  {
    id: 'q5',
    question: 'When conflicts caused others in our group to drift apart, what did we do?',
    options: [
      'We drifted apart too for three months',
      'We fought in public on campus',
      'We never left each other\'s side and stayed strong together',
      'We ignored each other and built new friend groups'
    ],
    correctAnswer: 2,
    explanation: 'We stayed. We shielded each other, survived the drama, and forged a bond that is unbreakable!'
  }
];
