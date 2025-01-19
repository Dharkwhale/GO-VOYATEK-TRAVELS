export interface Location {
  value: number
  unit: string
}

export interface FlightDestination {
  id: string
  type: string
  name: string
  code: string
  city: string
  cityName: string
  regionName: string
  country: string
  countryName: string
  countryNameShort: string
  photoUri: string
  distanceToCity: Location
  parent: string
}

export interface ApiResponse<T> {
  status: boolean
  message: string
  timestamp: number
  data: T
}

// Note: FlightDetails interface is not used in the current implementation
// but kept for potential future use
export interface FlightDetails {
  airline: string
  flightNumber: string
  departureTime: string
  arrivalTime: string
  duration: string
  departureCode: string
  arrivalCode: string
  date: string
  price: number
  facilities: string[]
}
