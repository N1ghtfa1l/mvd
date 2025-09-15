
import './styles/App.css'
import { AppRoutes } from './routes'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAdmin, setUser } from '../pages/AuthPage/slices/AuthPageSlice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const role = localStorage.getItem('role')
    if (!role) return
    if (role === "user") dispatch(setUser())
    else dispatch(setAdmin())
  }, [])

  return (
    <AppRoutes />
  )
}

export default App
