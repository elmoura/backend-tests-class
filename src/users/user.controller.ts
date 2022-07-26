import { Request, Response } from "express";
import { CreateUserInput, UserService } from "./user.service";

export class UserController {
  constructor(
    private userService: UserService
  ) { }

  createOne = async (request: Request, response: Response) => {
    const requestBody: CreateUserInput = request.body;

    const result = await this.userService.create(requestBody);

    return response.status(201).json(result);
  }
}