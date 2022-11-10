import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { getSingleUser } from '@/services/userServices'
import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  const { isAuth, logout } = useContext(AuthContext)
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
    <nav className='header'>
      <Link to='/' className='header__logo'>
        <img src='src/assets/css/amazon.png' alt='' style={{ width: '5rem' }} />
      </Link>
      <ul className='header__nav-list'>
        <>
          <li className='header__list-item'>
            <Link to='/' className='header__item-link'>Home</Link>
          </li>
          <li className='header__list-item'>
            <Link to='/dashboard' className='header__item-link'>Dashboard</Link>
          </li>
          {
          !isAuth
            ? (
              <>
                <li className='header__list-item'>
                  <Link to='/login' className='header__item-link'>Inicia sesión</Link>
                </li>
                <li className='header__list-item'>
                  <Link to='/signup' className='header__item-link'>Registrate</Link>
                </li>
              </>
              )
            : (
              <>
                <li className='header__list-item'>
                  <Link to='/' className='header__item-link ' onClick={logout}>Logout</Link>
                </li>
                <li className='header__list-item'>
                  <Link to='/secret' className='header__item-link'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-person-circle' viewBox='0 0 16 16'>
                    <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                    <path fill-rule='evenodd' d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z' />
                    </svg> {userData.first_name}
                  </Link>
                </li>
              </>

              )
        }
        </>
      </ul>
    </nav>
  )
}
export default Header
