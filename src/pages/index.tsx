import Dashboard from 'src/views/pages/dashboard/Dashboard'
import Hotels from 'src/views/pages/hotels/Hotels'
import Flights from 'src/views/pages/flights/Flights'
import Activities from 'src/views/pages/activities/Activities'

const ActivitiesBoard = () => {
  return (
    <>
      <Dashboard />
      <Flights />
      <Hotels />
      <Activities />
    </>
  )
}

export default ActivitiesBoard
