import { Action } from '../action-types/userActions'
import { UserObject } from '../action-types/userActions'
import { UserTypes } from '../action-types/userTypes'

interface userState {
    isLoading: Boolean
    data: UserObject | {}
}

const userInitialState = {
    isLoading: false,
    data: {}
}

const userReducer = (state: userState = userInitialState, action: Action): userState => {
    switch (action.type) {
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
