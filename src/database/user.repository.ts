import { uuid } from 'uuidv4'
import { User } from './entities/user.entity';

export class UserRepository {
  private users: User[] = [];

  findById = async (userId: string): Promise<User | undefined> => {
    return this.users.find((user) => user.id === userId);
  }

  list = async (): Promise<User[]> => {
    return this.users;
  }

  createOne = async (user: Omit<User, 'id'>): Promise<User> => {
    const createdUser: User = {
      ...user,
      id: uuid()
    };

    this.users.push(createdUser);

    return createdUser;
  }
}