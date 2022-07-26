import { User } from "../database/entities/user.entity";
import { UserRepository } from "../database/user.repository"

export type CreateUserInput = { email: string }

export class UserService {
  constructor(private userRepository: UserRepository) { }

  create = async (payload: CreateUserInput): Promise<User> => {
    return this.userRepository.createOne(payload);
  }
}