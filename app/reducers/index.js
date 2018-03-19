import counterReducer from './counter.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export default rootReducer