import { Property, Testimonial } from './types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    location: 'Beverly Hills, California',
    price: '$4,500,000',
    bedrooms: 5,
    bathrooms: 6,
    area: 4500,
    type: 'Villa',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    title: 'Contemporary Penthouse',
    location: 'Manhattan, New York',
    price: '$2,850,000',
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    type: 'Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '3',
    title: 'Elegant Family Home',
    location: 'Austin, Texas',
    price: '$1,250,000',
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '4',
    title: 'Waterfront Estate',
    location: 'Miami, Florida',
    price: '$5,900,000',
    bedrooms: 6,
    bathrooms: 7,
    area: 6200,
    type: 'Villa',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '5',
    title: 'Downtown Loft',
    location: 'Chicago, Illinois',
    price: '$890,000',
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    type: 'Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '6',
    title: 'Suburban Retreat',
    location: 'Seattle, Washington',
    price: '$1,450,000',
    bedrooms: 4,
    bathrooms: 3,
    area: 2900,
    type: 'House',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1000'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    content: 'PrimeNest Realty made finding our dream home an absolute breeze. Their team was professional, attentive, and genuinely cared about our needs.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Property Investor',
    content: 'I have worked with many real estate agencies, but PrimeNest stands out. Their market knowledge and transparent process are unmatched.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '3',
    name: 'Emily Davis',
    role: 'First-time Buyer',
    content: 'As a first-time buyer, I was nervous, but the expert agents at PrimeNest guided me through every step. I couldn\'t be happier with my new apartment.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  }
];
