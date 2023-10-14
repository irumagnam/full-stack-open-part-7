import { TextField } from '@mui/material'

const Input = ({ label, id, name, type, value, onChange }) => {
  return (
    <TextField
      variant='filled'
      type={type}
      id={id || name}
      label={name}
      name={name}
      value={value}
      onChange={onChange}
      sx={{ display: 'block', mt: 1 }}
    />
  )
}

export default Input
