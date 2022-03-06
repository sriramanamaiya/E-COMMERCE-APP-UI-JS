import { UserTypes } from './userTypes'

export interface UserObject {
    id: string
    name: string
    email: string
    password: string
    phoneNumber: string
    isAdmin: Boolean
}

export interface UserLogin {
    token: string
}

export interface LoginData {
    email: string
    password: string
}

interface RegisterType {
    type: UserTypes.REGISTER
    payload: UserObject
}

interface LoginType {
    type: UserTypes.LOGIN
    payload: UserLogin
}

export type Action = LoginType | RegisterType
