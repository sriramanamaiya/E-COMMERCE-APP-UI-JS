import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import combineReducer from '../reducers/combineReducer'

const configureStore = () => {
    const store = createStore(combineReducer, applyMiddleware(thunk, logger))
    return store
}

export default configureStore
