import { SupplierTypes } from '../action-types/actionsTypes'
import { Action } from '../action-types/supplierActions'
import { supplierState } from '../models/supplier.interface'

const supplierInitialState: supplierState = {
    isLoading: false,
    data: {},
    errors: {}
}

const supplierReducer = (state: supplierState = supplierInitialState, action: Action) => {
    switch (action.type) {
        case SupplierTypes.ERROR: {
            if (action.payload.hasOwnProperty('errors')) {
                return { ...state, errors: { ...action.payload } }
            } else {
                let result: any
                for (const key in action.payload) {
                    result = { ...result, [key]: action.payload[key].message }
                }
                return { ...state, errors: result }
            }
        }
        case SupplierTypes.LOGIN: {
            return { ...state, data: { ...action.payload } }
        }
        default: {
            return { ...state }
        }
    }
}

export default supplierReducer
