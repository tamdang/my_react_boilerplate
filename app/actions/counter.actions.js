import {
  INCREASE, 
  DECREASE,
  UPDATE_OFFSET
} from '../actionTypes/counter.types'

export function increaseAsyn(){
  return dispatch => {
    // We can do whatever we want 
    dispatch({
      type: INCREASE
    })
    // We can do whatever we want 
  }
}

export function decreaseAsyn(){
  return dispatch => {
    // We can do whatever we want 
    dispatch({
      type: DECREASE
    })
    // We can do whatever we want 
  }
}

export function updateOffsetAsyn(offset){
  return dispatch => {
    // We can do whatever we want 
    dispatch({
      type: UPDATE_OFFSET,
      payload: {offset}
    })
    // We can do whatever we want 
  }
}