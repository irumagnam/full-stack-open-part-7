import { createSlice } from '@reduxjs/toolkit'
import authService from '../services/login'
import userService from '../services/users'
import { displayMessage } from './notificationReducer'

const userSlicer = createSlice({
  name: 'user',
  initialState: {
    list: [],
    loggedInUser: authService.getUser(),
  },
  reducers: {
    setUsers(state, action) {
      console.log(action)
      return { ...state, list: action.payload }
    },
    setUser(state, action) {
      return { ...state, loggedInUser: action.payload }
    },
    removeUser(state, action) {
      return { ...state, loggedInUser: null }
    },
  },
})

// action creator
export const loadUsers = () => (dispatch) => {
  userService.getAll().then((resp) => dispatch(setUsers(resp.data)))
}

// action creator
export const authenticate = (credentials) => (dispatch) => {
  authService
    .login(credentials)
    .then((userData) => {
      dispatch(setUser(userData))
    })
    .catch((exception) => {
      const errorText = exception.response.data.error
      // display the error message
      dispatch(displayMessage({ type: 'error', text: errorText }))
    })
}

export const logout = () => (dispatch) => {
  authService.logout()
  // display message
  dispatch(removeUser())
}

export const { setUsers, setUser, removeUser } = userSlicer.actions

export default userSlicer.reducer
