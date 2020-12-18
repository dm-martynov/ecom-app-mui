import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import './App.css'
import Main from './pages/Main'
import Logs from './pages/Logs'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './redux/store'
import { useSelector } from 'react-redux'
import CheckoutPage from './pages/CheckoutPage'
import ErrorPopUp from './components/Error/ErrorPopUp'

const App = () => {
  const currentUser = useSelector((state) => state.auth.currentUser)

  return (
    <ConnectedRouter history={history}>
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={() =>
              !currentUser ? <Redirect to='/sign-in' /> : <Main />
            }
          />
          <Route
            exact
            path='/checkout'
            render={() =>
              !currentUser ? <Redirect to='/sign-in' /> : <CheckoutPage />
            }
          />

          <Route exact path='/logs' component={Logs} />
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/sign-up' component={SignUp} />
        </Switch>
        <ErrorPopUp />
      </div>
    </ConnectedRouter>
  )
}

export default App
