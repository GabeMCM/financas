// 📂 features/users/UserService.js
import { Services } from "../../generics/services.js";
import { userModel } from "./user.model.js";
import { ResponseUtils } from "../../utils/ResponseUtils.js";

export class UserService extends Services {
  constructor() {
    super(userModel, "Usuário", ResponseUtils);
  }
}
