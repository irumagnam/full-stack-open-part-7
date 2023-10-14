import deepFreeze from 'deep-freeze'
import reducer, {
  setMessage,
  removeMessage,
  info,
} from '../reducers/notificationReducer'

describe('notification reducer', () => {
  const initialState = null
  const sampleMessage = info('sample message')

  test('returns a proper initial state when called with empty action', () => {
    const newState = reducer(initialState, {})
    expect(newState).toEqual(initialState)
  })

  test('updates state properly when calling setMessage()', () => {
    const newState = reducer(initialState, setMessage(sampleMessage))
    expect(newState).toEqual(sampleMessage)
  })

  test('updates state properly when calling removeMessage()', () => {
    const newState = reducer(sampleMessage, removeMessage())
    expect(newState).toEqual(initialState)
  })
})
