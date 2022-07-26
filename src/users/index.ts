import { UserRepository } from "../database/user.repository";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService)

export { userService, userController };