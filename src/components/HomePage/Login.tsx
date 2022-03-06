import { useSelector, useDispatch } from "react-redux"
import { TextField } from "@mui/material"
import { useFormik } from "formik"
import { Button } from "@mui/material"

import { State } from "../../state/reducers/combineReducer"
import { startUserLogin } from "../../state/actions/userActions"

const Login = () => {
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
            dispatch(startUserLogin(values))
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