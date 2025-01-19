import React from 'react'
import { Box, Typography, Button, Card, CardContent, IconButton, Avatar, Grid } from '@mui/material'

// import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
// import LanguageIcon from '@mui/icons-material/Language'
import { tripData } from './mockData'
import { Settings } from '@mui/icons-material'

export default function Dashboard() {
  const styles = {
    headerImage: {
      width: '100%',
      height: '200px',
      objectFit: 'contain' as const,
      marginBottom: 2
    },
    dateRange: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      color: '#666',
      marginBottom: 1
    },
    location: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      color: '#666',
      marginBottom: 3
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'space-between'
    },
    cardContent: {
      flex: 1
    },
    actionButton: {
      width: '100%',
      padding: '12px',
      color: 'white',
      marginTop: 2
    },
    headerActions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'space-between',
      marginBottom: 2
    }
  }

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', padding: 3 }}>
      {/* Header Image */}
      <img src={tripData.headerImage || '/placeholder.svg'} alt='Trip header' style={styles.headerImage} />

      {/* Header Actions */}
      <Box sx={styles.headerActions}>
        {/* Trip Info */}
        <Box sx={{ marginBottom: 4 }}>
          <Box sx={styles.dateRange}>
            <Typography variant='body2' color='#7A4504' sx={{ backgroundColor: '#FEF4E6', p: 2 }}>
              {tripData.dateRange.start} → {tripData.dateRange.end}
            </Typography>
          </Box>

          <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: 1, color: '#000000' }}>
            {tripData.title}
          </Typography>

          <Box sx={styles.location}>
            <Typography variant='body2'>
              {tripData.location} • {tripData.tripType}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: '#F0F7FF',
            borderRadius: 2,
            height: 80,
            mb: 4
          }}
        />

        {/* <Box sx={{ gap: 1 }}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <IconButton>
            <LanguageIcon />
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Box> */}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            position: 'relative'
          }}
        >
          <Avatar alt='John Doe' src='/images/avatars/samal.svg' sx={{ width: '2.5rem', height: '2.5rem' }} />

          {/* Line connector */}
          <Box
            sx={{
              height: 2,
              width: 40,
              bgcolor: '#E8E9FF',
              position: 'relative',
              top: 0
            }}
          />

          {/* Settings button */}
          <IconButton
            sx={{
              bgcolor: '#F8F9FF',
              width: 40,
              height: 40,
              '&:hover': {
                bgcolor: '#E8E9FF'
              }
            }}
          >
            <Settings sx={{ color: '#6B7280', fontSize: 20 }} />
          </IconButton>
        </Box>
      </Box>

      {/* Cards Grid */}
      <Grid container spacing={2}>
        {tripData.sections.map((section, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                ...styles.card,
                bgcolor: section.backgroundColor,
                color: section.backgroundColor === '#E7F0FF' ? 'black' : 'white'
              }}
            >
              <CardContent sx={styles.cardContent}>
                <Typography
                  variant='h6'
                  sx={{
                    marginBottom: 2,
                    color: `${section.backgroundColor === '#E7F0FF' ? '#000000' : '#ffffff'}`,
                    fontWeight: 700
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    marginBottom: 4,
                    color: `${section.backgroundColor === '#E7F0FF' ? '#000000' : '#ffffff'}`
                  }}
                >
                  {section.description}
                </Typography>
                <Button
                  variant='contained'
                  sx={{
                    ...styles.actionButton,
                    bgcolor:
                      section.backgroundColor === '#E7F0FF'
                        ? '#0066ff'
                        : section.backgroundColor === '#000031'
                        ? '#0066ff'
                        : 'white',

                    color:
                      section.backgroundColor === '#000031'
                        ? 'white'
                        : section.backgroundColor === '#E7F0FF'
                        ? 'white'
                        : '#0D6EFD',
                    '&:hover': {
                      bgcolor: section.backgroundColor === '#E7F0FF' ? '#0052cc' : '#E7F0FF'
                    }
                  }}
                >
                  {section.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
