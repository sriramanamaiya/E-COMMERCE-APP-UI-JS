import { combineReducers } from 'redux'
import userReducer from './userReducer'

const combineReducer = combineReducers({
    users: userReducer
})

export default combineReducer

export type TypeOfState = ReturnType<typeof combineReducer>
