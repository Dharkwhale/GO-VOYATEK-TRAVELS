import axios from 'axios'
import type { ApiResponse, HotelLocation } from '../types/hotels'
import type { FlightDestination } from 'src/types/flights'
import type { AttractionsResponse } from 'src/types/attractions'

const API_BASE_URL = 'https://booking-com15.p.rapidapi.com/api/v1'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
    'x-rapidapi-key': '4e3d4cd81dmsh2061701c11ab7a0p1be3d3jsnb094f0b3622c'
  }
})

export const apiService = {
  async getHotels(): Promise<ApiResponse<HotelLocation[]>> {
    try {
      const response = await axiosInstance.get('/hotels/searchDestination', {
        params: {
          query: 'new'
        }
      })

      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('API Error:', error.response?.data)
        throw new Error(error.response?.data?.message || 'Failed to fetch hotels')
      }
      throw error
    }
  },

  async searchFlights(query: string): Promise<ApiResponse<FlightDestination[]>> {
    try {
      const response = await axiosInstance.get('/flights/searchDestination', {
        params: { query }
      })

      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('API Error:', error.response?.data)
        throw new Error(error.response?.data?.message || 'Failed to fetch flights')
      }
      throw error
    }
  },
  async searchAttractions(query: string): Promise<ApiResponse<AttractionsResponse>> {
    try {
      const response = await axiosInstance.get('/attraction/searchLocation', {
        params: { query }
      })

      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('API Error:', error.response?.data)
        throw new Error(error.response?.data?.message || 'Failed to fetch attractions')
      }
      throw error
    }
  }
}
