import {
  EventStats,
  Speaker,
  TimelineItem,
  Registration,
  CompetitionPrize,
  FAQItem,
  Testimonial,
  Sponsor,
  GalleryImage
} from '../types';

export const EVENT_DETAILS: EventStats = {
  capacity: 400,
  registered: 328,
  seatsLeft: 72,
  colleges: 18,
  founders: 12,
  prizePool: '₹65,000',
  rating: 4.9,
  fee: 199
};

export const SPEAKERS: Speaker[] = [
  {
    id: '1',
    name: 'Nikhil Kamath',
    role: 'Co-Founder',
    company: 'Zerodha & True Beacon',
    avatar: './Nikhil.png',
    linkedin: 'https://www.linkedin.com/in/nikhilkamath/',
    topics: ['Building Moats & Bootstrapping', 'FinTech & Capital Markets', 'WTF Fund for Student Founders'],
    achievements: 'Co-Founder Zerodha (India\'s Largest Stockbroker) | Founder WTF Fund',
    keynoteTitle: 'Zero to One in FinTech: Building Sustainable Moats Without VC Money'
  },
  {
    id: '2',
    name: 'Vineeta Singh',
    role: 'Co-Founder & CEO',
    company: 'SUGAR Cosmetics',
    avatar: './Vineeta.png',
    linkedin: 'https://www.linkedin.com/in/vineetasingh/',
    topics: ['Bootstrapping D2C Brands', 'Product-Market Fit & Grit', 'Women in Entrepreneurship'],
    achievements: 'Co-Founder SUGAR Cosmetics | Shark Tank India Judge | IIT-M & IIM-A Alum',
    keynoteTitle: 'From 23 Rejections to ₹500 Cr Brand: Resilience & Scale'
  },
  {
    id: '3',
    name: 'Aman Gupta',
    role: 'Co-Founder & CMO',
    company: 'boAt Lifestyle',
    avatar: './Aman.png',
    linkedin: 'https://www.linkedin.com/in/amangupta1/',
    topics: ['Brand Building for Gen Z', 'Consumer Electronics Innovation', 'Marketing Mastery'],
    achievements: 'Co-Founder boAt Lifestyle | Shark Tank India Judge | World\'s #2 Wearable Brand',
    keynoteTitle: 'Hum Bhi Bana Lenge: Crafting Cult Brands for Gen Z India'
  },
  {
    id: '4',
    name: 'Anupam Mittal',
    role: 'Founder & CEO',
    company: 'Shaadi.com & People Group',
    avatar: './Anupam.png',
    linkedin: 'https://www.linkedin.com/in/anupammittal/',
    topics: ['Angel Investing in 250+ Startups', 'Consumer Internet Platforms', 'Navigating Market Pivots'],
    achievements: 'Founder Shaadi.com & Makaan.com | Shark Tank India Judge | 250+ Angel Investments',
    keynoteTitle: 'What 250+ Investments Taught Me About Winning Founders'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 't1',
    time: '09:00 AM - 10:00 AM',
    title: 'Delegate Check-In & Welcome Kit Distribution',
    description: 'Badges, networking kits, and morning coffee at Auditorium Foyer.',
    location: 'Auditorium Foyer, ABES Engineering College',
    category: 'break'
  },
  {
    id: 't2',
    time: '10:00 AM - 10:30 AM',
    title: 'Inaugural Address & E-Cell Convocation',
    description: 'Opening remarks by E-Cell President & Dean of Innovation.',
    location: 'Main Stage',
    category: 'ceremony'
  },
  {
    id: 't3',
    time: '10:30 AM - 11:30 AM',
    title: 'Fireside Chat: Bootstrapping & Moats in FinTech',
    speaker: 'Nikhil Kamath (Co-Founder, Zerodha)',
    description: 'Tactical guide on building sustainable moats and scaling without external VC capital.',
    location: 'Main Stage',
    category: 'keynote'
  },
  {
    id: 't4',
    time: '11:30 AM - 12:45 PM',
    title: 'Shark Panel: Scaling Consumer Brands & Pitching VCs',
    speaker: 'Vineeta Singh, Aman Gupta & Anupam Mittal',
    description: 'Interactive fireside and Q&A dissecting early brand positioning, unit economics, and pitch mistakes.',
    location: 'Main Stage',
    category: 'keynote'
  },
  {
    id: 't5',
    time: '12:45 PM - 02:00 PM',
    title: 'Networking Lunch & Founder Speed Dating',
    description: 'Structured 1-on-1 networking slots with founders over buffet lunch.',
    location: 'Campus Courtyard',
    category: 'networking'
  },
  {
    id: 't6',
    time: '02:00 PM - 04:00 PM',
    title: 'FounderX Pitch Arena (Top 10 Finalists)',
    description: '3-minute live pitch + 2-minute Q&A in front of seed investor jury.',
    location: 'Main Stage',
    category: 'competition'
  },
  {
    id: 't7',
    time: '04:00 PM - 04:45 PM',
    title: 'Speed Mentoring & Unconference Groups',
    description: 'Breakout tables on Tech Stack, Pitching, Legal, and Co-founder matching.',
    location: 'Seminar Hall B',
    category: 'networking'
  },
  {
    id: 't8',
    time: '04:45 PM - 05:30 PM',
    title: 'Award Ceremony, Cash Prizes & Closing Remarks',
    description: 'Winner declaration for ₹65,000 prize pool and certificate handover.',
    location: 'Main Stage',
    category: 'ceremony'
  }
];

