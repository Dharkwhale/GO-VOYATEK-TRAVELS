import React, { useState, useEffect } from 'react'
import { Box, Typography, Button, AppBar, Toolbar, CircularProgress, Alert, Stack } from '@mui/material'
import { FlightTakeoff } from '@mui/icons-material'
import { apiService } from '../../../configs/api'
import { FlightCard } from './FlightCard'
import type { FlightDestination } from '../../../types/flights'

export default function Flights() {
  const [destinations, setDestinations] = useState<FlightDestination[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await apiService.searchFlights('new')
        setDestinations(response.data)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch flights')
      } finally {
        setLoading(false)
      }
    }

    fetchFlights()
  }, [])

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', p: 3 }}>
      <AppBar position='static' color='transparent' elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FlightTakeoff />
            <Typography variant='h6'>Flights</Typography>
          </Box>
          <Button variant='contained' color='primary'>
            Add Flights
          </Button>
        </Toolbar>
      </AppBar>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity='error' sx={{ mt: 4 }}>
          {error}
        </Alert>
      )}

      <Stack spacing={2} sx={{ mt: 3 }}>
        {destinations.map((flight, index) => (
          <FlightCard key={index} {...flight} onClose={() => console.log('Close flight card', index)} />
        ))}
      </Stack>
    </Box>
  )
}
