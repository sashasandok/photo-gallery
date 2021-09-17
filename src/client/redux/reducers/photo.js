import {
  CREATE_PHOTO_INIT,
  CREATE_PHOTO_SUCCESS,
  CREATE_PHOTO_FAILURE,

  FETCH_PHOTO_INIT,
  FETCH_PHOTO_SUCCESS,
  FETCH_PHOTO_FAILURE,

  FETCH_PHOTO_BY_ID_INIT,
  FETCH_PHOTO_BY_ID_SUCCESS,
  FETCH_PHOTO_BY_ID_FAILURE,

  DELETE_PHOTO_BY_ID_INIT,
  DELETE_PHOTO_BY_ID_SUCCESS,
  DELETE_PHOTO_BY_ID_FAILURE,
} from '../constants/photo'

const initialState = {
  items: [],
  item: null,
  loading: true,
  uploaded: false,
  showError: false,
  errorMessage: '',
}

function photoListReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PHOTO_INIT:
      return {
        ...state,
        loading: true,
        showError: false,
        errorMessage: '',
        uploaded: state.uploaded
      }
    case CREATE_PHOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        showError: false,
        errorMessage: '',
        items: action.data,
        uploaded: true,
      }
    case CREATE_PHOTO_FAILURE:
      return {
        ...state,
        loading: false,
        showError: true,
        errorMessage: action.message,
        items: state.items,
      }

    case FETCH_PHOTO_INIT:
      return {
        ...state,
        loading: true,
        showError: false,
        errorMessage: '',
        item: {},
        uploaded: false,
      }
    case FETCH_PHOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        showError: false,
        errorMessage: '',
        items: action.items,
      }
    case FETCH_PHOTO_FAILURE:
      return {
        ...state,
        loading: false,
        showError: true,
        errorMessage: action.message,
        items: state.items,
      }
    
    case FETCH_PHOTO_BY_ID_INIT:
      return {
        ...state,
        loading: true,
        showError: false,
        errorMessage: '',
      }
    case FETCH_PHOTO_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        showError: false,
        errorMessage: '',
        item: action.item,
      }
    case FETCH_PHOTO_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        showError: true,
        errorMessage: action.message,
        items: state.items,
      }

    case DELETE_PHOTO_BY_ID_INIT:
      return {
        ...state,
        loading: true,
        showError: false,
        errorMessage: '',
      }
    case DELETE_PHOTO_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        showError: false,
        errorMessage: '',
        item: action.item,
      }
    case DELETE_PHOTO_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        showError: true,
        errorMessage: action.message,
        items: state.items,
      }
    default:
      return state
  }
}

export default photoListReducer