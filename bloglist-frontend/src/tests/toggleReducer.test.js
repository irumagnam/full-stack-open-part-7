import deepFreeze from 'deep-freeze'
import reducer, { toggleDisplay } from '../reducers/toggleReducer'

describe('toggle reducer', () => {
  const initialState = {
    displayComponent1: true,
    displayComponent2: false,
  }

  test('returns a proper initial state when called with empty action', () => {
    const state = initialState
    deepFreeze(state)
    const newState = reducer(state, {})
    expect(newState).toEqual(initialState)
  })

  test('toggles the display of a component', () => {
    const state = initialState
    deepFreeze(state)
    const compName = Object.keys(state)[0]
    const isVisible = state[compName]
    const newState = reducer(state, toggleDisplay(compName))
    console.log(state, newState)
    expect(newState[compName]).toEqual(!isVisible)
  })
})
