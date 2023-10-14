import { useDispatch, useSelector } from 'react-redux'
import { addComments, deleteBlog, likeBlog } from '../reducers/blogReducer'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import MyButton from './MyButton'
import { Box } from '@mui/material'

const Blog = ({ blog }) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this blog?')) {
      dispatch(deleteBlog(blog))
      navigate('/blogs')
    }
  }

  const handleAddComments = (event) => {
    event.preventDefault()
    const formElem = event.target
    dispatch(addComments(blog, formElem.comments.value))
    formElem.comments.value = ''
  }

  if (!blog) {
    return null
  }

  return (
    <div>
      <Box sx={{ fontSize: 'h6.fontSize', mt: 2 }}>{blog.title}</Box>
      <div>
        <a href={blog.url} target='_new'>
          {blog.url}
        </a>
      </div>
      <div>{blog.likes} likes</div>
      <div>added by {blog.user.name}</div>
      <div>
        <MyButton label='like' onClick={() => dispatch(likeBlog(blog))} />
        {blog.user.username === loggedInUser.username && (
          <MyButton label='delete' onClick={handleDelete} />
        )}
      </div>
      <div>
        <form onSubmit={handleAddComments}>
          <Input name='comments' />
          <MyButton label='add comment' type='submit' />
        </form>
        <ul>
          {blog.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Blog
