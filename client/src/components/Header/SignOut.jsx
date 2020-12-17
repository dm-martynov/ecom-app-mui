import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { signOutStart } from '../../redux/auth/auth.actions'

const SignOut = () => {
  const dispatch = useDispatch()
  return (
    <Button
      style={{ color: 'white', marginRight: 15 }}
      onClick={() => dispatch(signOutStart())}
    >
      SIGN OUT
    </Button>
  )
}

export default SignOut
