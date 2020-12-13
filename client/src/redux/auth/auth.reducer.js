import AuthActionTypes from './auth.types'

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  loading: false,
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN_SUCCESS:
    case AuthActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      }
    case AuthActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      }
    case AuthActionTypes.AUTH_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case AuthActionTypes.TOGGLE_AUTH_LOADING:
      return {
        ...state,
        loading: !state.loading,
      }

    default:
      return state
  }
}

export default authReducer
