import axios from 'axios'
import jwtDecode, { JwtPayload } from 'jwt-decode'
import { Dispatch } from 'redux'
import { UserTypes } from '../action-types/actionsTypes'
import { LoginData, UserLogin, UserRegisterData } from '../models/user.interface'

type jwtCustomType = JwtPayload & { _id: string; isAdmin: Boolean }

const startUserLogin = (data: LoginData) => {
    return (dispatch: Dispatch) => {
        axios
            .post('/api/users/login', data)
            .then((response) => {
                const result: UserLogin = response.data
                if (result.hasOwnProperty('errors')) {
                    dispatch(apiError(result))
                } else {
                    const tokenData = jwtDecode<jwtCustomType>(result.token)
                    localStorage.setItem('token', result.token)
                    localStorage.setItem('admin', JSON.stringify(tokenData.isAdmin))
                    dispatch(Login(tokenData))
                }
            })
            .catch((error: Error) => {
                console.log(error)
            })
    }
}

const Login = (data: jwtCustomType | {}) => {
    return {
        type: UserTypes.LOGIN,
        payload: data
    }
}

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

const apiError = (data: any) => {
    return {
        type: UserTypes.ERROR,
        payload: data
    }
}

export { Login, startUserLogin, startUserRegister, apiError }
