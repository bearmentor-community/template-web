import {
  GET_ITEMS_START,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
  RESET_ITEMS
} from '../actions/types'

const initialState = {
  isLoading: false,
  error: null,
  data: null
}

const items = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_START:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload
      }
    case GET_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case RESET_ITEMS:
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default items
