import axios from 'axios'
import { Dispatch } from 'redux'
import { LoginData } from '../action-types/userActions'

const startSupplierLogin = (data: LoginData) => {
    return (dispatch: Dispatch) => {
        axios
            .post('/api/suppliers/login', data)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export { startSupplierLogin }
