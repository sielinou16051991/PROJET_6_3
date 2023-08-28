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
