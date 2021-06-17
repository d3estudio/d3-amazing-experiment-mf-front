import axios from 'axios'

 const api = axios.create({
  baseURL: `${process.env.BASE_URL}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
})

export default api;