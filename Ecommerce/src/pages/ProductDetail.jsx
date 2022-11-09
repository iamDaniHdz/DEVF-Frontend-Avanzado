import { useParams } from 'react-router-dom'
// import { useProductContext } from '../context/SearchContext'
import useGetData from '../hooks/useGetData'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const ProductDetail = () => {
  const { isAuth } = useContext(AuthContext)
  const { id } = useParams()
  const { data } = useGetData(`https://ecomerce-master.herokuapp.com/api/v1/item/${id}`)
  console.log(data)

  return (
    <>
      <h1>ProductDetail</h1>
      {data?.image !== undefined
        ? <img src={data.image} alt='' className='rounded' style={{ height: '18rem', backgroundSize: 'cover' }} />
        : <img src='https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png' alt='' className='card-img-top rounded img-fluid' style={{ height: '18rem', backgroundSize: 'cover' }} />}      <h1 className=''>{data.product_name}</h1>
      <h3 className=''>$ {data.price}</h3>
      <p className=''> Description: {data.description}</p>
      <p className=''>Category: {data.category}</p>
      <p className=''>Brand: {data.brand}</p>

      {isAuth
        ? <button className='btn btn-warning'>Comprar</button>
        : (
          <>
            <button className='btn btn-warning' disabled='true'>Comprar</button>
            <p className=''>Regístrate o inicia sesión para comprar productos</p>
          </>
          )}
    </>
  )
}
export default ProductDetail
