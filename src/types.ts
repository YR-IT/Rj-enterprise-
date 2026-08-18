export type PageTab = 'home' | 'services' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  keyAreas: string[];
  equipmentTools: string[];
  idealFor: string;
  image: string;
  servicesPageImage?: string;
}

export interface WhyChoosePoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  facilityType: string;
  areaLocality: string;
  staffCountNeeded?: string;
  serviceRequired: string;
  message: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  organization: string;
  location: string;
  rating: number;
  reviewText: string;
  serviceCategory: string;
  date: string;
}

export interface RealProjectHighlight {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  badge: string;
}
