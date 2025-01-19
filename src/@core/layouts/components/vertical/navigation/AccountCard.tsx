import React from 'react'
import { Card, Box, Typography, IconButton, Stack } from '@mui/material'
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material'

interface AccountCardProps {
  onClick?: () => void
  expanded?: boolean
}

export default function AccountCard({ onClick, expanded = false }: AccountCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        bgcolor: 'grey.50',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: 'grey.100'
        }
      }}
      onClick={onClick}
    >
      <Stack direction='row' alignItems='center' spacing={2} sx={{ p: 2 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            bgcolor: '#0066FF',
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography
            variant='h6'
            sx={{
              color: 'white',
              fontWeight: 500
            }}
          >
            Go
          </Typography>
        </Box>

        <Typography
          variant='h6'
          sx={{
            color: 'text.secondary',
            flex: 1,
            fontWeight: 400
          }}
        >
          Personal Account
        </Typography>

        <Stack direction='column' spacing={0}>
          <IconButton size='small' sx={{ p: 0 }}>
            <KeyboardArrowUp
              sx={{
                color: 'text.secondary',
                opacity: expanded ? 1 : 0.3
              }}
            />
          </IconButton>
          <IconButton size='small' sx={{ p: 0 }}>
            <KeyboardArrowDown
              sx={{
                color: 'text.secondary',
                opacity: expanded ? 0.3 : 1,
                marginTop: -1
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  )
}
