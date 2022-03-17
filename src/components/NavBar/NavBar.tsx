import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <>
            <h1>E-Commerce App</h1>
            <nav>
                <Link to="#"> Products </Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </nav>
        </>
    )
}

export default NavBar