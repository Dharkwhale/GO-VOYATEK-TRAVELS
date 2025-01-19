// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Activities',
      icon: 'tabler:road',
      path: '/activities'
    },
    {
      title: 'Hotels',
      icon: 'tabler:building-skyscraper',
      path: '/hotels'
    },
    {
      title: 'Flights',
      icon: 'mdi:airplane',
      path: '/flights'
    },
    {
      title: 'Study',
      icon: 'tabler:school',
      path: '/study'
    },
    {
      title: 'Visa',
      icon: 'tabler:id',
      path: 'visa'
    },
    {
      title: 'Immigration',
      icon: 'tabler:luggage',
      path: '/immigration'
    },
    {
      title: 'Medical',
      icon: 'tabler:first-aid-kit',
      path: '/medical'
    },
    {
      title: 'Vacation Packages',
      icon: 'tabler:box',
      path: '/vacation-packages'
    }
  ]
}

export default navigation
