import { Request } from "../../../../utils/Http";
import { ICardCreditService } from "../model/CardCreditModel";

export default class CardCreditService {
  public async GetCredit(): Promise<ICardCreditService> {
    const results = await Request({
      url: "/wallet",
      method: "GET",
    });
    return results;
  }
}