import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL || ''

export const http = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

http.interceptors.response.use(
  (res) => res,
  (err) => {
    const message = err?.response?.data?.detail || err?.message || 'Erro de rede'
    return Promise.reject(new Error(message))
  },
)
