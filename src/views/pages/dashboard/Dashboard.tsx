import React from 'react'
import { Box, Typography, Button, Card, CardContent, IconButton, Avatar, Grid } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import LanguageIcon from '@mui/icons-material/Language'
import { tripData } from './mockData'

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
      alignItems: 'center',
      marginBottom: 2
    }
  }

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', padding: 3 }}>
      {/* Header Image */}
      <img src={tripData.headerImage || '/placeholder.svg'} alt='Trip header' style={styles.headerImage} />

      {/* Header Actions */}
      <Box sx={styles.headerActions}>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <IconButton>
            <LanguageIcon />
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Trip Info */}
      <Box sx={{ marginBottom: 4 }}>
        <Box sx={styles.dateRange}>
          <Typography variant='body2'>
            {tripData.dateRange.start} → {tripData.dateRange.end}
          </Typography>
        </Box>

        <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          {tripData.title}
        </Typography>

        <Box sx={styles.location}>
          <Typography variant='body2'>
            {tripData.location} • {tripData.tripType}
          </Typography>
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
                color: section.backgroundColor === '#f5f5f5' ? 'black' : 'white'
              }}
            >
              <CardContent sx={styles.cardContent}>
                <Typography variant='h6' sx={{ marginBottom: 2 }}>
                  {section.title}
                </Typography>
                <Typography variant='body2'>{section.description}</Typography>
                <Button
                  variant='contained'
                  sx={{
                    ...styles.actionButton,
                    bgcolor: section.backgroundColor === '#f5f5f5' ? '#0066ff' : 'white',
                    color: section.backgroundColor === '#f5f5f5' ? 'white' : 'black',
                    '&:hover': {
                      bgcolor: section.backgroundColor === '#f5f5f5' ? '#0052cc' : '#f5f5f5'
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
