import { createContext, useState, useContext, useEffect } from 'react'

const ProductContext = createContext()

function ProductProvider (props) {
  const [data, setData] = useState([] || {}) // Lista de data
  const [selectedProduct, setSelectedProduct] = useState([] || {})

  const getData = async () => {
    try {
      const req = await window.fetch('https://ecomerce-master.herokuapp.com/api/v1/item')
      const res = await req.json()
      setData(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const value = {
    data,
    selectedProduct,
    setSelectedProduct
  }

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  )
}

const useProductContext = () => {
  const context = useContext(ProductContext)
  return context
}

export {
  ProductProvider,
  useProductContext
}
