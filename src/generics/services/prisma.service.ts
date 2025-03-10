import * as TP from "../../types";

export class PrismaService<T> implements TP.IService<T> {
  protected model: any;

  constructor(model: any) {
    this.model = model;
  }

  async getById(id: string): Promise<T | null> {
    return (await this.model.findUnique({
      where: { id },
    })) as Promise<T | null>;
  }

  async create(data: Partial<T>): Promise<T> {
    try{
      return await this.model.create({ data });
    } catch (error) {
      console.error("/n ❌ Erro no create:", error); // 🔥 Log detalhado do erro
      throw error;
    }
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    return await this.model.update({ where: { id }, data });
  }

  async delete(id: string): Promise<T> {
    return await this.model.delete({ where: { id } });
  }

  async getAll(): Promise<T[]> {
    return await this.model.findMany();
  }
}
