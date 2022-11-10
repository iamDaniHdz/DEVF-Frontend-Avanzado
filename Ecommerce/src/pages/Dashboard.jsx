import { useContext, useEffect, useState } from 'react'
import { getSingleUser } from '@/services/userServices'
import { AuthContext } from '@/context/AuthContext'
import '../assets/css/index.css'

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await getSingleUser(user.id)
        if (result.status === 200) {
          setUserData(result.data)
        }
      } catch (error) {
        console.log('Ocurrió un error en Dashboard: ' + error.message)
      }
    }
    fetchUserData()
  }, [])

  return (
    // role, id
    <div className=''>
      <div className='d-flex m-5 justify-content-center text-light'>
        <div className='bg-light p-3 rounded-start shadow d-flex'>
          {console.log(userData)}
          {
      userData?.gender === 'M'
        ? <img src='\src\assets\male-avatar.svg' alt='' style={{ width: '18rem' }} />
        : <img src='\src\assets\female-avatar.svg' alt='' style={{ width: '18rem' }} />
    }
        </div>
        <div className='p-4 rounded-end' style={{ backgroundColor: '#232f3e' }} shadow>
          <div className='mb-4'>
            <h2>Hola {userData.first_name} {userData.last_name}</h2>
            {
      user?.role === 'CUSTOMER' && <h4>Bienvenido seas Cliente</h4>
    }
            {
      user?.role === 'ADMIN' && <h4>Bienvenido seas Admin</h4>
    }
          </div>
          {
      userData?.first_name && <p className='first_name'>Nombre: {userData.first_name} </p>
    }
          {
      userData?.last_name && <p className='last_name'>Apellido: {userData.last_name}</p>
    }
          {
      userData?.gender && <p className='gender'>Género: {userData.gender} </p>
    }
          {
      userData?.email && <p className='email'>Correo: {userData.email} </p>
    }
          {
      userData?.birth_date && <p className='birth_date'>Cumpleaños: {(userData.birth_date)} </p>
    }
          {
      userData?.role && <p className='role'>Role: {(userData.role)} </p>
    }
          {
      userData?._id && <p className='birth_date'>ID: {(userData._id)} </p>
    }
        </div>
      </div>
    </div>
  )
}

export default Dashboard
