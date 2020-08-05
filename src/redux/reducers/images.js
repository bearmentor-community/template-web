import {
  UPLOAD_IMAGE_START,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE
} from '../actions/types'

const initialState = {
  isLoading: false,
  error: null
}

const images = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE_START:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      }
    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default images
