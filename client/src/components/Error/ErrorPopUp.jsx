import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { Alert as MuiAlert } from '@material-ui/lab/'

import { selectAllErrors } from '../../redux/auth/auth.selectors'
import { useDispatch, useSelector } from 'react-redux'
import { removeError } from '../../redux/auth/auth.actions'

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const ErrorPopUp = () => {
  const { isError, errMessage } = useSelector(selectAllErrors)
  const dispatch = useDispatch()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(removeError())
  }

  return (
    <Snackbar open={isError} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity='error'>
        {errMessage}
      </Alert>
    </Snackbar>
  )
}

export default ErrorPopUp
