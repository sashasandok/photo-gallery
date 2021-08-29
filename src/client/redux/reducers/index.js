import { combineReducers } from 'redux'
import userReducer from './user'
import photoReducer from './photo'

export default combineReducers({
  user: userReducer,
  photo: photoReducer,
})