import {
  GET_USER_LIST_INIT,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILURE,
} from '../constants/user'

export function getUserListInit() {
  return { type: GET_USER_LIST_INIT }
}

export function getUserListSuccess(data) {
  return {
    type: GET_USER_LIST_SUCCESS,
    data,
  }
}

export function getUserListFailure(message) {
  return {
    type: GET_USER_LIST_FAILURE,
    message,
  }
}