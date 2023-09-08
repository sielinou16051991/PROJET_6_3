export class LogOutModel {
  constructor(
    private email: string | null | undefined,
    private password: string | null | undefined,
    private firstName: string,
    private lastName: string,
  ) {
  }

}
