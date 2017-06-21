import { combineReducers } from 'redux'

import weatherReducer from './weatherReducer'
import earthquakeReducer from './earthquakeReducer'

export default combineReducers({
  weather: weatherReducer,
  earthquake: earthquakeReducer
})