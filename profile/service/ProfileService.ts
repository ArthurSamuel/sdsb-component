import { Request } from "../../../../utils/Http";
import { IProfileModel } from "../model/ProfileModelService";

export default class CardCreditService {
  public async GetProfile(): Promise<IProfileModel> {
    const results = await Request({
      url: "/profile",
      method: "GET",
    });
    return results;
  }
}