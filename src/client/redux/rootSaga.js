import { fork, all } from 'redux-saga/effects'
import userSaga from './sagas/user'
import photosaga from './sagas/photo'

export function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(photosaga),
  ])
}