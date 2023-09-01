export class LoginModel {
  // email!: string;
  // password!: string;
  //
  // constructor(param: Partial<LoginModel>) {
  //   // @ts-ignore
  //   super();
  //   Object.assign(this, param);
  // }
  constructor(
    public email: string,
    public password: string
  ) {
  }
}
// Post /user/login
export class LoginPayload {
  constructor(
    public email: string,
    public password: string) {
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
