import { createHashRouter } from 'react-router-dom'
import CreateActivity from './pages/owner/CreateActivity'
import ActivityDetail from './pages/customer/ActivityDetail'
import ReserveForm from './pages/customer/ReserveForm'

export const router = createHashRouter([
  { path: '/', element: <CreateActivity /> },
  { path: '/activity/:id', element: <ActivityDetail /> },
  { path: '/reserve/:id', element: <ReserveForm /> }
])