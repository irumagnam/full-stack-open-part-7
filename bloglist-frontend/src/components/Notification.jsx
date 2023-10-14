import { Alert } from '@mui/material'
import { useSelector } from 'react-redux'

const Notification = () => {
  const message = useSelector((state) => state.notification)

  if (message === null) {
    return null
  }

  return <Alert severity={message.type}>{message.text}</Alert>
}

export default Notification
