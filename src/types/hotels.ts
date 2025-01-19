export interface HotelLocation {
  dest_id: string
  search_type: string
  lc: string
  name: string
  city_ufi: number
  longitude: number
  latitude: number
  roundtrip: string
  label: string
  type: string
  image_url: string
  dest_type: string
  cc1: string
  country: string
  hotels: number
  city_name: string
  nr_hotels: number
  region: string
}

export interface ApiResponse<T> {
  status: boolean
  message: string
  timestamp: number
  data: T
}

export interface HotelDetails {
  id: string
  name: string
  address: string
  rating: number
  reviews: number
  roomType: string
  facilities: string[]
  checkIn: string
  checkOut: string
  price: number
  totalPrice: number
  imageUrl: string
}
