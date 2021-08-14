import { put, takeLatest } from 'redux-saga/effects'
import api from '../../api/user'
import { 
  GET_USER_LIST_INIT, 
} from '../constants/user'
import { 
  getUserListSuccess, 
  getUserListFailure, 
} from '../actions/user'

function* getUserListSaga() {
  try {
    const response = yield api.getUserList();
    yield put(getUserListSuccess(response.data.items))
  } catch (error) {
    yield put(getUserListFailure(error.response.data.message))
  }
}

export default function* getUserListAsync() {
  yield takeLatest(GET_USER_LIST_INIT, getUserListSaga)
}