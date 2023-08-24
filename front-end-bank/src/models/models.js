// Post /user/login
export class LoginPayload {
    constructor( email, password) {
    }
}

// Post /user/signup
export const Signup = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
}

// Put /user/profile
export const UpdateUserProfileAttributes = {
    firstName: '',
    lastName: '',
}
