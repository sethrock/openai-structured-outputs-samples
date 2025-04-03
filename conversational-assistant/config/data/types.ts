
export interface Service {
  id: string
  name: string
  price: number
  description: string
  image: string
  duration: number
}

export interface ServiceDetails {
  id: string
  features: string[]
  cancellation_policy: string
  ratings: number
  available_from: string
}

export interface BookingItem {
  service: Service
  quantity: number
}

export interface Booking {
  id: string
  items: BookingItem[]
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'rescheduled'
  created_at: string
  total: number
}
