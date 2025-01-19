// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Activities',
      icon: 'tabler:road',
      path: '/Activities'
    },
    {
      title: 'Hotels',
      icon: 'tabler:building-skyscraper',
      path: '/Hotels'
    },
    {
      title: 'Flights',
      icon: 'mdi:airplane',
      path: '/flights'
    },
    {
      title: 'Study',
      icon: 'tabler:school',
      path: '/Study'
    },
    {
      title: 'Visa',
      icon: 'tabler:id',
      path: '/Visa'
    },
    {
      title: 'Immigration',
      icon: 'tabler:luggage',
      path: '/Immigration'
    },
    {
      title: 'Medical',
      icon: 'tabler:first-aid-kit',
      path: '/Medical'
    },
    {
      title: 'Vacation Packages',
      icon: 'tabler:box',
      path: '/Vacation-Packages'
    }
  ]
}

export default navigation
