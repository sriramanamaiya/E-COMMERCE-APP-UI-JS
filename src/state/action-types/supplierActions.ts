import { RegisterData, SupplierLogin } from '../models/supplier.interface'
import { SupplierTypes } from './actionsTypes'

interface RegisterType {
    type: SupplierTypes.REGISTER
    payload: RegisterData
}

interface LoginType {
    type: SupplierTypes.LOGIN
    payload: SupplierLogin
}

interface Error {
    [prop: string]: { message: string }
}

interface ErrorType {
    type: SupplierTypes.ERROR
    payload: Error
}

export type Action = LoginType | RegisterType | ErrorType
