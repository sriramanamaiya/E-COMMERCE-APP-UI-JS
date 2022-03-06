import React from "react"
import { Route, Switch } from "react-router-dom"

import Home from "../HomePage/Home"
import Register from "../HomePage/Register"
import TabPage from "../Reuseable/Tab"

import NavBar from "./NavBar"

const RouteComp : React.FC = () => {

    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={TabPage} />
                <Route path="/register" component={Register} />
            </Switch>
        </>
    )
}

export default RouteComp