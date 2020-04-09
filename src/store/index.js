import { createStore, applyMiddleware, combineReducers } from 'redux'
import { countReducer } from './counter.redux'
import { userReducer } from './user.redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


const store = createStore(combineReducers({counter: countReducer, user: userReducer}), applyMiddleware(logger, thunk))

export default store
