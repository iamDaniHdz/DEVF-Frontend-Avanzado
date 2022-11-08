import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '@/services/userServices'

const Home = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get(`${BASE_URL}/item`)
      .then((response) => {
        const itemData = response.data
        setItems(itemData)
        console.log(itemData)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <>
      <div className='container'>
        <h2>Todas las categorías</h2>
        <div className='bg-primary row justify-content-center'>
          {items.map((item) => {
            return (
              <div key={item._id} className='card m-3 p-2 bg-light' style={{ width: '18rem' }}>
                {item?.image !== undefined
                  ? <img src={item.image} alt='' className='card-img-top rounded img-fluid' style={{ height: '18rem', backgroundSize: 'cover' }} />
                  : <img src='https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png' alt='' className='card-img-top rounded img-fluid' style={{ height: '18rem', backgroundSize: 'cover' }} />}
                <div className='card-body'>
                  <h5 className='card-title'>{item.product_name}</h5>
                  <div className='d-flex'>
                    <p>${item.price}</p>
                    <a className='btn btn-warning'>Comprar</a>
                  </div>
                  {/* <p className='card-text'>{item.description}</p> */}
                  {/* <p>{item.brand}</p> */}
                  {/* <p>{item.category}</p> */}
                  {/* <p>{item.description}</p> */}
                  {/* {item.isActive === true ? <p>Disponible</p> : <p>No disponible</p>} */}
                  {/* <p>{item.sku}</p> */}
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
