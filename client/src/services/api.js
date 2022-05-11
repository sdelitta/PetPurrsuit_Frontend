import Axios from 'axios'

export const BASE_URL = 'http://localhost:8000'

// let BASE_URL = process.env.NODE_ENV === 'local' ? 'https://localhost:3001' : 'https://immense-plains-38165.herokuapp.com'

const Client = Axios.create({ baseURL: BASE_URL })


Client.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token')
      if (token) {
          config.headers['authorization'] = `Bearer ${token}`
      }
      return config 
    },
    (error) => Promise.reject(error)
  )


export default Client