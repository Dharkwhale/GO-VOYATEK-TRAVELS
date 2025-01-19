// ** MUI Imports
import Box from '@mui/material/Box'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

// ** Icon Imports

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

// ** Hook Import
import { useAuth } from 'src/hooks/useAuth'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const navItemsBeforeSubscribe = [
  { icon: '/home.svg', label: 'Home' },
  { icon: '/dashboard.svg', label: 'Dashboard' },
  { icon: '/wallet.svg', label: 'Wallet' },
  { icon: '/plan.svg', label: 'Plan a trip' },
  { icon: '/comission.svg', label: 'Commission for life' }
]

const navItemsAfterSubscribe = [
  { icon: '/notification.svg', label: 'Notification' },
  { icon: '/carts.svg', label: 'Cart' },
  { icon: '/comission.svg', label: 'Create' }
]

const AppBarContent = (props: Props) => {
  // ** Props
  const { settings } = props

  // ** Hook
  const auth = useAuth()

  const NavItem = ({ item }: { item: { icon: string; label: string } }) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      <Image src={item.icon || '/placeholder.svg'} alt='logo' width={24} height={24} />
      <Typography
        variant='caption'
        sx={{
          fontSize: '0.75rem',
          color: 'text.secondary',
          textAlign: 'center',
          maxWidth: '80px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          mt: 2
        }}
      >
        {item.label}
      </Typography>
    </Box>
  )

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}></Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {auth.user && (
          <>
            <Box sx={{ display: 'flex', gap: 5, mr: 5, alignItems: 'center' }}>
              {navItemsBeforeSubscribe.map((item, index) => (
                <NavItem key={index} item={item} />
              ))}

              <Divider orientation='vertical' sx={{ height: 40, mx: 2 }} />

              <Button
                variant='contained'
                sx={{
                  bgcolor: '#0D6EFD',
                  color: 'white',
                  textTransform: 'none',
                  px: 4,
                  py: 2,
                  borderRadius: '4px',
                  '&:hover': {
                    bgcolor: '#0052CC'
                  }
                }}
              >
                Subscribe
              </Button>

              {navItemsAfterSubscribe.map((item, index) => (
                <NavItem key={index} item={item} />
              ))}
            </Box>
            <UserDropdown settings={settings} />
          </>
        )}
      </Box>
    </Box>
  )
}

export default AppBarContent
