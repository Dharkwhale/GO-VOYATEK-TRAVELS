import React, { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  Stack,
  AppBar,
  Toolbar,
  CircularProgress,
  Alert
} from '@mui/material'
import { Close as CloseIcon, LocationOn, Hotel as HotelIcon } from '@mui/icons-material'
import { apiService } from '../../../configs/api'
import type { HotelLocation } from '../../../types/hotels'

export default function Hotels() {
  const [hotels, setHotels] = useState<HotelLocation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await apiService.getHotels()
        setHotels(response.data)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch hotels')
      } finally {
        setLoading(false)
      }
    }

    fetchHotels()
  }, [])

  return (
    <Box sx={{ bgcolor: '#1e2a38', minHeight: '100vh', p: 3 }}>
      <AppBar position='static' color='transparent' elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <HotelIcon sx={{ color: 'white' }} />
            <Typography variant='h6' color='white'>
              Hotels
            </Typography>
          </Box>
          <Button
            variant='contained'
            sx={{
              bgcolor: 'white',
              color: 'black',
              '&:hover': { bgcolor: 'grey.100' }
            }}
          >
            Add Hotels
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
        {hotels.map(hotel => (
          <Card key={hotel.dest_id} sx={{ display: 'flex', position: 'relative' }}>
            <CardMedia component='img' sx={{ width: 240, height: 180 }} image={hotel.image_url} alt={hotel.name} />
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant='h6' gutterBottom>
                    {hotel.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary' gutterBottom>
                    {hotel.label}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant='body2' color='text.secondary'>
                    {hotel.nr_hotels} hotels available
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 1 }}>
                <Button startIcon={<LocationOn />} size='small' sx={{ color: 'primary.main' }}>
                  Show in map
                </Button>
                <Typography variant='body2' color='text.secondary'>
                  {hotel.city_name}, {hotel.country}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto' }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button color='primary' size='small'>
                    Location details
                  </Button>
                  <Button color='primary' size='small'>
                    View Hotels
                  </Button>
                </Box>
                <Button color='primary' size='small'>
                  Edit details
                </Button>
              </Box>
            </CardContent>

            <IconButton
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                bgcolor: 'rgba(255,255,255,0.9)',
                '&:hover': { bgcolor: 'rgba(255,255,255,1)' }
              }}
              size='small'
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}
