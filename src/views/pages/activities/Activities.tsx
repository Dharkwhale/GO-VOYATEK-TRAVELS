import React, { useState, useEffect } from 'react'
import { Box, Typography, Button, AppBar, Toolbar, CircularProgress, Alert, Stack } from '@mui/material'
import { Attractions } from '@mui/icons-material'
import { apiService } from '../../../configs/api'
import { ActivityCard } from './ActivityCard'
import type { Attraction } from '../../../types/attractions'

export default function Activities() {
  const [attractions, setAttractions] = useState<Attraction[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await apiService.searchAttractions('new')
        setAttractions(response.data.products)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch attractions')
      } finally {
        setLoading(false)
      }
    }

    fetchAttractions()
  }, [])

  return (
    <Box sx={{ bgcolor: '#1976d2', minHeight: '100vh', p: 3 }}>
      <AppBar position='static' color='transparent' elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Attractions sx={{ color: 'white' }} />
            <Typography variant='h6' color='white'>
              Activities
            </Typography>
          </Box>
          <Button
            variant='contained'
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': { bgcolor: 'grey.100' }
            }}
          >
            Add Activities
          </Button>
        </Toolbar>
      </AppBar>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress sx={{ color: 'white' }} />
        </Box>
      )}

      {error && (
        <Alert severity='error' sx={{ mt: 4 }}>
          {error}
        </Alert>
      )}

      <Stack spacing={2} sx={{ mt: 3 }}>
        {attractions.map(activity => (
          <ActivityCard
            key={activity.id}
            {...activity}
            onClose={() => console.log('Close activity card', activity.id)}
          />
        ))}
      </Stack>
    </Box>
  )
}
