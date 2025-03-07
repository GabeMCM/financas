export abstract class ARepository<T> {
  abstract findById(id: string): Promise<T | null>;
  abstract update(id: string, data: Partial<T>): Promise<T>;
  abstract create(data: T): Promise<T>;
  abstract delete(id: string): Promise<T>;
  abstract getAll(): Promise<T[]>;
}
