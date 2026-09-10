export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'preventive' | 'cosmetic' | 'restorative' | 'pediatric' | 'emergency';
  duration: string;
  benefits: string[];
  recommendedFor: string;
  iconName: string;
  badge?: string;
  priceGuide?: string;
}

export interface WorkingHourItem {
  day: string;
  hours: string;
  isOpen: boolean;
  isToday?: boolean;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  service: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  treatment: string;
  comment: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
