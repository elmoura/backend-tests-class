import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { mainDataSource } from "../database/main-datasource";
import { UserRepository } from "../database/repositories/user.repository";

const userRepository = new UserRepository(mainDataSource);
const userService = new UserService(userRepository);
const userController = new UserController(userService)

export { userService, userController };