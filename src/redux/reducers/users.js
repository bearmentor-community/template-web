import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  RESET_USERS
} from '../actions/types'

const initialState = {
  isLoading: false,
  error: null,
  data: null
}

const items = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload
      }
    case GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case RESET_USERS:
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default items
