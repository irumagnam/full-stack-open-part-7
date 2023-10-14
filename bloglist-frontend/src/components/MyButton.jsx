import { Button } from '@mui/material'

const MyButton = ({ label, ...props }) => {
  return (
    <Button
      variant='contained'
      color='secondary'
      size='small'
      sx={{ mt: 1, mr: 1 }}
      {...props}
    >
      {label}
    </Button>
  )
}

export default MyButton
