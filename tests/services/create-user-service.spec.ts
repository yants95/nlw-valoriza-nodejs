import 'reflect-metadata';

import { CreateUserService } from '@/services';
import { UserRepositorySpy } from '@/tests/repositories';
import { makeUser } from '@/tests/mocks';
import { UserDTO } from '@/dtos';
import { AppError } from '@/errors';

type SutTypes = {
  sut: CreateUserService
  userRepositorySpy: UserRepositorySpy
}

const makeSut = (): SutTypes => {
  const userRepositorySpy = new UserRepositorySpy();
  const sut = new CreateUserService(userRepositorySpy);

  return {
    sut,
    userRepositorySpy
  }
}

describe('CreateUserService', () => {
  it('should be able to create a new user', async () => {
    const { sut } = makeSut();
    const user = await sut.execute(makeUser());

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with empty email', async () => {
    const { sut } = makeSut();

    await expect(sut.execute({ ...makeUser(), email: '' })).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new user with an existing email', async () => {
    const { sut } = makeSut();
    const user = makeUser();

    await sut.execute(user);
    await expect(sut.execute(user)).rejects.toBeInstanceOf(AppError);
  });
});