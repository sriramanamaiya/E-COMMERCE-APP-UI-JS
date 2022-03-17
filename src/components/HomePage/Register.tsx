import { useFormik } from "formik"
import { Button } from "@mui/material"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"

import InputField from "../Reuseable/InputField"
import { startUserRegister } from "../../state/actions/userActions"
import { TypeOfState } from "../../state/reducers/combineReducer"

const Register = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const error = useSelector((state: TypeOfState) => {
        return state.users.errors
    })

    const validationSchema  = yup.object({
        name: yup.string().required('Name Cannot be Blank'),
        email : yup.string().email('Invalid Email-ID').required('Email-ID Cannot Be Blank'),
        password: yup.string().min(8, 'Password is too Short').max(128).required('Password Cannot be Blank'),
        // phoneNumber: yup.string().min(10,'Enter 10 digits Number').max(10).required('Phone Number is Required')
    })

    const redirect = () => {
        history.push('/login')
    }

    const { values, handleChange, handleSubmit, errors, setErrors, touched, handleBlur } = useFormik({
        initialValues : {
            name: '',
            email: '',
            password: '',
            phoneNumber: ''
        },
        validationSchema,
        validateOnChange: false,
        onSubmit: (values) => {
            console.log(values)
            dispatch(startUserRegister(values, redirect))
        }
    })

    useEffect(() => {
        setErrors(error)
    },[error, setErrors])

    console.log('Errors', errors)

    return (
        <form onSubmit={handleSubmit}>
            <InputField 
                inputType="text" 
                inputName="name" 
                inputlabel="Name" 
                inputValue={values.name} 
                inputHandleChange={handleChange} 
                inputHandleBlur={handleBlur}
                inputRequired={true} 
                inputError={errors.name && touched.name ? true : false}
                inputHelperText={errors.name && touched.name ? errors.name : ''}
            />

            <InputField 
                inputType="text" 
                inputName="email" 
                inputlabel="Email-ID" 
                inputValue={values.email} 
                inputHandleChange={handleChange} 
                inputHandleBlur={handleBlur}
                inputRequired={true} 
                inputError={errors.email && touched.email ? true : false}
                inputHelperText={errors.email && touched.email ? errors.email : ''}
            />

            <InputField 
                inputType="password" 
                inputName="password" 
                inputlabel="Password" 
                inputValue={values.password} 
                inputHandleChange={handleChange} 
                inputHandleBlur={handleBlur}
                inputRequired={true} 
                inputError={errors.password && touched.password ? true : false}
                inputHelperText={errors.password && touched.password ? errors.password : ''}
            />

            <InputField 
                inputType="number" 
                inputName="phoneNumber" 
                inputlabel="Phone Number" 
                inputValue={values.phoneNumber} 
                inputHandleChange={handleChange} 
                inputHandleBlur={handleBlur}
                inputRequired={true} 
                inputError={errors.phoneNumber && touched.phoneNumber ? true : false}
                inputHelperText={errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : ''}
            />
            <Button variant="contained" type="submit" >Submit</Button>
        </form>
    )
}

export default Register