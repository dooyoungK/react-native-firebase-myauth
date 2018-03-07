import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import authReducer from './auth/reducer'

const reducers = {
    auth: authReducer
}

const reducer = combineReducers(reducers)
const enhancer = compose(applyMiddleware(thunk))

export default createStore(reducer, enhancer)
