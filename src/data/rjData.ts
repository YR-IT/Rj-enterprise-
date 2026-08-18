import { ServiceItem, WhyChoosePoint, Testimonial, RealProjectHighlight } from '../types';
import Image6 from '../assets/Image_6.jpg';
import Image10 from '../assets/Image_10.png';
import Image12 from '../assets/Image_12.webp';
import Image13 from '../assets/Image_13.jpg';
import Image3 from '../assets/Image_3.jpeg';
import Image9 from '../assets/Image_9.png';

export const COMPANY_INFO = {
  name: 'RJ Enterprises',
  tagline: 'Professional Housekeeping & Facility Management Services',
  motto1: 'Clean Spaces, Better Places',
  motto2: 'Clean Environment, Happy Clients, Better Living',
  motto3: 'We Clean, You Enjoy!',
  commitment: 'To maintain the highest standards of cleanliness, safety, and customer satisfaction through trained staff, quality supervision, and reliable service delivery.',
  vision: "To become Pune's most trusted housekeeping & facility management service provider.",
  mission: 'To deliver professional, affordable, and dependable housekeeping solutions while building long-term client relationships.',
  phones: ['9527626168', '9309883691'],
  primaryPhone: '9527626168',
  alternatePhone: '9309883691',
  email: 'RJ.Enterprises9527@gmail.com',
  address: '104, Tupe Building, Baif Road, Sambhaji Nagar, Wagholi, Pune – 412207',
  workingHours: 'Monday – Saturday: 8:00 AM to 7:00 PM (24/7 Site Support)',
  serviceArea: 'Serving across Pune (Wagholi, Kharadi, Viman Nagar, Koregaon Park, Kalyani Nagar, Hadapsar, Solapur Road)',
  proprietor: 'Haridas Sundar Landge',
  instagram: '@rj.enterprises.777',
  instagramUrl: 'https://www.instagram.com/rj.enterprises.777?igsh=NGVramc4cHAxcWhk',
  facebookUrl: 'https://www.facebook.com/share/1QVSsEyamo/',
  whatsappUrl: 'https://wa.me/919309883691?text=Hello%20RJ%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20housekeeping%20and%20facility%20management%20services%20for%20my%20property%20in%20Pune.',
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'society-housekeeping',
    title: 'Society Housekeeping',
    category: 'Residential Societies & Apartments',
    description: 'Comprehensive daily housekeeping of common residential areas, entrance lobbies, lifts, staircases, podiums, and clubhouse premises.',
    keyAreas: [
      'Lobbies, main entrance foyers & reception desk dusting',
      'Lift cabins sanitization & stainless-steel care',
      'Staircases, railings, landings & fire exit corridors',
      'Podiums, parking lots & internal society roads',
      'Clubhouse, fitness gym & recreational zone cleaning',
      'Garbage segregation bays & perimeter hygiene maintenance'
    ],
    equipmentTools: ['Heavy-duty sweepers', 'Floor scrubbing machines', 'Disinfectant mop kits', 'High-pressure water jets'],
    idealFor: 'Gated communities, residential towers, co-operative housing societies across Pune & PCMC',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'commercial-cleaning',
    title: 'Commercial & Office Cleaning',
    category: 'Corporate & Retail Spaces',
    description: 'High-standard cleaning solutions tailored for corporate offices, IT parks, retail showrooms, banks, and commercial complexes.',
    keyAreas: [
      'Workstations, keyboards & screen dusting protocols',
      'Boardrooms, meeting suites & executive cabins',
      'Pantry, cafeteria & breakroom hygiene maintenance',
      'Washroom deep hygiene, deodorization & dispenser refills',
      'Glass partitions, main entrance & display frontage',
      'Carpet vacuuming, floor buffing & waste segregation'
    ],
    equipmentTools: ['Commercial HEPA vacuum cleaners', 'Microfiber dust capture tools', 'Hospital-grade disinfectants', 'Glass squeegees'],
    idealFor: 'Corporate offices, IT/BPO centers, retail outlets, banks, coaching hubs & clinics',
    image: Image6
  },
  {
    id: 'restaurant-hospitality-cleaning',
    title: 'Restaurant & Hospitality Cleaning',
    category: 'Dining, Cafes & Lounges',
    description: 'Precision cleaning and daily maintenance for high-traffic restaurants, fine dining lounges, cafes, and banquet halls.',
    keyAreas: [
      'Dining floor mopping, cobble/terrazzo tile maintenance',
      'Bar counter, display cabinets & console polishing',
      'Seating upholstery, wood finishes & furniture dusting',
      'Customer washroom continuous hygiene rounds',
      'Kitchen floor degreasing & perimeter sanitization',
      'Entrance reception & ambient glass partition cleaning'
    ],
    equipmentTools: ['Flat microfiber mops', 'Food-safe surface sanitizers', 'Rotary floor buffers', 'Wood polish spray kits'],
    idealFor: 'Restaurants, cafes, lounge bars, banquet halls, and hospitality clubs',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'hospital-cleaning',
    title: 'Hospital & Healthcare Cleaning',
    category: 'Healthcare & Diagnostic Centers',
    description: 'Specialized medical-grade cleaning and rigorous disinfection for hospitals, diagnostic labs, and healthcare clinics.',
    keyAreas: [
      'OPD waiting halls, corridors & reception desks',
      'Patient rooms & clinical consultation cabins',
      'High-touch surface sterilization (railings, door handles, counters)',
      'Diagnostic labs & pathology center sanitization',
      'Bio-medical waste protocol adherence',
      'Healthcare washroom decontamination & germ control'
    ],
    equipmentTools: ['Hospital-grade disinfectant solutions', 'Colour-coded microfiber systems', 'Sanitizing vacuums', 'Full PPE certified teams'],
    idealFor: 'Hospitals, polyclinics, diagnostic centers, dental clinics & pathology laboratories',
    image: Image13
  },
  {
    id: 'factory-cleaning',
    title: 'Factory & Industrial Cleaning',
    category: 'Manufacturing & Warehouses',
    description: 'Heavy-duty industrial cleaning services for manufacturing plants, warehouses, workshops, and production facilities.',
    keyAreas: [
      'Shop floor degreasing & industrial grime removal',
      'Warehouse aisles, loading docks & storage bays',
      'Worker locker rooms, canteens & washrooms',
      'High-reach ceiling structure & duct dusting',
      'Surrounding industrial perimeter & scrap yard maintenance',
      'Spill control & industrial safety compliance maintenance'
    ],
    equipmentTools: ['Auto scrubbers', 'Industrial wet/dry vacuums', 'Oil & grease emulsifiers', 'Industrial safety PPE gear'],
    idealFor: 'Manufacturing plants, engineering workshops, logistics hubs & automotive units in Pune & PCMC',
    image: Image12
  },
  {
    id: 'deep-cleaning-services',
    title: 'Deep Cleaning & Floor Polishing',
    category: 'Periodic & Intensive Overhaul',
    description: 'Intensive mechanized deep cleaning for residential and commercial premises, tile scrub & buff, carpet shampoo, and glass façades.',
    keyAreas: [
      'Single-disc machine floor scrubbing & stain stripping',
      'Carpet shampooing & sofa extraction cleaning',
      'Intensive bathroom acid-safe descaling & tile grout scrubbing',
      'Modular kitchen degreasing & exhaust fan overhaul',
      'Exterior glass façade & high-window washing',
      'Post-renovation / move-in deep disinfection'
    ],
    equipmentTools: ['Single-disc floor scrubbing machines', 'Injection-extraction carpet machines', 'Grout brush attachments', 'Telescopic façade squeegees'],
    idealFor: 'Pre-handover, festive seasonal refresh, tenant turnover & corporate annual overhauls',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    servicesPageImage: Image10
  }
];

