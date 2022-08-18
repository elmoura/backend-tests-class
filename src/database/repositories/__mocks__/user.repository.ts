import { User } from "../../entities/user.entity";

export const DEFAULT_MOCKED_USER: User = {
  id: 'mocked_id',
  email: 'dev@test.com'
};

export class UserRepository {
  async findByEmail(email): Promise<User | null> {
    return DEFAULT_MOCKED_USER;
  }

  async createOne(payload): Promise<User> {
    return {
      ...payload,
      id: 'mocked_id',
    }
  }
}