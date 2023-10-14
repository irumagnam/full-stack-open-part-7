import { createSlice } from '@reduxjs/toolkit'

const toggleSlicer = createSlice({
  name: 'toggle',
  initialState: {},
  reducers: {
    toggleDisplay(state, action) {
      const blogId = action.payload
      state[blogId] = !state[blogId]
    },
  },
})

export const { toggleDisplay } = toggleSlicer.actions
export default toggleSlicer.reducer
