import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
import './header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  const { isAuth, logout } = useContext(AuthContext)
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
                  <Link to='/secret' className='header__item-link  header__item-link--is-active'>Secret</Link>
                </li>
                <li className='header__list-item'>
                  <Link to='/' className='header__item-link  header__item-link--is-active' onClick={logout}>Logout</Link>
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