export const COMPETITION_PRIZES: CompetitionPrize[] = [
  {
    position: '1st Place (Winner)',
    amount: '₹35,000',
    perks: [
      'Direct entry into Incubation Program',
      'Free AWS & Notion $10K Cloud Credits',
      '1-on-1 Mentorship with VC Partners',
      'Winner Trophy & Hall of Fame Feature'
    ]
  },
  {
    position: '2nd Place (Runner-Up)',
    amount: '₹20,000',
    perks: [
      'Incubation Fast-Track Review',
      'Free SaaS Tools & Legal Template Kit',
      'Quarterly Mentorship Sessions'
    ]
  },
  {
    position: '3rd Place (2nd Runner-Up)',
    amount: '₹10,000',
    perks: [
      'Co-Working Space Pass (3 Months)',
      'Free Cloud Credits Package'
    ]
  }
];

export const RECENT_REGISTRATIONS: Registration[] = [
  {
    id: 'r1',
    name: 'Aarav Patel',
    college: 'IIT Bombay',
    branch: 'Computer Science',
    year: '3rd Year',
    timestamp: '2 mins ago',
    hasStartupIdea: true
  },
  {
    id: 'r2',
    name: 'Priya Sundaram',
    college: 'BITS Pilani',
    branch: 'Electrical Engg',
    year: '4th Year',
    timestamp: '7 mins ago',
    hasStartupIdea: true
  },
  {
    id: 'r3',
    name: 'Kabir Mehta',
    college: 'Delhi Technological Univ',
    branch: 'Information Tech',
    year: '2nd Year',
    timestamp: '15 mins ago',
    hasStartupIdea: false
  },
  {
    id: 'r4',
    name: 'Sneha Kulkarni',
    college: 'COEP Technological Univ',
    branch: 'Mechanical Engg',
    year: '3rd Year',
    timestamp: '24 mins ago',
    hasStartupIdea: true
  },
  {
    id: 'r5',
    name: 'Rohan Roy',
    college: 'Jadavpur University',
    branch: 'Data Science',
    year: '1st Year',
    timestamp: '32 mins ago',
    hasStartupIdea: false
  },
  {
    id: 'r6',
    name: 'Tanya Bhardwaj',
    college: 'NMIMS Mumbai',
    branch: 'BBA Entrepreneurship',
    year: '2nd Year',
    timestamp: '45 mins ago',
    hasStartupIdea: true
  }
];

export const DAILY_REGISTRATION_DATA = [
  { day: 'Jul 20', registrations: 12, accumulated: 12 },
  { day: 'Jul 22', registrations: 24, accumulated: 36 },
  { day: 'Jul 24', registrations: 45, accumulated: 81 },
  { day: 'Jul 26', registrations: 68, accumulated: 149 },
  { day: 'Jul 28', registrations: 89, accumulated: 238 },
  { day: 'Jul 29', registrations: 52, accumulated: 290 },
  { day: 'Jul 30', registrations: 38, accumulated: 328 }
];

export const CATEGORY_DISTRIBUTION = [
  { name: 'Engineering & Tech', value: 55, color: '#0F172A' },
  { name: 'Management & Business', value: 25, color: '#F97316' },
  { name: 'Design & Product', value: 12, color: '#64748B' },
  { name: 'Arts & Others', value: 8, color: '#94A3B8' }
];

