// import axios from 'axios'
import ReactGA from 'react-ga'
import { push } from 'connected-react-router'

import { LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../types'

const logout = () => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT_START })

    try {
      dispatch({ type: LOGOUT_SUCCESS })
      ReactGA.set({ userId: null, username: null })
      ReactGA.event({ category: 'User', action: 'Logout from account' })
      dispatch(push('/'))
    } catch (error) {
      dispatch({ type: LOGOUT_FAILURE, payload: { error } })
      dispatch(push('/'))
    }
  }
}

export default logout
