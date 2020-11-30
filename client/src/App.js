import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'
import Cart from './pages/Cart'
import Main from './pages/Main'
import Logs from './pages/Logs'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={Main} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/logs' component={Logs} />
      </div>
    </BrowserRouter>
  )
}

export default App
