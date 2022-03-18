import React from "react"
import { useHistory } from "react-router-dom"

const Logo = () => {
    const history = useHistory()

    const handleClick = (e: React.MouseEvent) => {
        history.push('/')
    }

    return (
        <h1 onClick={handleClick} >E-Commerce App 🛍️</h1>
    )
}

export default Logo