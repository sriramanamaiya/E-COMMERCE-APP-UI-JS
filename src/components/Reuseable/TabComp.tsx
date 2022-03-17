import React, { useState } from "react"
import { Box, Tab } from "@mui/material"
import { TabPanel, TabContext, TabList } from "@mui/lab"

export interface TabValue {
    tabName :string
}

interface TabPropsType {
    tabPanelValueOne: string
    tabPanelValueTwo: string
    ComponentOne: React.FC<TabValue>
    ComponentTwo: React.FC<TabValue>
}

const TabComp = (props: TabPropsType) => {
    const { tabPanelValueOne, tabPanelValueTwo , ComponentOne, ComponentTwo } = props
    const [ tabName, settabName ] = useState(tabPanelValueOne)
    console.log( tabPanelValueOne, tabPanelValueTwo)

    const handleChange = (e: any, value: string) => {
        settabName(value)
    }

    return (
        <Box>
            <Box>
                <TabContext value={tabName}  >
                    <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                        <TabList onChange={handleChange} >
                            <Tab value={tabPanelValueOne} label={tabPanelValueOne} />
                            <Tab value={tabPanelValueTwo} label={tabPanelValueTwo} />
                        </TabList>
                    </Box>
                    <TabPanel value={tabPanelValueOne}>
                        {< ComponentOne tabName={tabName} />}
                    </TabPanel>
                    <TabPanel value={tabPanelValueTwo}>
                        {<ComponentTwo tabName={tabName} />}
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default TabComp