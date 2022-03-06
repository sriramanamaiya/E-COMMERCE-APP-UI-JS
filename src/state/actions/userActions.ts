import axios from 'axios'
import { Dispatch } from 'redux'
import { LoginData, UserLogin } from '../action-types/userActions'
import { UserTypes } from '../action-types/userTypes'

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

export { Login, startUserLogin }
