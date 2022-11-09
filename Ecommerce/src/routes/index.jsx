import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login, Secret, Signup, Dashboard, Error404, ProductDetail } from '@/pages'
import { AuthContext } from '@/context/AuthContext'

const RoutesIndex = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={isAuth ? <Dashboard /> : <Navigate to='/login' replace />} />
      <Route path='*' element={<Error404 />} />
      <Route path=':id' element={<ProductDetail />} />
    </Routes>
  )
}

export default RoutesIndex
