import { Controller } from "../../../generics/controllers/fastify.controller";
import { UserService } from "./user.service";
import * as TP from "../../../types";

export class UserController extends Controller<TP.UserType> {
  constructor() {
    super(new UserService());
  }
}
