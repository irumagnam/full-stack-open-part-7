import deepFreeze from 'deep-freeze'
import reducer, {
  setBlogs,
  appendBlog,
  modifyBlog,
  removeBlog,
} from '../reducers/blogReducer'

describe('blog reducer', () => {
  const initialState = []
  const sampleBlog = {
    title: 'The Technium',
    author: 'Kevin Kelly',
    url: 'https://feedpress.me/thetechnium',
    likes: 0,
    user: { username: 'test' },
  }

  test('returns a proper initial state when called with empty action', () => {
    const newState = reducer(initialState, {})
    expect(newState).toEqual(initialState)
  })

  test('updates state properly when calling setBlogs()', () => {
    const newState = reducer(initialState, setBlogs([sampleBlog]))
    expect(newState).toHaveLength(1)
    expect(newState[0]).toEqual(sampleBlog)
  })

  test('updates state properly when calling appendBlog()', () => {
    const newState = reducer(initialState, appendBlog(sampleBlog))
    expect(newState).toHaveLength(1)
    expect(newState[0]).toEqual(sampleBlog)
  })

  test('updates state properly when calling modifyBlog()', () => {
    let newState = reducer(initialState, appendBlog(sampleBlog))
    deepFreeze(newState)
    newState = reducer(newState, modifyBlog({ ...sampleBlog, likes: 100 }))
    expect(newState).toHaveLength(1)
    expect(newState[0].likes).toEqual(100)
  })

  test('updates state properly when calling removeBlog()', () => {
    let newState = reducer(initialState, appendBlog(sampleBlog))
    deepFreeze(newState)
    newState = reducer(newState, removeBlog(sampleBlog))
    expect(newState).toHaveLength(0)
  })
})
