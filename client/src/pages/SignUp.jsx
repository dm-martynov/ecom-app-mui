import React from 'react'
import {
  Typography,
  Box,
  Grid,
  Link,
  CssBaseline,
  Button,
  CircularProgress,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Link as RouterLink } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { useDispatch, useSelector } from 'react-redux'
import { signUpStart } from '../redux/auth/auth.actions'

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

const SignUp = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.auth.loading)
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
      }}
      validate={(values) => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Required'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }
        if (
          // eslint-disable-next-line
          !/.{6,}/.test(values.password)
        ) {
          errors.password = 'Password should contain at least 6 characters '
        }
        if (!values.name) {
          errors.name = 'Required'
        }
        if (!values.repeatPassword) {
          errors.repeatPassword = 'Repeat password'
        }
        if (values.password !== values.repeatPassword) {
          errors.repeatPassword = "Passwords don't match"
        }
        return errors
      }}
      onSubmit={(values) => {
        dispatch(signUpStart(values))
      }}
    >
      {({ submitForm, isSubmitting, touched, errors }) => (
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component='h1' variant='h5'>
              Sign up
            </Typography>
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    label='Name'
                    name='name'
                    variant='outlined'
                    required
                    fullWidth
                  />
                </Grid>

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
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    label='Repeat Password'
                    name='repeatPassword'
                    variant='outlined'
                    type='password'
                    id='repeatPassword'
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
                  Sign Up
                </Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>

              <Grid container justify='flex-end'>
                <Grid item>
                  <Link component={RouterLink} to='/sign-in' variant='body2'>
                    Already have an account? Sign in
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
export default SignUp
