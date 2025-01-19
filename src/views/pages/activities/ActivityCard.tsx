import React from 'react'
import { Card, CardContent, CardMedia, Typography, Box, Button, IconButton, Chip, Stack } from '@mui/material'
import { Close as CloseIcon, LocationOn, AccessTime, Star, NavigateNext, NavigateBefore } from '@mui/icons-material'
import type { ActivityDetails } from '../../../types/attractions'

interface ActivityCardProps extends ActivityDetails {
  onClose?: () => void
}

export const ActivityCard = ({
  title,
  description,
  rating,
  reviews,
  duration,
  time,
  date,
  included,
  day,
  onClose
}: ActivityCardProps) => {
  return (
    <Card sx={{ display: 'flex', position: 'relative', overflow: 'visible' }}>
      <Box sx={{ position: 'relative', width: 280, height: 200 }}>
        <CardMedia component='img' sx={{ height: '100%', objectFit: 'cover' }} image='/attractions.png' alt={title} />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            px: 1
          }}
        >
          <IconButton size='small' sx={{ bgcolor: 'white', '&:hover': { bgcolor: 'grey.100' } }}>
            <NavigateBefore />
          </IconButton>
          <IconButton size='small' sx={{ bgcolor: 'white', '&:hover': { bgcolor: 'grey.100' } }}>
            <NavigateNext />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent sx={{ flex: '1 0 auto', pb: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
            <Box>
              <Typography variant='h6' gutterBottom>
                {title}
              </Typography>
              <Typography variant='body2' color='text.secondary' gutterBottom>
                {description}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant='h6'>₦ 123,450.00</Typography>
              <Typography variant='body2' color='text.secondary'>
                {time} on {date}
              </Typography>
            </Box>
          </Box>

          <Stack direction='row' spacing={2} alignItems='center' mb={2}>
            <Button startIcon={<LocationOn />} size='small' sx={{ color: 'primary.main' }}>
              Directions
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Star sx={{ color: 'warning.main', fontSize: '1rem' }} />
              <Typography variant='body2'>
                {rating} ({reviews})
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTime sx={{ fontSize: '1rem' }} />
              <Typography variant='body2'>{duration}</Typography>
            </Box>
          </Stack>

          <Box>
            <Typography variant='body2' gutterBottom>
              What's Included:
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {included}
              <Button size='small' sx={{ p: 0, minWidth: 'auto' }}>
                See more
              </Button>
            </Typography>
          </Box>
        </CardContent>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2, pb: 2 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color='primary' size='small'>
              Activity details
            </Button>
            <Button color='primary' size='small'>
              Price details
            </Button>
          </Box>
          <Button color='primary' size='small'>
            Edit details
          </Button>
        </Box>
      </Box>

      {day && (
        <Chip
          label={`Day ${day}`}
          color='primary'
          size='small'
          sx={{
            position: 'absolute',
            right: 40,
            top: 16
          }}
        />
      )}

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
