// ** Type Imports
import { Palette, PaletteOptions } from '@mui/material'
import { Skin } from 'src/@core/layouts/types'

const DefaultPalette = (mode: Palette['mode'], skin: Skin): PaletteOptions => {
  // ** Vars
  const whiteColor = '#FFF'
  const lightColor = 'rgb(47, 43, 61)' // Use rgb format
  const darkColor = 'rgb(208, 212, 241)' // Use rgb format
  const darkPaperBgColor = '#2F3349'
  const mainColor = mode === 'light' ? lightColor : darkColor

  const defaultBgColor = () => {
    if (skin === 'bordered' && mode === 'light') {
      return whiteColor
    } else if (skin === 'bordered' && mode === 'dark') {
      return darkPaperBgColor
    } else if (mode === 'light') {
      return '#F8F7FA'
    } else return '#25293C'
  }

  return {
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      lightPaperBg: whiteColor,
      darkPaperBg: darkPaperBgColor,
      bodyBg: mode === 'light' ? '#F8F7FA' : '#25293C',
      trackBg: mode === 'light' ? '#F1F0F2' : '#363B54',
      avatarBg: mode === 'light' ? '#DBDADE' : '#4A5072',
      tableHeaderBg: mode === 'light' ? '#F6F6F7' : '#4A5072'
    },
    mode: mode,
    common: {
      black: '#949699',
      white: whiteColor
    },
    primary: {
      light: '#0D6EFD',
      main: '#0D6EFD',
      dark: '#0D6EFD',
      contrastText: whiteColor
    },
    secondary: {
      light: '#B2B4B8',
      main: '#A8AAAE',
      dark: '#949699',
      contrastText: whiteColor
    },
    error: {
      light: '#ED6F70',
      main: '#EA5455',
      dark: '#CE4A4B',
      contrastText: whiteColor
    },
    warning: {
      light: '#FFAB5A',
      main: '#FF9F43',
      dark: '#E08C3B',
      contrastText: whiteColor
    },
    info: {
      light: '#1FD5EB',
      main: '#00CFE8',
      dark: '#00B6CC',
      contrastText: whiteColor
    },
    success: {
      light: '#42CE80',
      main: '#28C76F',
      dark: '#23AF62',
      contrastText: whiteColor
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161'
    },
    text: {
      primary: `rgba(${mode === 'light' ? '47, 43, 61' : '208, 212, 241'}, 0.78)`,
      secondary: `rgba(${mode === 'light' ? '47, 43, 61' : '208, 212, 241'}, 0.68)`,
      disabled: `rgba(${mode === 'light' ? '47, 43, 61' : '208, 212, 241'}, 0.42)`
    },
    divider: `rgba(${mode === 'light' ? '47, 43, 61' : '208, 212, 241'}, 0.16)`,
    background: {
      paper: mode === 'light' ? whiteColor : darkPaperBgColor,
      default: defaultBgColor()
    },
    action: {
      active: `rgba(${mode === 'light' ? '47, 43, 61' : '208, 212, 241'}, 0.54)`,
      hover: `rgba(${mode === 'light' ? '47, 43, 61' : '208, 212, 241'}, 0.04)`,
      selected: `rgba(${mode === 'light' ? '47, 43, 61' : '208, 212, 241'}, 0.06)`,
      selectedOpacity: 0.06,
      disabled: `rgba(${mode === 'light' ? '47, 43, 61' : '208, 212, 241'}, 0.26)`,
      disabledBackground: `rgba(${mode === 'light' ? '47, 43, 61' : '208, 212, 241'}, 0.12)`,
      focus: `rgba(${mode === 'light' ? '47, 43, 61' : '208, 212, 241'}, 0.12)`,
      hoverOpacity: 0.04,
      disabledOpacity: 0.26,
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    },

    // Add these properties to resolve the TypeScript error
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
}

export default DefaultPalette
