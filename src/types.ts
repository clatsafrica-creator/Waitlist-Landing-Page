export interface WaitlistItem {
  id: string;
  parentName: string;
  email: string;
  phone: string;
  childrenCount: string;
  ageGroups: string;
  location: string;
  signedUpAt: string;
  status: 'Synced' | 'Pending' | 'processing';
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'core' | 'safety' | 'parental';
  badge?: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  role: string;
  location: string;
  text: string;
  avatarUrl: string;
  rating: number;
  badge?: string;
}

export interface Mascot {
  name: 'Kobe' | 'Chibi';
  role: string;
  personality: string;
  avatar: string;
  bgColor: string;
  accentColor: string;
  speech: string[];
}
