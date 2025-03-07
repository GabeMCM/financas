import * as T from "./types";

export interface IResponseFormat {
  success: boolean;
  message: string;
  error?: unknown;
  data?: T.DataType;
}

export interface IServices {
  create(data: T.DataType): Promise<IResponseFormat>;
  updateById(data: T.DataType, id: string): Promise<IResponseFormat>;
  getAll(): Promise<IResponseFormat>;
  findById(id: string): Promise<IResponseFormat>;
  deleteById(id: string): Promise<IResponseFormat>;
}

export interface IRepository<T> {
  findById(id: string): Promise<T | null>;
  update(id: string, data: Partial<T>): Promise<T>;
}
