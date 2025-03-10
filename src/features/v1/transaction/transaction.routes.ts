import { TransactionController } from "./transaction.controller";
import * as Schemas from "./schemas";

const transactionController = new TransactionController();

export default {
  getAll: {
    method: "GET",
    url: "/userId/:id/transaction/all",
    schema: Schemas.getAll,
    handler: transactionController.getAll.bind(transactionController),
  },
  getById: {
    method: "GET",
    url: "/userId/:id/transactionId/:id",
    schema: Schemas.getById,
    handler: transactionController.getById.bind(transactionController),
  },
  delete: {
    method: "DELETE",
    url: "/userId/:id/del/transactionId/:id",
    schema: Schemas.deleteId,
    handler: transactionController.delete.bind(transactionController),
  },
  create: {
    method: "POST",
    url: "/userId/:id/transaction/new",
    schema: Schemas.create,
    handler: transactionController.create.bind(transactionController),
  },
  update: {
    method: "PUT",
    url: "/userId/:id/transactionUp/:id",
    schema: Schemas.update,
    handler: transactionController.update.bind(transactionController),
  },
};
