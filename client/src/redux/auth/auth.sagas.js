import { takeLatest, put, all, call } from 'redux-saga/effects'

import AuthActionTypes from './auth.types'
import { signUpRequest } from '../../api/api'
import { authFailure } from './auth.actions'

// export function* getSnapshotFromUserAuth(userAuth) {
//   try {
//     const userRef = yield call(createUserProfileDocument, userAuth);
//     const userSnapshot = yield userRef.get();
//     yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
//   } catch (error) {
//     yield put(signInFailure(error));
//   }
// }

// export function* signIn({ payload: { email, password } }) {
//   try {
//     const { user } = yield auth.signInWithEmailAndPassword(email, password)
//     yield getSnapshotFromUserAuth(user)
//   } catch (error) {
//     yield put(signInFailure(error))
//   }
// }

// export function* isUserAuthenticated() {
//   try {
//     const userAuth = yield getCurrentUser()
//     if (!userAuth) return
//     yield getSnapshotFromUserAuth(userAuth)
//   } catch (error) {
//     yield put(signInFailure(error))
//   }
// }

// export function* signOut() {
//   try {
//     yield auth.signOut()
//     yield put(signOutSuccess())
//   } catch (error) {
//     yield put(signOutFailure(error))
//   }
// }

export function* signUp({ payload: { name, email, password } }) {
  try {
    yield signUpRequest(name, email, password)
    // yield put(signInStart({ email, password }))
  } catch (error) {
    yield put(authFailure(error))
  }
}

// export function* onSignInStart() {
//   yield takeLatest(AuthActionTypes.SIGN_IN_START, signIn)
// }

// export function* onCheckUserSession() {
//   yield takeLatest(AuthActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
// }

// export function* onSignOutStart() {
//   yield takeLatest(AuthActionTypes.SIGN_OUT_START, signOut)
// }

export function* onSignUpStart() {
  yield takeLatest(AuthActionTypes.SIGN_UP_START, signUp)
}

export function* authSagas() {
  yield all([
    // call(onSignInStart),
    // call(onCheckUserSession),
    // call(onSignOutStart),
    call(onSignUpStart),
  ])
}
