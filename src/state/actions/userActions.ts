import axios from 'axios'
import { Dispatch } from 'redux'
import { UserTypes } from '../action-types/actionsTypes'
import { LoginData, UserLogin, UserRegisterData } from '../models/user.interface'

const startUserRegister = (data: UserRegisterData, redirect: () => void) => {
    return (dispatch: Dispatch) => {
        axios
            .post('/api/users', data)
            .then((response) => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    dispatch(apiError(result.errors))
                } else {
                    redirect()
                }
            })
            .catch((error: Error) => {
                console.log(error)
            })
    }
}

const startUserLogin = (data: LoginData) => {
    return (dispatch: Dispatch) => {
        axios
            .post('/api/users/login', data)
            .then((response) => {
                const result: UserLogin = response.data
                console.log(result)
                dispatch(Login(response.data))
            })
            .catch((error: Error) => {
                console.log(error)
            })
    }
}

const Login = (data: UserLogin) => {
    return {
        type: UserTypes.LOGIN,
        payload: data
    }
}

const apiError = (data: any) => {
    return {
        type: UserTypes.ERROR,
        payload: data
    }
}

export { Login, startUserLogin, startUserRegister, apiError }
