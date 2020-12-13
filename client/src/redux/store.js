import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reducer'
import rootSaga from './rootSaga'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, routerMiddleware(history)]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
  sagaMiddleware.run(rootSaga)

  return store
}

// export const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(...middlewares))
// )