export const REAL_PROJECTS_GALLERY: RealProjectHighlight[] = [
  {
    id: 'proj-1',
    title: 'Fine Dining Floor Care & Buffing',
    category: 'Hospitality & Restaurants',
    location: 'Kharadi / Viman Nagar, Pune',
    description: 'Continuous floor dust-mopping and terrazzo stone maintenance with uniform staff and dedicated chemical dilution.',
    image: Image10,
    badge: 'Daily Contract'
  },
  {
    id: 'proj-2',
    title: 'Gated Society Common Area Upkeep',
    category: 'Residential Society',
    location: 'Wagholi, Pune',
    description: 'Daily cleaning of 4-wing residential society lobbies, lift foyers, clubhouse, and parking bays with weekly mechanized scrubbing.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    badge: 'Society AMC'
  },
  {
    id: 'proj-3',
    title: 'Lounge Bar & Console Dusting',
    category: 'Commercial Hospitality',
    location: 'Kalyani Nagar, Pune',
    description: 'Detail-oriented wood polish, fixture sanitization, and mirror finishing for premium lounge ambiance.',
    image: Image3,
    badge: 'Trained Staff'
  },
  {
    id: 'proj-4',
    title: 'Corporate IT Facility Sanitization',
    category: 'IT Park & Corporate',
    location: 'Hinjawadi Phase 1, Pune',
    description: 'Multi-floor workstation dusting, washroom hygiene audit cycles, and supervisor checklist enforcement.',
    image: Image9,
    badge: 'Supervisor Audit'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Sanjay Deshmukh',
    designation: 'Secretary, Managing Committee',
    organization: 'Greenfield Heights Housing Society',
    location: 'Wagholi, Pune',
    rating: 5,
    reviewText: 'RJ Enterprises has been managing our 250-flat society for over a year. The staff is punctual, uniformed, and the supervisor visits every single morning. The clubhouse and parking areas are maintained exceptionally well.',
    serviceCategory: 'Society Housekeeping',
    date: 'Verified Society Client'
  },
  {
    id: 'test-2',
    clientName: 'Vikram Joshi',
    designation: 'Operations & General Manager',
    organization: 'The Olive Bistro & Lounge',
    location: 'Viman Nagar, Pune',
    rating: 5,
    reviewText: 'In the restaurant business, hygiene is everything. Haridas Landge and his team ensure our dining floors, wooden consoles, and washrooms sparkle before every shift. Highly dependable and courteous staff.',
    serviceCategory: 'Restaurant & Hospitality Cleaning',
    date: 'Verified Hospitality Client'
  },
  {
    id: 'test-3',
    clientName: 'Pooja Kulkarni',
    designation: 'Facilities & Admin Lead',
    organization: 'TechSphere Solutions Pvt. Ltd.',
    location: 'Kharadi IT Park, Pune',
    rating: 5,
    reviewText: 'Prompt replacements whenever a staff member is on leave, zero disruption to our 150-person office, and flawless compliance paperwork with MSME and Shop Act. Very professional vendor.',
    serviceCategory: 'Commercial Office Cleaning',
    date: 'Verified Corporate Client'
  },
  {
    id: 'test-4',
    clientName: 'Dr. Anand Shinde',
    designation: 'Medical Director',
    organization: 'Shinde Diagnostic & Multi-Speciality Clinic',
    location: 'Hadapsar, Pune',
    rating: 5,
    reviewText: 'Cleaning in healthcare requires strict sterilization standards. RJ Enterprises deployed well-trained staff equipped with proper disinfectants and PPE gear. Excellent supervision.',
    serviceCategory: 'Healthcare Facility Cleaning',
    date: 'Verified Healthcare Client'
  }
];

export const WHY_CHOOSE_US: WhyChoosePoint[] = [
  {
    id: 'verified-workforce',
    title: '100% Police Verified Staff',
    description: 'Disciplined, background-checked, uniformed personnel with mandatory company photo ID cards.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'active-supervision',
    title: 'Daily Supervisory Audits',
    description: 'Field supervisors conduct daily site inspections, attendance checks, and checklist quality sign-offs.',
    iconName: 'Users'
  },
  {
    id: 'quick-replacement',
    title: 'Guaranteed 24-Hr Backup',
    description: 'Prompt replacement staff deployed in case of leave or absence to ensure zero service disruption.',
    iconName: 'Clock'
  },
  {
    id: 'statutory-compliance',
    title: 'Statutory Registered Vendor',
    description: 'Officially registered under Maharashtra Shop Act & MSME Udyam for hassle-free committee empanelment.',
    iconName: 'Award'
  }
];

export const SERVICE_AREAS_SUMMARY = [
  'Wagholi',
  'Kharadi',
  'Viman Nagar',
  'Koregaon Park',
  'Kalyani Nagar',
  'Hadapsar',
  'Solapur Road'
];
