export interface UserRegisterData {
    name: string
    email: string
    password?: string
    phoneNumber: string
}

interface RegisteredUser {
    id: string
    isAdmin: Boolean
}

export type RegisteredUserData = UserRegisterData & RegisteredUser

export interface userState {
    isLoading: Boolean
    data: RegisteredUserData | {}
    errors: {}
}

export interface UserLogin {
    token: string
}

export interface LoginData {
    email: string
    password: string
}
