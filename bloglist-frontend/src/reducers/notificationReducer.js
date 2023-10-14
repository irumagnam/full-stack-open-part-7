import { createSlice } from '@reduxjs/toolkit'

const notificationSlicer = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setMessage(state, action) {
      return action.payload
    },
    removeMessage(state, action) {
      return null
    },
  },
})

// action creator
let timer
export const displayMessage =
  (message, timeoutInSeconds = 5) =>
  (dispatch) => {
    // clear any timers that are running to hide current message
    if (timer) {
      clearTimeout(timer)
      timer = false
    }
    // display message
    dispatch(setMessage(message))
    // hide message after the desired timeout
    setTimeout(() => dispatch(removeMessage()), timeoutInSeconds * 1000)
  }

export const info = (text) => ({ type: 'info', text })
export const warn = (text) => ({ type: 'warning', text })
export const error = (text) => ({ type: 'error', text })

export const { setMessage, removeMessage } = notificationSlicer.actions

export default notificationSlicer.reducer
