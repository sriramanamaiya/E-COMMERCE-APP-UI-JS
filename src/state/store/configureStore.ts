import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import combineReducer from '../reducers/combineReducer'

const configureStore = () => {
    const store = createStore(combineReducer, applyMiddleware(thunk))
    return store
}

export default configureStore
