import { useState } from "react"
import { Box, Tab } from "@mui/material"
import { TabPanel, TabContext, TabList } from "@mui/lab"
import Login from "../HomePage/Login"

const TabPage = () => {
    // const { name } = props
    const [ tabName, settabName ] = useState('customer')

    const handleChange = (e: any, value: string) => {
        settabName(value)
    }

    return (
        <Box>
            <Box>
                <TabContext value={tabName}  >
                    <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                        <TabList onChange={handleChange} >
                            <Tab value="customer" label="Customer" />
                            <Tab value="supplier" label="Supplier" />
                        </TabList>
                    </Box>
                    <TabPanel value="customer">
                        <Login />
                    </TabPanel>
                    <TabPanel value="supplier">
                        <Login />
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default TabPage