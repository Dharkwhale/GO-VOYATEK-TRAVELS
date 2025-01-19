import { useEffect, ReactNode } from 'react'
import { Direction as MuiDirection } from '@mui/material'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import stylisRTLPlugin from 'stylis-plugin-rtl'

// Import both EmotionCache types
import { EmotionCache as EmotionCacheUtils } from '@emotion/utils'
import { EmotionCache as EmotionCacheReact } from '@emotion/react'

interface DirectionProps {
  children: ReactNode
  direction: MuiDirection
}

const styleCache = (): EmotionCacheUtils => {
  return createCache({
    key: 'rtl',
    prepend: true,
    stylisPlugins: [stylisRTLPlugin]
  }) as unknown as EmotionCacheUtils
}

const Direction = (props: DirectionProps) => {
  const { children, direction } = props

  useEffect(() => {
    document.dir = direction
  }, [direction])

  if (direction === 'rtl') {
    return <CacheProvider value={styleCache() as EmotionCacheReact}>{children}</CacheProvider>
  }

  return <>{children}</>
}

export default Direction
