// Placeholder demo data - used in the API routes

import { Service, ServiceDetails, Booking } from './types'

export const services: Service[] = [
  {
    id: 'service-1hr',
    name: '1 Hour Service',
    price: 1000.0,
    description: 'Standard 1-hour service package perfect for basic needs.',
    image: 'https://res.cloudinary.com/dq2wjozdk/image/upload/v1726579942/IMG_4466_2_y9ge5u.png',
    duration: 1
  },
  {
    id: 'service-15hr',
    name: '1.5 Hour Service',
    price: 1600.0,
    description: 'Extended 1.5-hour service package for comprehensive coverage.',
    image: 'https://res.cloudinary.com/dq2wjozdk/image/upload/v1726579942/IMG_4466_2_y9ge5u.png',
    duration: 1.5
  },
  {
    id: 'service-2hr',
    name: '2 Hour Service',
    price: 2200.0,
    description: 'Complete 2-hour service package for detailed attention.',
    image: 'https://res.cloudinary.com/dq2wjozdk/image/upload/v1726579942/IMG_4466_2_y9ge5u.png',
    duration: 2
  },
  {
    id: 'service-3hr',
    name: '3 Hour Service',
    price: 3000.0,
    description: 'Premium 3-hour service package for extensive requirements.',
    image: 'https://res.cloudinary.com/dq2wjozdk/image/upload/v1726579942/IMG_4466_2_y9ge5u.png',
    duration: 3
  },
  {
    id: 'service-4hr',
    name: '4 Hour Service',
    price: 4000.0,
    description: 'Ultimate 4-hour service package for maximum coverage.',
    image: 'https://res.cloudinary.com/dq2wjozdk/image/upload/v1726579942/IMG_4466_2_y9ge5u.png',
    duration: 4
  },
  {
    id: 'event-naked-sushi',
    name: 'Naked Sushi Event',
    price: 8000.0,
    description: 'Ultimate 5-hour premium Naked Sushi event experience for an unforgettable gathering.',
    video: 'https://res.cloudinary.com/dq2wjozdk/video/upload/v1742000626/Naked_Sushi_-540p30_gxtv7r.mov',
    duration: 5
  }
]

export const serviceDetails: ServiceDetails[] = [
  {
    id: 'service-1hr',
    features: [
      '1 Hour Duration',
      'Standard Service Package',
      'Basic Coverage',
      'Single Session'
    ],
    cancellation_policy: '24 hours notice required',
    ratings: 4.8,
    available_from: '2024-01-15'
  },
  {
    id: 'service-15hr',
    features: [
      '1.5 Hour Duration',
      'Extended Service Package',
      'Comprehensive Coverage',
      'Single Session'
    ],
    cancellation_policy: '24 hours notice required',
    ratings: 4.7,
    available_from: '2024-01-15'
  },
  {
    id: 'service-2hr',
    features: [
      '2 Hour Duration',
      'Complete Service Package',
      'Detailed Coverage',
      'Single Session'
    ],
    cancellation_policy: '48 hours notice required',
    ratings: 4.9,
    available_from: '2024-01-15'
  },
  {
    id: 'service-3hr',
    features: [
      '3 Hour Duration',
      'Premium Service Package',
      'Extensive Coverage',
      'Single Session'
    ],
    cancellation_policy: '48 hours notice required',
    ratings: 4.8,
    available_from: '2024-01-15'
  },
  {
    id: 'service-4hr',
    features: [
      '4 Hour Duration',
      'Ultimate Service Package',
      'Maximum Coverage',
      'Single Session'
    ],
    cancellation_policy: '72 hours notice required',
    ratings: 4.9,
    available_from: '2024-01-15'
  }
]

const daysAgo = (days: number) => {
  const date = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
  return date.toLocaleDateString()
}

export const bookings: Booking[] = [
  {
    id: 'BK2312',
    items: [
      {
        service: services[0],
        quantity: 1
      }
    ],
    status: 'completed',
    created_at: daysAgo(4),
    total: 1000.0
  },
  {
    id: 'BK2313',
    items: [
      {
        service: services[2],
        quantity: 1
      }
    ],
    status: 'pending',
    created_at: daysAgo(2),
    total: 2200.0
  }
]