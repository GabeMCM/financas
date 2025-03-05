// 📂 features/expenses/expenseService.js
import { Services } from "../../generics/services.js";
import { expenseModel } from "./expense.model.js";
import { ResponseUtils } from "../../utils/ResponseUtils.js";

export class expenseService extends Services {
  constructor() {
    super(expenseModel, "Expenses", ResponseUtils);
  }
}
