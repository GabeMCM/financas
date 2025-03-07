import { ARepository } from "./abstract/abstract.repository";
import * as Tp from "../types";

export class PrismaRepository<T> extends ARepository<T> {
  constructor(private readonly model: Tp.ModelDelegate<T>) {
    super();
  }

  async findById(id: string): Promise<T | null> {
    return await this.model.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    return await this.model.update({ where: { id }, data });
  }

  async create(data: T): Promise<T> {
    return await this.model.create({ data });
  }

  async delete(id: string): Promise<T> {
    return await this.model.delete({ where: { id } });
  }

  async getAll(): Promise<T[]> {
    return await this.model.findMany();
  }
}
