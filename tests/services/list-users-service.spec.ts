import 'reflect-metadata';

import { ListUserService } from '@/services';
import { UserRepositorySpy } from '@/tests/repositories';

type SutTypes = {
  sut: ListUserService
  userRepositorySpy: UserRepositorySpy
}

const makeSut = (): SutTypes => {
  const userRepositorySpy = new UserRepositorySpy();
  const sut = new ListUserService(userRepositorySpy);

  return {
    sut,
    userRepositorySpy
  }
}

describe('ListUsersService', () => {
  it('should be able list all users', async () => {
    const { sut } = makeSut();
    const listUsers = jest.spyOn(sut, 'execute');

    await sut.execute();

    expect(listUsers).toHaveBeenCalled();
  });
});