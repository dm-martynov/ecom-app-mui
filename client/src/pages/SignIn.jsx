import React, { useEffect } from 'react'

import {
  FormControlLabel,
  Typography,
  Box,
  Grid,
  Link,
  CssBaseline,
  Button,
  Container,
  Checkbox,
  CircularProgress,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart } from '../redux/auth/auth.actions'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    paddingTop: 12,
    paddingBottom: 12,
  },
  buttonProgress: {
    color: 'green[500]',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}))

export default function SignIn() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.auth.loading)

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values) => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Required'
        }
        if (!values.password) {
          errors.password = 'Required'
        }
        return errors
      }}
      onSubmit={(
        values,
        { setSubmitting, setErrors, resetForm, setValues }
      ) => {
        dispatch(signInStart(values))
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ submitForm, isSubmitting, touched, errors }) => (
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    type='email'
                    required
                    label='Email Address'
                    name='email'
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    label='Password'
                    name='password'
                    variant='outlined'
                    type='password'
                    id='password'
                    required
                    fullWidth
                  />
                </Grid>
              </Grid>

              <div style={{ position: 'relative' }}>
                <Button
                  fullWidth
                  variant='contained'
                  color='primary'
                  disabled={loading}
                  className={classes.submit}
                  onClick={submitForm}
                >
                  Sign In
                </Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>

              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link component={RouterLink} to='/sign-up' variant='body2'>
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </div>
          <Box mt={4}>
            <Typography variant='body2' color='textSecondary' align='center'>
              {`Copyright ©  Pet Project ${new Date().getFullYear()}`}
            </Typography>
          </Box>
        </Container>
      )}
    </Formik>
  )
}
