import { useSelector, useDispatch } from "react-redux"
import { useFormik } from "formik"
import { Button } from "@mui/material"

import { State } from "../../state/reducers/combineReducer"
import { startUserLogin } from "../../state/actions/userActions"
import { TabValue } from "../Reuseable/TabComp"
import { startSupplierLogin } from "../../state/actions/supplierActions"
import InputField from "../Reuseable/InputField"

const Login = (props: TabValue) => {
    const { tabName } = props
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
                dispatch(startSupplierLogin(values))
            }
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            <InputField 
                inputType="text" 
                inputlabel="Email-ID"
                inputName="email" 
                inputValue={values.email} 
                inputHandleChange={handleChange} 
                inputRequired={true}
            />

            <InputField 
                inputType="password" 
                inputlabel="Password"
                inputName="password"
                inputValue={values.password} 
                inputHandleChange={handleChange} 
                inputRequired={true}
            />
            <Button variant="contained" type="submit" >Submit</Button>
        </form>
    )
}

export default Login