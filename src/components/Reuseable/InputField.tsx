import { TextField } from "@mui/material"
import { Box } from "@mui/system"
import { ChangeEventHandler, FocusEventHandler } from "react"

interface InputFieldType {
    inputType : string
    inputlabel: string
    inputName: string
    inputValue: string
    inputHandleChange: ChangeEventHandler
    inputRequired?: boolean
    inputError?: boolean
    inputHelperText?: string
    inputHandleBlur?: FocusEventHandler
}

const InputField = (props: InputFieldType) => {
    const { inputType, inputlabel, inputName, inputValue, inputHandleChange, inputRequired, inputError, inputHelperText, inputHandleBlur } = props

    return (
        <Box>
            <TextField 
                type={inputType} 
                label={inputlabel} 
                name={inputName}
                value={inputValue} 
                onChange={inputHandleChange} 
                onBlur={inputHandleBlur}
                required={inputRequired}
                error={inputError}
                helperText={inputHelperText}
            />
        </Box>
    )
}

export default InputField