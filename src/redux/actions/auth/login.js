import axios from 'axios'
import { push } from 'connected-react-router'
import ReactGA from 'react-ga'

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../types'
import { decodeToken } from '../../../utils/jsonwebtoken'
import { sleep } from '../../../utils/timer'

const login = (body = {}) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_START })
    await sleep()

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        body
      )

      const accessToken = response.data.data.accessToken
      const decodedAccessToken = decodeToken(accessToken)
      const user = response.data.data.user

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          accessToken,
          decodedAccessToken,
          user
        }
      })

      ReactGA.set({ userId: user.id, username: user.username })
      ReactGA.event({ category: 'User', action: 'Login to account' })
      dispatch(push(user.username))
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error
      })
    }
  }
}

export default login
