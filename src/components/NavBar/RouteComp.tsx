import React from "react"
import { Route, Switch } from "react-router-dom"

import NavBar from "./NavBar"
import Home from "../HomePage/Home"
import TabPage from "../HomePage/TabPage"

const RouteComp : React.FC = () => {

    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={TabPage} />
                <Route path="/register" component={TabPage} />
            </Switch>
        </>
    )
}

export default RouteComp