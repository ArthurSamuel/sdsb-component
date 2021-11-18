import { Request } from "../../../../utils/Http";
import { IHistoryService } from "../model/HistoryServiceModel";

export class HistoryTransactionService {
  public async GetHistory(page: number): Promise<IHistoryService> {
    const results = await Request({
      url: "/wallet/history",
      params: {
        page,
      },
      method: "GET",
    });
    return results;
  }
}
