import axios from 'axios'

import {
  GET_AUTHENTICATED_USER_STARTED,
  GET_AUTHENTICATED_USER_SUCCESS,
  GET_AUTHENTICATED_USER_FAILURE
} from '../types'

export default (body = {}) => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_AUTHENTICATED_USER_STARTED })
    const state = getState()
    const username = state.auth.data.decodedAccessToken.username

    try {
      // Get public user's profile
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users/${username}`
      )

      dispatch({
        type: GET_AUTHENTICATED_USER_SUCCESS,
        payload: response.data.data.user
      })
    } catch (error) {
      dispatch({
        type: GET_AUTHENTICATED_USER_FAILURE,
        payload: error
      })
    }
  }
}
