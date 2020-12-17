import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reducer'
import rootSaga from './rootSaga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

export const history = createBrowserHistory()

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducerWithHistory = rootReducer(history)

const persistedReducer = persistReducer(persistConfig, rootReducerWithHistory)
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, routerMiddleware(history)]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export function configureStore(preloadedState) {
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
  sagaMiddleware.run(rootSaga)
  const persistor = persistStore(store)

  return { store, persistor }
}
