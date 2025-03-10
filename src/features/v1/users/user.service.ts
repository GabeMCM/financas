import db from "../../../generics/database/db";
import { PrismaService } from "../../../generics/services/prisma.service";
import * as TP from "../../../types";

export class UserService extends PrismaService<TP.UserType> {
  constructor() {
    super(db.user);
  }

  async getById(id: string): Promise<TP.UserType | null> {
    return await this.model.findUnique({
      where: { id },
      include: {
        transactions: true,
        expenses: true,
      },
    });
  }

}
