import { useContext } from 'react'
import useForm from '@/hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { loginUserServices } from '@/services/userServices'
import { AuthContext } from '@/context/AuthContext'
import '@/assets/css/form.css'

const Login = () => {
  const navigate = useNavigate()
  const { loginUser } = useContext(AuthContext)

  const sendData = async (data) => {
    try {
      const result = await loginUserServices(data)
      // console.log(result.data.token)
      if (result.status === 200) {
        loginUser(result.data.token)
        navigate('/')
      }
    } catch (err) {
      console.log('Ocurrio un erron en Login: ' + err)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className='d-flex align-items-center justify-content-evenly container p-3 position-absolute top-50 start-50 translate-middle '>
          <div className=''>
            <img className='' src='src/assets/login.svg' alt='' width='350rem' />
          </div>
          <div className='bg-light d-flex flex-column p-4 rounded w-25'>
            <h1 className='h3 mb-3 fw-normal text-center'>Iniciar Sesión</h1>
            <div className='form-floating m-1'>
              <input
                type='email'
                className='form-control'
                id='floatingEmail'
                name='email'
                placeholder='name@example.com'
                value={input.email}
                onChange={handleInputChange}
              />
              <label htmlFor='floatingEmail'>Correo electrónico</label>
            </div>
            <div className='form-floating m-1'>
              <input
                type='password'
                className='form-control'
                id='floatingPassword'
                name='password'
                placeholder='Password'
                value={input.password}
                onChange={handleInputChange}
              />
              <label htmlFor='floatingPassword'>Contraseña</label>
            </div>

            <button className='btn btn-lg btn-dark m-1' type='submit'>
              Sign in
            </button>

            <p className='mt-3'>¿No tienes cuenta? <a href='' className='text-warning'>Regístrate</a></p>
          </div>

        </div>
      </form>
    </main>
  )
}

export default Login
