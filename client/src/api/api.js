import axios from 'axios'

export const getRates = async () => {
  const response = await axios.get(
    'https://api.exchangeratesapi.io/latest?base=USD'
  )
  return response.data
}

export const signUpRequest = async (name, email, password) => {
  try {
    const response = await axios.post('api/user/register', {
      name: name,
      email: email,
      password: password,
    })
    return response
  } catch (error) {
    alert(error)
  }
}
