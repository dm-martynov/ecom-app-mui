import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const getRates = async () => {
  const response = await axios.get(
    'https://api.exchangeratesapi.io/latest?base=USD'
  )

  return response.data
}

export const signUpRequest = async (name, email, password) => {
  try {
    const response = await axios.post(
      'http://localhost:3001/api/user/register',
      {
        name: name,
        email: email,
        password: password,
      }
    )

    return response.data
  } catch (error) {
    return error
  }
}

export const signInRequest = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3001/api/user/login', {
      email: email,
      password: password,
    })

    console.log(response)
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

export const getProductsRequest = async () => {
  try {
    const response = axios.get('http://localhost:3001/api/products/get')

    return response.data
  } catch (error) {
    return error
  }
}
