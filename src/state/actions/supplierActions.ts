import axios from 'axios'
import { Dispatch } from 'redux'
import { RegisterData, SupplierLogin } from '../models/supplier.interface'
import { LoginData } from '../models/user.interface'
import { SupplierTypes } from '../action-types/actionsTypes'
import { apiError } from './userActions'

const startSupplierLogin = (data: LoginData) => {
    return (dispatch: Dispatch) => {
        axios
            .post('/api/suppliers/login', data)
            .then((response) => {
                dispatch(supplierLogin(response.data))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

const supplierLogin = (data: SupplierLogin) => {
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

export { startSupplierLogin, startSupplierRegister }
