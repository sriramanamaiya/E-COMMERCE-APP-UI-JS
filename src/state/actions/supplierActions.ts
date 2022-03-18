import axios from 'axios'
import { Dispatch } from 'redux'
import { RegisterData } from '../models/supplier.interface'
import { LoginData, UserLogin } from '../models/user.interface'
import { SupplierTypes } from '../action-types/actionsTypes'
import jwtDecode, { JwtPayload } from 'jwt-decode'

export type jwtCustomType = JwtPayload & { _id: string; isAdmin: Boolean }

const startSupplierLogin = (data: LoginData) => {
    return (dispatch: Dispatch) => {
        axios
            .post('/api/suppliers/login', data)
            .then((response) => {
                const result: UserLogin = response.data
                if (result.hasOwnProperty('errors')) {
                    dispatch(apiError(result))
                } else {
                    const tokenData = jwtDecode<jwtCustomType>(result.token)
                    localStorage.setItem('token', result.token)
                    localStorage.setItem('admin', String(tokenData.isAdmin))
                    dispatch(supplierLogin(tokenData))
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

const supplierLogin = (data: jwtCustomType | {}) => {
    return {
        type: SupplierTypes.LOGIN,
        payload: data
    }
}

const startSupplierRegister = (data: RegisterData, redirect: () => void) => {
    return (dispatch: Dispatch) => {
        axios
            .post('/api/suppliers', data)
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    dispatch(apiError(result.errors))
                } else {
                    redirect()
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

const apiError = (data: any) => {
    return {
        type: SupplierTypes.ERROR,
        payload: data
    }
}

export { supplierLogin, startSupplierLogin, startSupplierRegister }
