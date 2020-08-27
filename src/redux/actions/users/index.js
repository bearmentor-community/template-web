import axios from 'axios'

import {
  RESET_USERS,
  GET_USERS_STARTED,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from '../types'

export const resetUsers = () => (dispatch) => dispatch({ type: RESET_USERS })

export const getUsers = (body) => {
  return async (dispatch) => {
    dispatch({ type: GET_USERS_STARTED })

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`)
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: response.data.data.users
      })
    } catch (error) {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: error
      })
    }
  }
}
