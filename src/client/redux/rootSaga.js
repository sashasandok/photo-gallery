import { fork, all } from 'redux-saga/effects'
import userSaga from './sagas/user'

export function* rootSaga() {
  yield all([
    fork(userSaga),
  ])
}