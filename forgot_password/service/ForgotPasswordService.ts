import { Request } from "../../../../utils/Http";
import { IForgotPassword } from "../model/PasswordReset";

export default class ForgotPasswordService {
  public async SendForgotCode(email: string): Promise<IForgotPassword> {
    const results = await Request({
      url: "/forgot-password",
      method: "POST",
      data: {
        email,
      },
    });
    return results;
  }

  public async ChangePassword(
    token: string,
    password: string,
    confirmPassword: string
  ): Promise<IForgotPassword> {
    const results = await Request({
      url: "/forgot-password/change",
      method: "POST",
      data: {
        token,
        password,
        password_confirmation: confirmPassword,
      },
    });
    return results;
  }
}
