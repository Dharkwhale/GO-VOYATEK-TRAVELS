export interface Attraction {
  id: string
  __typename: string
  title: string
  productId: string
  productSlug: string
  taxonomySlug: string
  cityUfi: number
  cityName: string
  countryCode: string
}

export interface AttractionsResponse {
  products: Attraction[]
}

export interface ApiResponse<T> {
  status: boolean
  message: string
  timestamp: number
  data: T
}

// Extended type for UI display
export interface ActivityDetails {
  id: string
  title: string
  description: string
  rating: number
  reviews: number
  duration: string
  time: string
  date: string
  included: string[]
  day?: number
}
