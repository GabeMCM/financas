import db from "../../../generics/database/db";
import { PrismaService } from "../../../generics/services/prisma.service";
import * as TP from "../../../types";

export class TransactionService extends PrismaService<TP.TransactionType> {
  constructor() {
    super(db.transaction);
  }
}
