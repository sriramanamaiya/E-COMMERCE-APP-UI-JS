import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { supplierLogin } from "../../state/actions/supplierActions"

import { Login } from "../../state/actions/userActions"
import { RegisteredUserData } from "../../state/models/user.interface"
import { TypeOfState } from "../../state/reducers/combineReducer"
import Logo from "./Logo"

const NavBar = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const state = useSelector((state: TypeOfState) => {
        return [ state.supplier, state.users ]
    })

    const [ supplier, users ] = state

    console.log((users.data as RegisteredUserData).isAdmin)

    const handleClick = (e: React.MouseEvent) => {
        const admin = JSON.parse(localStorage.getItem('admin')!)
        localStorage.removeItem('token')
        localStorage.removeItem('admin')
        history.push('/')
        if(admin){
            dispatch(supplierLogin({}))
        }else{
            dispatch(Login({}))
        }
    }

    return (
        <>
            <Logo />
            <nav>
                { Object.keys(supplier.data).length > 0 || Object.keys(users.data).length > 0 ? (
                    <>
                        <Link to="/products"> Products </Link>
                        <Link to={ (users.data as RegisteredUserData).isAdmin ? (
                            "/admin/account"
                        ) : ( 
                            "/cust/account"
                        )}>Account</Link>
                        { (users.data as RegisteredUserData).isAdmin !== undefined &&  (
                            <>
                                <Link to="/cust/order">Orders</Link>
                                <Link to="/cust/cart">Cart</Link>
                            </>
                        ) }
                        <Link to="#" onClick={handleClick}>Logout</Link>
                    </>
                ) : (
                    <>
                        <Link to="/products"> Products </Link>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                ) }
            </nav>
        </>
    )
}

export default NavBar