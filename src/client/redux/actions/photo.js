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

export function createPhotoInit(data, history) {
  return { type: CREATE_PHOTO_INIT, data, history }
}

export function createPhotoSuccess(photo) {
  return {
    type: CREATE_PHOTO_SUCCESS,
    photo,
  }
}

export function createPhotoFailure(message) {
  return {
    type: CREATE_PHOTO_FAILURE,
    message,
  }
}

export function fetchPhotoInit() {
  return { type: FETCH_PHOTO_INIT }
}

export function fetchPhotoSuccess(items) {
  return {
    type: FETCH_PHOTO_SUCCESS,
    items,
  }
}

export function fetchPhotoFailure(message) {
  return {
    type: FETCH_PHOTO_FAILURE,
    message,
  }
}

export function fetchPhotoByIdInit(photoId) {
  return { type: FETCH_PHOTO_BY_ID_INIT, photoId }
}

export function fetchPhotoByIdSuccess(item) {
  return {
    type: FETCH_PHOTO_BY_ID_SUCCESS,
    item,
  }
}

export function fetchPhotoByIdFailure(message) {
  return {
    type: FETCH_PHOTO_BY_ID_FAILURE,
    message,
  }
}

export function deletePhotoByIdInit(data) {
  return { type: DELETE_PHOTO_BY_ID_INIT, data }
}

export function deletePhotoByIdSuccess(item) {
  return {
    type: DELETE_PHOTO_BY_ID_SUCCESS,
    item,
  }
}

export function deletePhotoByIdFailure(message) {
  return {
    type: DELETE_PHOTO_BY_ID_FAILURE,
    message,
  }
}