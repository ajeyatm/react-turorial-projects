import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetchUsers = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const getUsersByAxios = async () => {
    try {
      const res = await axios.get(url)
      console.log('resp from axios: =', res.data)
      setData(res.data)
    } catch (error) {
      setError(error)
    }
  }
  useEffect(() => {
    getUsersByAxios()
  }, [])

  return {
    data,
    error,
    loading: !error && !data?.length, // ! => no, not
  }
}

export default useFetchUsers
