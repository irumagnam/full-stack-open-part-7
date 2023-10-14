import { forwardRef, useImperativeHandle, useState } from 'react'
import { toggleDisplay } from '../reducers/toggleReducer'
import { useDispatch, useSelector } from 'react-redux'
import MyButton from './MyButton'

const Togglable = forwardRef(({ buttonLabel, children }, refs) => {
  const isShowing = useSelector((state) => state.toggle[buttonLabel])
  const dispatch = useDispatch()
  const toggleVisibility = () => dispatch(toggleDisplay(buttonLabel))
  useImperativeHandle(refs, () => ({ toggleVisibility }))

  return (
    <div>
      <MyButton
        label={isShowing ? 'cancel' : buttonLabel}
        onClick={toggleVisibility}
      />
      {isShowing && children}
    </div>
  )
})

export default Togglable
