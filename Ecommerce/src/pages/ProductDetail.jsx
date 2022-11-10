import { useParams } from 'react-router-dom'
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
      <div className=''>
        <div className='d-flex bg-light m-5 d-flex justify-content-center rounded-start shadow  align-items-center'>
          <div className='d-flex me-4 ms-4 shadow'>
            {data?.image !== undefined
              ? <img src={data.image} alt='' className='' style={{ height: '18rem', backgroundSize: 'cover' }} />
              : <img src='https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png' alt='' className='card-img-top rounded img-fluid' style={{ height: '18rem', backgroundSize: 'cover' }} />}
          </div>
          <div className='p-4 rounded-end shadow'>
            <h1 className=''>{data.product_name}</h1>
            <div className='d-flex align-content-center mb-4 mt-3'>
              <h4 className='me-5 fw-normal'>$ {data.price}</h4>
              {isAuth
                ? <button className='btn btn-warning me-5'>Comprar</button>
                : (
                  <>
                    <button className='btn btn-warning' disabled='true'>Comprar</button>
                    <p className=''>Regístrate o inicia sesión para comprar productos</p>
                  </>
                  )}
              {
              data.isActive
                ? <button className='btn btn-success' disabled='true'>Disponible</button>
                : <button className='btn btn-success' disabled='true'>No disponible</button>
            }
            </div>
            <p className=''>Hasta <b>12 meses sin intereses</b> de ${parseFloat(data.price / 12).toFixed(2)}</p>
            <p className=''><b>Descripción:</b> {data.description}</p>
            <p className=''><b>Categoría:</b> {data.category}</p>
            <p className=''><b>Marca:</b> {data.brand}</p>
            <p className=''><b>SKU:</b> {data.sku}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductDetail
