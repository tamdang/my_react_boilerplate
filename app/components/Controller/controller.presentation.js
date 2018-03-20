import React from 'react'
import './style.css'
const ControllerPresentation = (props) => (
  <div>
    <button onClick={props.increment}>Increment</button>
    <button onClick={props.decrement}>Decrement</button>
  </div>
)
export default ControllerPresentation