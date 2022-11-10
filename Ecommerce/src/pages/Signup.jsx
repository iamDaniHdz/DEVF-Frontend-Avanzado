import useForm from '@/hooks/useForm'
import { useNavigate, Link } from 'react-router-dom'
import { registerUserServices } from '@/services/userServices'
import '@/assets/css/form.css'

const Signup = () => {
  const navigate = useNavigate()

  const sendData = async (data) => {
    console.log(data)
    try {
      const result = await registerUserServices(data)
      if (result.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.log('Ocurrio un error en Signup: ' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: ''
  })

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className='d-flex align-items-center justify-content-evenly container p-3'>
          <div className='bg-light d-flex flex-column p-4 rounded' style={{ width: '25rem' }}>
            <h1 className='h3 mb-3 fw-normal text-center'>Regístrate</h1>
            <div className='form-floating m-1'>
              <input
                type='text'
                className='form-control'
                id='first_name'
                name='first_name'
                placeholder='John'
                value={input.first_name}
                onChange={handleInputChange}
              />
              <label htmlFor='first_name'>Nombre</label>
            </div>

            <div className='form-floating m-1'>
              <input
                type='text'
                className='form-control'
                id='last_name'
                name='last_name'
                placeholder='Doe'
                value={input.last_name}
                onChange={handleInputChange}
              />
              <label htmlFor='last_name'>Apellido</label>
            </div>

            <div className='form-floating m-1'>
              <select className='form-select' id='gender' name='gender' value={input.gender} onChange={handleInputChange}>
                <option value=''>Escoge...</option>
                <option value='M'>Hombre</option>
                <option value='F'>Mujer</option>
              </select>
              <label htmlFor='gender'>Género</label>
            </div>

            <div className='form-floating m-1'>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                placeholder='name@example.com'
                value={input.email}
                onChange={handleInputChange}
              />
              <label htmlFor='email'>Correo electrónico</label>
            </div>

            <div className='form-floating m-1'>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                placeholder='Password'
                value={input.password}
                onChange={handleInputChange}
              />
              <label htmlFor='password'>Contraseña</label>
            </div>

            <button className='btn btn-lg btn-dark m-1' type='submit'>
              Registrarse
            </button>

            <p className='mt-3 text-center'>¿Ya tienes una cuenta? <Link to='/login'><a className='text-warning'>Inicia sesión</a></Link>
            </p>

          </div>
          <div className=''>
            <img className='' src='src/assets/register.svg' alt='' width='350rem' />
          </div>
        </div>
      </form>
    </main>
  )
}

export default Signup
