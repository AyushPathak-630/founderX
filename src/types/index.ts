export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  linkedin: string;
  topics: string[];
  achievements: string;
  keynoteTitle: string;
}

export interface TimelineItem {
  id: string;
  time: string;
  title: string;
  speaker?: string;
  description: string;
  location: string;
  category: 'keynote' | 'networking' | 'competition' | 'break' | 'ceremony';
}

export interface Registration {
  id: string;
  name: string;
  college: string;
  branch: string;
  year: string;
  timestamp: string;
  hasStartupIdea: boolean;
}

export interface CompetitionPrize {
  position: string;
  amount: string;
  perks: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'competition' | 'payment' | 'logistics';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  college: string;
  comment: string;
  avatar: string;
  rating: number;
}

export interface Sponsor {
  id: string;
  name: string;
  category: 'Title Sponsor' | 'Powered By' | 'Ecosystem Partner' | 'Media Partner';
  logoText: string;
  website: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  url: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  branch: string;
  year: string;
  linkedin?: string;
  hasStartupIdea: 'yes' | 'no';
  startupIdeaDetails?: string;
  experienceLevel: 'beginner' | 'intermediate' | 'founder';
  termsAccepted: boolean;
}

export interface EventStats {
  capacity: number;
  registered: number;
  seatsLeft: number;
  colleges: number;
  founders: number;
  prizePool: string;
  rating: number;
  fee: number;
}
