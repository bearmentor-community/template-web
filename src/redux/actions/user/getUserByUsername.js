import axios from 'axios'

import {
  GET_USER_BY_USERNAME_START,
  GET_USER_BY_USERNAME_SUCCESS,
  GET_USER_BY_USERNAME_FAILURE
} from '../types'

import { sleep } from '../../../utils/timer'

const getUserByUsername = (username) => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_BY_USERNAME_START })
    await sleep()

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users/${username}`
      )
      dispatch({
        type: GET_USER_BY_USERNAME_SUCCESS,
        payload: response.data.data.user
      })
    } catch (error) {
      dispatch({
        type: GET_USER_BY_USERNAME_FAILURE,
        payload: error
      })
    }
  }
}

export default getUserByUsername
