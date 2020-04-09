import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const countReducer = (count=0, action) => {
  switch(action.type) {
    case 'increment': 
      console.log('increment')
      return count + 1
    case 'decrement':
      return count - 1
    default:
      return count
  }
}


const store = createStore(countReducer, applyMiddleware(logger, thunk))

export default store
