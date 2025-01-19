import React from 'react'
import { Card, CardContent, Typography, Box, Button, IconButton, Chip, Stack } from '@mui/material'
import { Close as CloseIcon, FlightTakeoff, LuggageOutlined, Tv, Restaurant, Usb } from '@mui/icons-material'

interface FlightCardProps {
  airline?: string
  flightNumber?: string
  departureTime?: string
  arrivalTime?: string
  duration?: string
  departureCode?: string
  arrivalCode?: string
  date?: string
  price?: number
  onClose?: () => void
}

export const FlightCard = ({
  airline,
  flightNumber,
  departureTime,
  arrivalTime,
  duration,
  departureCode,
  arrivalCode,
  date,

  onClose
}: FlightCardProps) => {
  return (
    <Card sx={{ position: 'relative', overflow: 'visible' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <FlightTakeoff />
            <Box>
              <Typography variant='subtitle1'>{airline}</Typography>
              <Typography variant='caption' color='text.secondary'>
                {flightNumber}
              </Typography>
            </Box>
          </Box>
          <Typography variant='h6'>₦ 123,450.00</Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 3 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='h6'>{departureTime}</Typography>
            <Typography variant='body2' color='text.secondary'>
              {date}
            </Typography>
            <Typography variant='body2'>{departureCode}</Typography>
          </Box>

          <Box sx={{ flex: 1, mx: 2, textAlign: 'center' }}>
            <Typography variant='caption' color='text.secondary'>
              Duration: {duration}
            </Typography>
            <Box
              sx={{
                height: 2,
                bgcolor: 'primary.main',
                my: 1,
                position: 'relative',
                '&::after': {
                  content: '"Direct"',
                  position: 'absolute',
                  top: -20,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '0.75rem',
                  color: 'text.secondary'
                }
              }}
            />
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='h6'>{arrivalTime}</Typography>
            <Typography variant='body2' color='text.secondary'>
              {date}
            </Typography>
            <Typography variant='body2'>{arrivalCode}</Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant='body2' color='text.secondary' gutterBottom>
            Facilities:
          </Typography>
          <Stack direction='row' spacing={1}>
            <Chip
              icon={<LuggageOutlined />}
              label='Baggage: 20kg, Cabin Baggage: 8kg'
              size='small'
              variant='outlined'
            />
            <Chip icon={<Tv />} label='In flight entertainment' size='small' variant='outlined' />
            <Chip icon={<Restaurant />} label='In flight meal' size='small' variant='outlined' />
            <Chip icon={<Usb />} label='USB Port' size='small' variant='outlined' />
          </Stack>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color='primary' size='small'>
              Flight details
            </Button>
            <Button color='primary' size='small'>
              Price details
            </Button>
          </Box>
          <Button color='primary' size='small'>
            Edit details
          </Button>
        </Box>
      </CardContent>

      <IconButton
        size='small'
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: -10,
          top: -10,
          bgcolor: 'background.paper',
          boxShadow: 1,
          '&:hover': { bgcolor: 'grey.100' }
        }}
      >
        <CloseIcon fontSize='small' />
      </IconButton>
    </Card>
  )
}
