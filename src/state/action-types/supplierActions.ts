import { RegisterData } from '../models/supplier.interface'
import { jwtCustomType } from '../actions/supplierActions'
import { SupplierTypes } from './actionsTypes'

interface RegisterType {
    type: SupplierTypes.REGISTER
    payload: RegisterData
}

interface LoginType {
    type: SupplierTypes.LOGIN
    payload: jwtCustomType
}

interface Error {
    [prop: string]: { message: string }
}

interface ErrorType {
    type: SupplierTypes.ERROR
    payload: Error
}

export type Action = LoginType | RegisterType | ErrorType
