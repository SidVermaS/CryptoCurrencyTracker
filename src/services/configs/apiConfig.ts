import axios from 'axios'
import { VITE_BASE_URL } from '../../consts/env'

const api = axios.create({
  baseURL: VITE_BASE_URL
})
export default api;