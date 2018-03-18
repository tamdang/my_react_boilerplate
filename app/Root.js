import React from 'react'
import Controller from './components/Controller'
import Displayer from './components/Displayer'

const Root = () => (
  <div>
    <Controller/>
    <Displayer value={0}/>
  </div>
)
export default Root