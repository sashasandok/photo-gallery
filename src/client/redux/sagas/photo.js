import { put, takeLatest, call } from 'redux-saga/effects'
import api from '../../api/photo'
import { 
  CREATE_PHOTO_INIT,
  FETCH_PHOTO_INIT,
  FETCH_PHOTO_BY_ID_INIT,
  DELETE_PHOTO_BY_ID_INIT,
} from '../constants/photo'
import { 
  createPhotoSuccess, 
  createPhotoFailure,
  fetchPhotoSuccess,
  fetchPhotoFailure,
  fetchPhotoByIdSuccess,
  fetchPhotoByIdFailure,
  deletePhotoByIdSuccess,
  deletePhotoByIdFailure,
} from '../actions/photo'

function* createPhoto(data) {
  try {
    const response = yield api.uploadPhoto(data?.data);
    console.log(response)
    if(response?.data?.success) yield call(data?.history?.push, '/gallery');
    yield put(createPhotoSuccess(response?.data?.item))
  } catch (error) {
    yield put(createPhotoFailure(error?.response?.data?.message))
  }
}

function* fetchPhotoList() {
  try {
    const response = yield api.fetchPhotoList();
    yield put(fetchPhotoSuccess(response?.data?.item))
  } catch (error) {
    yield put(fetchPhotoFailure(error?.response?.data?.message))
  }
}


function* fetchPhotoById(data) {
  try {
    const response = yield api.fetchPhotoById(data?.photoId);
    yield put(fetchPhotoByIdSuccess(response?.data?.item))
  } catch (error) {
    yield put(fetchPhotoByIdFailure(error?.response?.data?.message))
  }
}

function* deletePhotoById(data) {
  try {
    const response = yield api.deletePhotoById({ photoId: data?.data?.photoId, fileName: data?.data?.fileName });
    yield put(deletePhotoByIdSuccess(response?.data?.item))
    yield call(data?.data?.history?.push, '/gallery');
  } catch (error) {
    yield put(deletePhotoByIdFailure(error?.response?.data?.message))
  }
}

export default function* getUserListAsync() {
  yield takeLatest(CREATE_PHOTO_INIT, createPhoto),
  yield takeLatest(FETCH_PHOTO_INIT, fetchPhotoList)
  yield takeLatest(FETCH_PHOTO_BY_ID_INIT, fetchPhotoById)
  yield takeLatest(DELETE_PHOTO_BY_ID_INIT, deletePhotoById)
}