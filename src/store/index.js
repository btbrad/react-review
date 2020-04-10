import { createStore, applyMiddleware, combineReducers } from 'redux'
import { countReducer } from './counter.redux'
import { userReducer } from './user.redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers({counter: countReducer, user: userReducer}), 
  applyMiddleware(logger, thunk, sagaMiddleware)
)

sagaMiddleware.run(mySaga)

export default store
