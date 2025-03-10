import { ExpensesController } from "./expenses.controller";
import * as Schemas from "./schemas";

const expensesController = new ExpensesController();

export default {
  getAll: {
    method: "GET",
    url: "/userId/:id/expenses/all",
    schema: Schemas.getAll,
    handler: expensesController.getAll.bind(expensesController),
  },
  getById: {
    method: "GET",
    url: "/userId/:id/expensesId/:id",
    schema: Schemas.getById,
    handler: expensesController.getById.bind(expensesController),
  },
  delete: {
    method: "DELETE",
    url: "/userId/:id/del/expensesId/:id",
    schema: Schemas.deleteId,
    handler: expensesController.delete.bind(expensesController),
  },
  create: {
    method: "POST",
    url: "/userId/:id/expenses/new",
    schema: Schemas.create,
    handler: expensesController.create.bind(expensesController),
  },
  update: {
    method: "PUT",
    url: "/userId/:id/expensesUp/:id",
    schema: Schemas.update,
    handler: expensesController.update.bind(expensesController),
  },
};
