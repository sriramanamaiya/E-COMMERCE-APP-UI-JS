import React from "react"
import { RouteComponentProps } from "react-router-dom"
import TabComp from "../Reuseable/TabComp"
import Login from "./Login"
import Register from "./Register"

const TabPage : React.FC<RouteComponentProps> = (props) => {
    const { path } = props.match

    enum TabTypeValue {
        LOGIN = "/login",
        REGISTER = "/register"
    }

    return (
        <>
            { path ===  TabTypeValue.LOGIN ? (
                <TabComp 
                    initialValue="Customer" 
                    tabPanelValueOne="Customer" 
                    tabPanelValueTwo="Supplier" 
                    ComponentOne={Login} 
                    ComponentTwo={Login} 
                />
            ): (
                <TabComp 
                    initialValue="Customer Register" 
                    tabPanelValueOne="Customer Register" 
                    tabPanelValueTwo="Supplier Register" 
                    ComponentOne={Register} 
                    ComponentTwo={Register} 
                />
            ) }
        </>
    )
}

export default TabPage