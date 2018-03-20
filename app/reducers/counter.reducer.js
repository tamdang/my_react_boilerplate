import {createReducer} from './utils'
import {
  INCREASE, 
  DECREASE, 
  UPDATE_OFFSET,
} from '../actionTypes/counter.types'

const initState = {value: 0, offset: 1}

// Case reducer
function increase(state, action) {
  return {...state, value: state.value + state.offset}
}

// Case reducer
function decrease(state, action) {
  return {...state, value: state.value - state.offset}
}

function updateOffset(state, action){
  const {offset} = action.payload
  return {...state, offset: parseInt(offset)}
}

// Slice reducer
const counterReducer = createReducer(initState, {
  INCREASE : increase,
  DECREASE : decrease,
  UPDATE_OFFSET: updateOffset
})

export default counterReducer