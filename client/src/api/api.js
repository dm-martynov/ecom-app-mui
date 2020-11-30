import axios from 'axios'

export const getRates = async () => {
  const response = await axios.get(
    'https://api.exchangeratesapi.io/latest?base=USD'
  )
  return response.data
}
