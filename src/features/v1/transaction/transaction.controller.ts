import { Controller } from "../../../generics/controllers/fastify.controller";
import { TransactionService } from "./transaction.service";
import * as TP from "../../../types";

export class TransactionController extends Controller<TP.TransactionType> {
  constructor() {
    super(new TransactionService());
  }
}
