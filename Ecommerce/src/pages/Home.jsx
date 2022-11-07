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
      <div>Home</div>
      <ol className='Home'>
        {items.map((item) => {
          return (
            <div key={item._id} className='card p-3 m-3'>
              <h5>{item.product_name}</h5>
              <p>{item.brand}</p>
              <p>{item.category}</p>
              <p>{item.description}</p>
              {item.isActive === true ? <p>Disponible</p> : <p>No disponible</p>}
              <p>{item.isActive}</p>
              <p>{item.price}</p>
              <p>{item.sku}</p>
              <p>{item.image}</p>
            </div>
          )
        })}
      </ol>
    </>
  )
}

export default Home
