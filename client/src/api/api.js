import axios from 'axios'

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
    return response
  } catch (error) {
    alert(error)
  }
}

export const signInRequest = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3001/api/user/login', {
      email: email,
      password: password,
    })
    return response
  } catch (error) {
    alert(error)
  }
}
