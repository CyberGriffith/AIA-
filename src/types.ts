export type PageId = 
  | 'home'
  | 'study-abroad'
  | 'destination-detail'
  | 'credit-management'
  | 'engineering-it'
  | 'business-acca'
  | 'events'
  | 'success-stories'
  | 'about'
  | 'contact';

export interface Destination {
  id: string;
  name: string;
  region: 'Asia & Middle East' | 'Europe' | 'North America' | 'Oceania';
  tagline: string;
  flag: string;
  image: string;
  popularCourses: string[];
  intakes: string[];
  workRights: string;
  overview: string;
  keyHighlights: string[];
  academicRequirements: string;
  postStudyOptions: string;
  featured?: boolean;
}

export interface PathwayOption {
  id: string;
  title: string;
  category: 'abroad' | 'credit' | 'biet' | 'alpha';
  subtitle: string;
  institution: string;
  description: string;
  image: string;
  highlights: string[];
  targetAudience: string;
  linkText: string;
  externalUrl?: string;
}

export interface AIAEvent {
  id: string;
  title: string;
  category: 'Admissions' | 'Webinar' | 'Credit Management' | 'Engineering' | 'ACCA';
  date: string;
  time: string;
  venue: 'Colombo Campus' | 'Kandy Campus' | 'Online (Zoom)' | 'Colombo & Kandy';
  description: string;
  image: string;
  speaker?: string;
  status: 'Open for Registration' | 'Limited Seats';
}

export interface StudentStory {
  id: string;
  studentName: string;
  division: 'Study Abroad' | 'Credit Management (SLICM)' | 'BIET Engineering & IT' | 'Alpha Business School';
  destinationOrProgram: string;
  institutionOrAward: string;
  quote: string;
  story: string;
  image: string;
  year: string;
}

export interface CampusLocation {
  id: 'colombo' | 'kandy';
  city: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  hours: string;
  counsellingNote: string;
  mapEmbedUrl: string;
}

