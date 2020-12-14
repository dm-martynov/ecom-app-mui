import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const instance = axios.create({
  baseURL: 'http://localhost:3001/api/',
})

export const getRates = async () => {
  const response = await axios.get(
    'https://api.exchangeratesapi.io/latest?base=USD'
  )

  return response.data
}

export const signUpRequest = async (name, email, password) => {
  try {
    const response = await instance.post('user/register', {
      name: name,
      email: email,
      password: password,
    })

    return response.data
  } catch (error) {
    return error
  }
}

export const signInRequest = async (email, password) => {
  try {
    const response = await instance.post('user/login', {
      email: email,
      password: password,
    })

    cookies.set('jwt-token', response.data.token, { path: '/', maxAge: 172800 })
    return {
      id: response.data._id,
      name: response.data.name,
      email: response.data.email,
    }
  } catch (error) {
    return error
  }
}

export const getProductsRequest = async (limit, skip) => {
  try {
    const authToken = cookies.get('jwt-token')
    const response = await instance.get('products/get', {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
      params: { skip: skip, limit: limit },
    })

    return response.data
  } catch (error) {
    return error
  }
}
