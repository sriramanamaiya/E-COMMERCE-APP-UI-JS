export interface RegisterData {
    name: string
    email: string
    password: string
    phoneNumber: string
}

export interface supplierState {
    isLoading: Boolean
    data: RegisterData | {}
    errors: {}
}

export interface SupplierLogin {
    token: string
}

export interface LoginData {
    email: string
    password: string
}
