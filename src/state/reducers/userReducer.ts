import { Action } from '../action-types/userActions'
import { userState } from '../models/user.interface'
import { UserTypes } from '../action-types/actionsTypes'

const userInitialState = {
    isLoading: false,
    data: {},
    errors: {}
}

const userReducer = (state: userState = userInitialState, action: Action): userState => {
    switch (action.type) {
        case UserTypes.ERROR: {
            if (action.payload.hasOwnProperty('errors')) {
                return { ...state, errors: { ...action.payload } }
            } else {
                let result: any
                for (const key in action.payload) {
                    result = { ...result, [key]: action.payload[key].message }
                }
                return { ...state, errors: result }
            }
        }
        case UserTypes.LOGIN: {
            console.log('Reducer', action.payload)
            return { ...state, data: { ...action.payload } }
        }
        default: {
            return { ...state }
        }
    }
}

export default userReducer
