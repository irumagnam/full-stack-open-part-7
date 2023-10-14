import deepFreeze from 'deep-freeze'
import reducer, { setUser, removeUser } from '../reducers/userReducer'

describe('user reducer', () => {
  const initialState = { list: [], loggedInUser: null }
  const userData = { name: 'John Doe', username: 'johndoe' }

  test('returns a proper initial state when called with empty action', () => {
    const state = initialState
    deepFreeze(state)
    const newState = reducer(state, {})
    expect(newState).toBe(initialState)
  })

  test('updates state properly when calling setUser()', () => {
    const state = initialState
    deepFreeze(state)
    const newState = reducer(state, setUser(userData))
    expect(newState.loggedInUser).toEqual(userData)
  })

  test('updates state properly when calling removeUser()', () => {
    const state = initialState
    deepFreeze(state)
    let newState = reducer(state, setUser(userData))
    deepFreeze(newState)
    newState = reducer(newState, removeUser())
    expect(newState).toEqual(initialState)
  })
})
