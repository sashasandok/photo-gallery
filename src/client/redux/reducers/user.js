import {
  GET_USER_LIST_INIT,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILURE,
} from '../constants/user'

const initialState = {
  items: [],
  item: null,
  loading: true,
  showError: false,
  errorMessage: '',
}

function userListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_LIST_INIT:
      return {
        ...state,
        loading: true,
        showError: false,
        errorMessage: '',
      }
    case GET_USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        showError: false,
        errorMessage: '',
        items: action.data,
      }
    case GET_USER_LIST_FAILURE:
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

export default userListReducer