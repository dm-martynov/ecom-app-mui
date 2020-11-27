import { all, call } from 'redux-saga/effects'

function* rootSaga() {
  yield all([call()])
}

export default rootSaga
