import React from 'react'
import Controller from './components/Controller'
import Displayer from './components/Displayer'
import store from './configStore'
import {Provider} from 'react-redux'
import { hot } from 'react-hot-loader'

const Root = () => (
  <Provider store={store}>
    <div>    
      <Controller/>
      <Displayer value={0}/>
    </div>
  </Provider>
)
export default hot(module)(Root)