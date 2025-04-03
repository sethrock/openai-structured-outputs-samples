// Placeholder demo data - used in the API routes

import { Service, ServiceDetails, Booking } from './types'

export const services: Service[] = [
  {
    id: 'service-1hr',
    name: '1 Hour Service',
    price: 1000.0,
    description: 'Standard 1-hour service package perfect for basic needs.',
    image: '/imgs/service.jpg',
    duration: 1
  },
  {
    id: 'service-15hr',
    name: '1.5 Hour Service',
    price: 1600.0,
    description: 'Extended 1.5-hour service package for comprehensive coverage.',
    image: '/imgs/service.jpg',
    duration: 1.5
  },
  {
    id: 'service-2hr',
    name: '2 Hour Service',
    price: 2200.0,
    description: 'Complete 2-hour service package for detailed attention.',
    image: '/imgs/service.jpg',
    duration: 2
  },
  {
    id: 'service-3hr',
    name: '3 Hour Service',
    price: 3000.0,
    description: 'Premium 3-hour service package for extensive requirements.',
    image: '/imgs/service.jpg',
    duration: 3
  },
  {
    id: 'service-4hr',
    name: '4 Hour Service',
    price: 4000.0,
    description: 'Ultimate 4-hour service package for maximum coverage.',
    image: '/imgs/service.jpg',
    duration: 4
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