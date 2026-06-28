export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  basePrice: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  initials: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  propertyAddress: string;
  details: string;
}
