import axios from 'axios'

var api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true
})

export default api