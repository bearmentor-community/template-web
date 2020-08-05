import axios from 'axios'

import {
  UPDATE_USER_SETTINGS_START,
  UPDATE_USER_SETTINGS_SUCCESS,
  UPDATE_USER_SETTINGS_FAILURE
} from '../types'

import { sleep } from '../../../utils/timer'

const updateUserSettings = (data = {}) => {
  return async (dispatch, getState) => {
    dispatch({
      type: UPDATE_USER_SETTINGS_START
    })
    const state = getState()
    const id = state.auth.data.user.id
    const token = state.auth.data.accessToken
    await sleep()

    const body = new FormData()
    body.append('avatar', data.avatar[0]) // File
    body.append('name', data.name) // string
    body.append('username', data.username) // string
    body.append('bio', data.bio) // string
    // for (const pair of body.entries()) console.log(`${pair[0]}: ${pair[1]}`)

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/users/${id}/settings`,
        body, // using FormData, not just plain body
        {
          validateStatus: false,
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
            // Remember to use multipart when requesting with a File
          }
        }
      )

      dispatch({
        type: UPDATE_USER_SETTINGS_SUCCESS,
        payload: response.data.data.user
      })
    } catch (error) {
      dispatch({
        type: UPDATE_USER_SETTINGS_FAILURE,
        payload: error
      })
    }
  }
}

export default updateUserSettings
