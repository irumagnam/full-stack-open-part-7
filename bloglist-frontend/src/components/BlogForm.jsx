import Input from '../components/Input'
import { useDispatch } from 'react-redux'
import { addNewBlog } from '../reducers/blogReducer'
import { useNavigate } from 'react-router-dom'
import MyButton from './MyButton'

const BlogForm = ({ callBackOnCreate }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputs = ['title', 'author', 'url']

  const addBlog = (event) => {
    event.preventDefault()
    const formElem = event.target
    const blog = {}
    inputs.forEach((i) => (blog[i] = formElem[i].value))
    dispatch(addNewBlog(blog))
    inputs.forEach((i) => (formElem[i].value = ''))
    callBackOnCreate()
    navigate('/blogs')
  }

  return (
    <form onSubmit={addBlog}>
      {inputs.map((name, i) => (
        <Input name={name} />
      ))}
      <MyButton label='submit' type='submit' />
    </form>
  )
}

export default BlogForm
