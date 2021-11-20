import { Request } from "../../../../utils/Http";
import { IPasswordReset } from "../model/PasswordReset";

export default class PasswordResetService {
  public async UpdatePassword(
    oldPassword: string | undefined,
    password: string | undefined,
    passwordConfirm: string | undefined
  ): Promise<IPasswordReset> {
    const results = await Request({
      url: "/member/password",
      method: "POST",
      data: {
        old_password: oldPassword,
        password: password,
        password_confirmation: passwordConfirm,
      },
    });
    return results;
  }
}
