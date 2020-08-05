import axios from 'axios'

import {
  RESET_ITEMS,
  GET_ITEMS_START,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE
} from './types'

import { sleep } from '../../utils/timer'

export const resetItems = () => (dispatch) => dispatch({ type: RESET_ITEMS })

export const getItems = (body) => {
  return async (dispatch) => {
    dispatch({ type: GET_ITEMS_START })
    await sleep()

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/items`)
      dispatch({
        type: GET_ITEMS_SUCCESS,
        payload: response.data.data.items
      })
    } catch (error) {
      dispatch({
        type: GET_ITEMS_FAILURE,
        payload: error
      })
    }
  }
}
