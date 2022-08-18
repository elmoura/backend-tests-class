import * as EmailValidator from 'email-validator';
import { User } from "../database/entities/user.entity";
import { UserRepository } from "../database/repositories/user.repository"

export type CreateUserInput = { email: string }

export class UserService {
  constructor(
    private userRepository: UserRepository
  ) { }

  create = async (payload: CreateUserInput): Promise<User> => {
    const isEmailValid = EmailValidator.validate(payload.email);

    if (!isEmailValid) {
      throw new Error('email invalido')
    }

    const userAlreadyCreated = await this.userRepository.findByEmail(payload.email);

    if (userAlreadyCreated) {
      throw new Error('usuario ja existe');
    }

    return this.userRepository.createOne(payload);
  }
}