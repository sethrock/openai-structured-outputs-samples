
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

export interface Booking {
  id: string
  service_id: string
  date: string
  status: string
  total: number
}
