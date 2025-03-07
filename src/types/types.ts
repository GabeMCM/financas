import { PrismaClient } from "@prisma/client";

export type ModelDelegate<T> = T extends keyof PrismaClient ? PrismaClient[T] : never;
export type DataType = Record<string, unknown> | string;
export type PrismaClientType = PrismaClient;
