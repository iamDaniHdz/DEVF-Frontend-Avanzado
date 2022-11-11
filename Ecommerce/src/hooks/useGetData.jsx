import { useEffect, useState } from 'react'

const useGetData = (url) => {
  const [data, setData] = useState([] || {})

  const getData = async () => {
    try {
      const req = await window.fetch(url)
      const res = await req.json()
      setData(res)
    } catch (error) {
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { data }
}

export default useGetData
