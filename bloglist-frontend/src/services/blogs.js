import axios from 'axios'
import session from './login'
const baseUrl = '/api/blogs'

const headerConfig = () => {
  const user = session.getUser()
  return {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  }
}

const getAll = () => {
  return axios.get(baseUrl, headerConfig())
}

const createBlog = (blog) => {
  return axios.post(baseUrl, blog, headerConfig())
}

const updateBlog = (blog) => {
  // update user object with id
  const revisedBlog = { ...blog, user: blog.user.id }
  return axios.put(`${baseUrl}/${blog.id}`, revisedBlog, headerConfig())
}

const deleteBlog = (blog) => {
  return axios.delete(`${baseUrl}/${blog.id}`, headerConfig())
}

const addComments = (blog, comments) => {
  return axios.post(
    `${baseUrl}/${blog.id}/comments`,
    { comments },
    headerConfig()
  )
}

export default {
  getAll,
  createBlog,
  updateBlog,
  deleteBlog,
  addComments,
}