export const COLLEGE_PARTICIPATION = [
  { college: 'IITs & NITs', count: 110 },
  { college: 'State Tech Univs', count: 95 },
  { college: 'Private Engg Colleges', count: 75 },
  { college: 'Management Schools', count: 48 }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    category: 'general',
    question: 'Who can attend FounderX 2026?',
    answer: 'FounderX 2026 is open to all college students (Undergraduate, Postgraduate, PhD) across all streams, early-stage student founders, faculty, and aspiring entrepreneurs.'
  },
  {
    id: 'f2',
    category: 'general',
    question: 'Is accommodation provided for outstation students?',
    answer: 'While registration (₹199) covers full-day entry, delegate kit, and lunch, campus hostel accommodation can be requested for an additional nominal charge during check-in verification.'
  },
  {
    id: 'f3',
    category: 'competition',
    question: 'Do I need a fully built product to participate in the Pitch Competition?',
    answer: 'No! Ideas at all stages—from validated concepts and prototypes to functional MVP startups—are eligible. Our jury evaluates problem clarity, market potential, and founder execution.'
  },
  {
    id: 'f4',
    category: 'competition',
    question: 'How many members are allowed in a pitch team?',
    answer: 'Teams can range from 1 to 4 student members. At least one member must be present physically at Dr. Sarvapalli Radhakrishnan Auditorium, ABES Engineering College, Ghaziabad on 18 August 2026.'
  },
  {
    id: 'f5',
    category: 'payment',
    question: 'What does the ₹199 registration fee cover?',
    answer: 'The ₹199 pass includes full access to keynote sessions, panel discussions, pitch arena spectator pass, speed networking, official delegate kit, lunch, tea/snacks, and an official Certificate of Participation.'
  },
  {
    id: 'f6',
    category: 'payment',
    question: 'How do I confirm my payment after UPI transfer?',
    answer: 'After transferring ₹199 to the designated UPI ID (founderx@upi) or QR code, paste your 12-digit UPI UTR / Transaction ID in the payment verification form. Our system auto-verifies your entry instantly.'
  },
  {
    id: 'f7',
    category: 'logistics',
    question: 'Will certificates be provided to all attendees?',
    answer: 'Yes! Official e-Certificates signed by E-Cell Convener and Keynote Speakers will be issued to all verified attendees within 48 hours post-event.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tm1',
    name: 'Siddharth Nair',
    role: 'Co-founder, EcoPack',
    college: 'IIT Bombay Alumni',
    comment: 'Attending FounderX last year was the turning point for my startup. I met my co-founder during the speed networking lunch, and we secured our first angel check 3 months later!',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    id: 'tm2',
    name: 'Radhika Kapoor',
    role: 'B.Tech CS Student',
    college: 'DTU Delhi',
    comment: 'The VC panel gave me exact clarity on what investors actually look for. Unlike generic webinars, FounderX was packed with actionable tactical insights.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    id: 'tm3',
    name: 'Amanpreet Singh',
    role: 'Winner, Pitch Arena 2025',
    college: 'COEP Pune',
    comment: 'Winning the ₹35,000 prize helped us build our first hardware prototype. The mentorship support from E-Cell is top notch.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5
  }
];

export const SPONSORS: Sponsor[] = [
  { id: 'sp1', name: 'Peak XV Surge', category: 'Title Sponsor', logoText: 'PEAK XV SURGE', website: 'https://peakxv.com' },
  { id: 'sp2', name: 'Google for Startups', category: 'Powered By', logoText: 'Google Startups', website: 'https://startups.google.com' },
  { id: 'sp3', name: 'AWS Activate', category: 'Ecosystem Partner', logoText: 'AWS Activate', website: 'https://aws.amazon.com' },
  { id: 'sp4', name: 'Notion for Startups', category: 'Ecosystem Partner', logoText: 'Notion', website: 'https://notion.so' },
  { id: 'sp5', name: 'Inc42 Media', category: 'Media Partner', logoText: 'Inc42', website: 'https://inc42.com' },
  { id: 'sp6', name: 'YourStory', category: 'Media Partner', logoText: 'YourStory', website: 'https://yourstory.com' }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    title: 'Keynote Session at Dr. Sarvapalli Radhakrishnan Auditorium',
    category: 'Keynotes',
    url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g2',
    title: 'Pitch Arena Finals Presentation',
    category: 'Competition',
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g3',
    title: 'Networking Mixer & Founder Speed Dating',
    category: 'Networking',
    url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g4',
    title: 'Interactive Q&A Session with VCs',
    category: 'Panel',
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g5',
    title: 'Award Ceremony & Winner Cash Prize Handover',
    category: 'Awards',
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g6',
    title: 'Student Delegation Group Photo',
    category: 'Community',
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  }
];
