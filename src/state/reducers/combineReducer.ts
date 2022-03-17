import { combineReducers } from 'redux'
import supplierReducer from './supplierReducer'
import userReducer from './userReducer'

const combineReducer = combineReducers({
    users: userReducer,
    supplier: supplierReducer
})

export default combineReducer

export type TypeOfState = ReturnType<typeof combineReducer>
