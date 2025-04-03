
export interface Service {
  id: string
  name: string
  price: number
  description: string
  image?: string
  video?: string
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
  items: Array<{
    service: Service
    quantity: number
  }>
  status: string
  created_at: string
  total: number
}
