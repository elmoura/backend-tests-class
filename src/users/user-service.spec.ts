import { UserRepository } from "../database/repositories/user.repository";
import { DEFAULT_MOCKED_USER } from "../database/repositories/__mocks__/user.repository";
import { CreateUserInput, UserService } from "./user.service"

jest.mock('../database/repositories/user.repository');

describe('UserService', () => {
  const userRepository = new UserRepository({} as any);
  const userService = new UserService(userRepository);

  jest.spyOn(userRepository, 'findByEmail').mockImplementation(async () => null);

  const createUserInput: CreateUserInput = { email: 'teste@dev.com' };

  test('cria um usuario com sucesso', async () => {
    const result = await userService.create(createUserInput);

    expect(result.id).toBeTruthy();
  });

  test('retorna um erro caso seja informado um e-mail inválido', async () => {
    const invalidEmailInput = {
      email: 'email muito invalid.com',
    };

    await expect(
      userService.create(invalidEmailInput)
    ).rejects.toThrowError();
  });

  test('retorna um erro caso o usuario ja exista', async () => {
    jest.spyOn(userRepository, 'findByEmail').mockImplementation(async () => DEFAULT_MOCKED_USER)

    await expect(
      userService.create(createUserInput)
    ).rejects.toThrow();
  })
})