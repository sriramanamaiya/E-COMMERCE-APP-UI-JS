import React from "react"
import { RouteComponentProps } from "react-router-dom"

import TabComp from "../Reuseable/TabComp"
import Login from "./Login"
import Register from "./Register"
import SupplierRegisterEdit from "./SupplierRegisterEdit"

const TabPage : React.FC<RouteComponentProps> = (props) => {
    const { path } = props.match
    console.log(path)

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
                <>
                    { path === TabTypeValue.REGISTER && (
                        <TabComp 
                        initialValue="Customer Register" 
                        tabPanelValueOne="Customer Register" 
                        tabPanelValueTwo="Supplier Register" 
                        ComponentOne={Register} 
                        ComponentTwo={SupplierRegisterEdit} 
                    />
                ) }
                </>
            ) }
        </>
    )
}

export default TabPage