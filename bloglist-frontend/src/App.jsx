import { useEffect, useRef } from 'react'
import { Container, Button, AppBar, Toolbar, Box } from '@mui/material'
import { Routes, Route, Link, useMatch, useNavigate } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers, logout } from './reducers/userReducer'
import UserList from './components/UserList'
import BlogList from './components/BlogList'
import User from './components/User'
import { loadBlogs } from './reducers/blogReducer'
import Blog from './components/Blog'

const useItemFinder = (items, path) => {
  const idName = path.split(':')[1]
  const match = useMatch(path)
  const findItem = (id) => items.find((i) => i[idName] === id)
  return match ? findItem(match.params[idName]) : null
}

const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const blogs = useSelector((state) => state.blogs)
  const users = useSelector((state) => state.user.list)
  const loggedInUser = useSelector((state) => state.user.loggedInUser)
  const blogFormRef = useRef()
  const selectedUser = useItemFinder(users, '/users/:id')
  const selectedBlog = useItemFinder(blogs, '/blogs/:id')

  useEffect(() => {
    if (loggedInUser) {
      dispatch(loadUsers())
      dispatch(loadBlogs())
    }
  }, [loggedInUser])

  const logoutUser = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <Container fixed>
      <AppBar position='static'>
        <Toolbar>
          <Button color='inherit' component={Link} to='/'>
            home
          </Button>
          <Button color='inherit' component={Link} to='/blogs'>
            blogs
          </Button>
          <Button color='inherit' component={Link} to='/users'>
            users
          </Button>
          {loggedInUser === null && (
            <Button color='inherit' component={Link} to='/login'>
              login
            </Button>
          )}
          {loggedInUser && (
            <>
              <Box flexGrow={1} />
              <em>{loggedInUser.name} logged in</em>
              <Button color='inherit' id='logout-button' onClick={logoutUser}>
                (logout)
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Box
        sx={{ fontSize: 'h5.fontSize', borderBottom: '1px solid #ccc', mb: 1 }}
      >
        bloglist
      </Box>
      <Notification />
      {loggedInUser === null && <LoginForm />}
      {loggedInUser && (
        <div>
          <Togglable buttonLabel='create blog' ref={blogFormRef}>
            <BlogForm
              callBackOnCreate={() => blogFormRef.current.toggleVisibility()}
            />
          </Togglable>
          <Routes>
            <Route path='/' element={<BlogList />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/blogs' element={<BlogList />} />
            <Route path='/users/:id' element={<User user={selectedUser} />} />
            <Route path='/blogs/:id' element={<Blog blog={selectedBlog} />} />
          </Routes>
        </div>
      )}
    </Container>
  )
}

export default App
