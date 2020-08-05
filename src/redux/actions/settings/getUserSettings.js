import axios from 'axios'

import {
  GET_USER_SETTINGS_START,
  GET_USER_SETTINGS_SUCCESS,
  GET_USER_SETTINGS_FAILURE
} from '../types'

import { sleep } from '../../../utils/timer'

const getUserSettings = (body) => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_USER_SETTINGS_START })
    const state = getState()
    const id = state.auth.data.user.id
    const token = state.auth.data.accessToken
    await sleep()

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users/${id}/settings`,
        {
          validateStatus: false,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      dispatch({
        type: GET_USER_SETTINGS_SUCCESS,
        payload: response.data.data.user
      })
    } catch (error) {
      dispatch({
        type: GET_USER_SETTINGS_FAILURE,
        payload: error
      })
    }
  }
}

export default getUserSettings
