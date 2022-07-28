import { DataSource, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

export class UserRepository {

  private readonly usersConnection: Repository<User>;

  constructor(dataSource: DataSource) {
    this.usersConnection = dataSource.getRepository(User);
  }

  findById = async (userId: string): Promise<User | null> => {
    return this.usersConnection.findOne({
      where: { id: userId },
    });
  }

  list = async (): Promise<User[]> => {
    return this.usersConnection.find();
  }

  createOne = async (user: Omit<User, 'id'>): Promise<User> => {
    console.log({ user })
    return this.usersConnection.save(user);
  }
}