import { UserController } from "./user.controller";
import * as Schemas from "./schemas";

const userController = new UserController();

export default {
  getById: {
    method: "GET",
    url: "/:id",
    schema: Schemas.getById,
    handler: userController.getById.bind(userController),
  },
  delete: {
    method: "DELETE",
    url: "/del/:id",
    schema: Schemas.deleteId,
    handler: userController.delete.bind(userController),
  },
  create: {
    method: "POST",
    url: "/new",
    schema: Schemas.create,
    handler: userController.create.bind(userController),
  },
  update: {
    method: "PUT",
    url: "/up/:id",
    schema: Schemas.update,
    handler: userController.update.bind(userController),
  },
};
