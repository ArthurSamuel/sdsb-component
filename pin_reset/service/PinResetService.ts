import { Request } from "../../../../utils/Http";
import { IPinReset } from "../model/PinResetModel";

export default class PinResetService {
  public async UpdatePin(
    password: string | undefined,
    pin: string | undefined
  ): Promise<IPinReset> {
    const results = await Request({
      url: "/member/pin",
      method: "POST",
      data: {
        password: password,
        pin: pin
      },
    });
    return results;
  }
}
