import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'
import { displayMessage, error, info } from './notificationReducer'
import { loadUsers, logout } from './userReducer'

const blogSlicer = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload
    },
    appendBlog(state, action) {
      return state.concat(action.payload)
    },
    modifyBlog(state, action) {
      return state.map((blog) =>
        blog.id === action.payload.id ? action.payload : blog
      )
    },
    removeBlog(state, action) {
      return state.filter((blog) => blog.id !== action.payload.id)
    },
  },
})

// action creator
export const loadBlogs = () => (dispatch) => {
  blogService
    .getAll()
    .then((resp) => dispatch(setBlogs(resp.data)))
    .catch((ex) => handleException(ex, dispatch))
}

// action creator
export const addNewBlog = (blog) => (dispatch) => {
  blogService
    .createBlog(blog)
    .then((resp) => {
      dispatch(appendBlog(resp.data))
      dispatch(loadUsers())
      dispatch(displayMessage(info(`you added ${blog.title}`)))
    })
    .catch((ex) => handleException(ex, dispatch))
}

// action creator
export const likeBlog = (blog) => (dispatch) => {
  const revisedBlog = { ...blog, likes: blog.likes + 1 }
  blogService
    .updateBlog(revisedBlog)
    .then((resp) => {
      dispatch(modifyBlog(revisedBlog))
    })
    .catch((ex) => handleException(ex, dispatch))
}

// action creator
export const deleteBlog = (blog) => (dispatch) => {
  blogService
    .deleteBlog(blog)
    .then((resp) => {
      dispatch(removeBlog(blog))
      dispatch(loadUsers())
      dispatch(displayMessage(info(`you deleted ${blog.title}`)))
    })
    .catch((ex) => handleException(ex, dispatch))
}

// action creator
export const addComments = (blog, comments) => (dispatch) => {
  blogService
    .addComments(blog, comments)
    .then((resp) => {
      dispatch(modifyBlog({ ...blog, comments: [...blog.comments, comments] }))
    })
    .catch((ex) => handleException(ex, dispatch))
}

const handleException = (exception, dispatch) => {
  const errorText = exception.resp.data.error
  // logout the user if token has expired
  if (errorText === 'token expired') {
    dispatch(logout())
    dispatch(setBlogs([]))
  }
  // display the error message
  dispatch(displayMessage(error(errorText)))
}

export const { setBlogs, appendBlog, modifyBlog, removeBlog } =
  blogSlicer.actions

export default blogSlicer.reducer
