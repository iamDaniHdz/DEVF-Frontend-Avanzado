import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { BASE_URL } from '@/services/userServices'
import { AuthContext } from '@/context/AuthContext'
import '@/assets/css/index.css'
import { Link } from 'react-router-dom'

const Home = () => {
  const [items, setItems] = useState([])
  const [resultados, setResultados] = useState([])
  const { isAuth } = useContext(AuthContext)

  useEffect(() => {
    axios
      .get(`${BASE_URL}/item`)
      .then(function (response) {
        const itemData = response.data
        setItems(itemData)
        setResultados(itemData)
        console.log(itemData)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const buscar = (event) => {
    const q = event.currentTarget.value
    const resultado = items.filter((item) => {
      return item.product_name.toLowerCase().includes(q.toLowerCase())
    })
    setResultados(resultado)
    console.log(resultado)
  }

  return (
    <>
      <div className='container'>
        <h2 className='fw-normal mt-3'>Todas las categorías</h2>
        <input
          type='text'
          id='valor'
          placeholder='Buscar'
          onChange={buscar}
          autoComplete='off'
          className='form-control text-dark mt-3 mb-2'
        />
        <div className='row justify-content-center'>
          {resultados.length === 0
            ? <div className='d-flex row justify-content-center'>
              <div className='alert alert-danger d-flex align-items-center m-3' role='alert'>
                No se encontró el producto, intente con otro
              </div>
              <img src='src/assets/searching.svg' alt='' style={{ width: '18rem' }} />
            </div>
            : resultados.map((item) => {
              return (
                <div key={item._id} className='card m-3 p-2 bg-light' style={{ width: '18rem' }}>
                  {item?.image !== undefined
                    ? <img src={item.image} alt='' className='card-img-top rounded img-fluid' style={{ height: '18rem', backgroundSize: 'cover' }} />
                    : <img src='https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png' alt='' className='card-img-top rounded img-fluid' style={{ height: '18rem', backgroundSize: 'cover' }} />}
                  <div className='card-body d-flex flex-wrap align-items-center'>
                    <h4 className='card-title fw-normal'>{item.product_name}</h4>
                    <div className='d-flex justify-content-between align-items-center w-100'>
                      <h2 className='fw-light'>${item.price}</h2>
                      {isAuth === true
                        ? <Link to={`/${item._id}`}><button className='btn btn-warning'>Comprar</button></Link>
                        : <Link to='/login'><button className='btn btn-warning disabled'>Comprar</button></Link>}
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Home
