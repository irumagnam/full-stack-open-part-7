import axios from 'axios'
import authService from '../services/login'
const baseUrl = '/api/users'

const headerConfig = () => {
  const user = authService.getUser()
  return {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  }
}

const getAll = () => {
  return axios.get(baseUrl, headerConfig())
}

export default {
  getAll,
}
