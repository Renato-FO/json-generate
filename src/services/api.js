const axios = require('axios')
const qs = require('qs')

  
  
const api = axios.create({
  baseURL: process.env.API_URL
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = 'Bearer' + process.env.API_TOKEN

  config.paramsSerializer = (params) => {
    return qs.stringify(params, { indices: false })
  }

  return config
})

