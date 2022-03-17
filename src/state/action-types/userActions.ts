import { UserTypes } from './actionsTypes'
import { UserLogin, RegisteredUserData } from '../models/user.interface'

interface RegisterType {
    type: UserTypes.REGISTER
    payload: RegisteredUserData
}

interface LoginType {
    type: UserTypes.LOGIN
    payload: UserLogin
}

interface Error {
    [prop: string]: { message: string }
}

interface ErrorType {
    type: UserTypes.ERROR
    payload: Error
}

export type Action = LoginType | RegisterType | ErrorType
