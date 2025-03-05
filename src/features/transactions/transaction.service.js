// 📂 features/transactions/transactionService.js
import { Services } from "../../generics/services.js";
import { transactionModel } from "./transaction.model.js";
import { ResponseUtils } from "../../utils/ResponseUtils.js";

export class transactionService extends Services {
  constructor() {
    super(transactionModel, "Transaction", ResponseUtils);
  }
}
