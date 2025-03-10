import { Controller } from "../../../generics/controllers/fastify.controller";
import { ExpensesService } from "./expenses.service";
import * as TP from "../../../types";

export class ExpensesController extends Controller<TP.ExpensesType> {
  constructor() {
    super(new ExpensesService());
  }
}
