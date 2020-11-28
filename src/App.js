import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'
import Basket from './pages/Basket'
import Main from './pages/Main'
import Logs from './pages/Logs'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={Main} />
        <Route exact path='/basket' component={Basket} />
        <Route exact path='/logs' component={Logs} />
      </div>
    </BrowserRouter>
  )
}

export default App
