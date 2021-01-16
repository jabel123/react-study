import React, {Component} from 'react'
import CountButton from './module/CountButton'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import MyReducer from './module/MyReducer'
import CountContainer from './module/CountContainer'


class App extends Component
{
  render() {
    return (
      <Provider store={createStore(combineReducers({MyReducer}))}>
        <CountContainer/>
        <CountButton/>
      </Provider>    
    );
  }  
}

export default App;
