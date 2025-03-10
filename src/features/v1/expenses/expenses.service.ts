import db from "../../../generics/database/db";
import { PrismaService } from "../../../generics/services/prisma.service";
import * as TP from "../../../types";

export class ExpensesService extends PrismaService<TP.ExpensesType> {
  constructor() {
    super(db.expense);
  }
}
