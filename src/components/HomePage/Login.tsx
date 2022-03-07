import { useSelector, useDispatch } from "react-redux"
import { TextField } from "@mui/material"
import { useFormik } from "formik"
import { Button } from "@mui/material"

import { State } from "../../state/reducers/combineReducer"
import { startUserLogin } from "../../state/actions/userActions"
import { TabValue } from "../Reuseable/TabComp"
import { startSupplierLogin } from "../../state/actions/supplierActions"

const Login = (props: TabValue) => {
    const { tabName } = props
    console.log(tabName)
    const dispatch = useDispatch()

    const state = useSelector((state: State) => {
        return state.users
    })

    console.log('State',state)

    const { values, handleChange, handleSubmit  } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log('Login Data',values)
            if( tabName === 'Customer' ){
                dispatch(startUserLogin(values))
            }else{
                console.log('Supplier Login',values)
                dispatch(startSupplierLogin)
            }
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                label="Email-ID" 
                name="email" 
                value={values.email} 
                onChange={handleChange} 
                required={true} 
            />
            <TextField 
                label="Password" 
                name="password" 
                value={values.password} 
                onChange={handleChange} 
                required={true} 
            />
            <Button variant="contained" type="submit" >Submit</Button>
        </form>
    )
}

export default Login