import { useDispatch } from 'react-redux'
import { authenticate } from '../reducers/userReducer'
import { useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import Input from './Input'
import MyButton from './MyButton'

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const authenticateUser = (event) => {
    event.preventDefault()
    const formElem = event.target
    dispatch(
      authenticate({
        username: formElem.username.value,
        password: formElem.password.value,
      })
    )
    formElem.username.value = ''
    formElem.password.value = ''
    navigate('/')
  }

  return (
    <form id='loginForm' onSubmit={authenticateUser}>
      <Input name='username' />
      <Input name='password' type='password' />
      <MyButton id='login-button' type='submit' label='login' />
    </form>
  )
}

export default LoginForm
