import 'reflect-metadata';

import { CreateComplimentService } from '@/services';
import { ComplimentRepositorySpy, UserRepositorySpy } from '@/tests/repositories';
import { makeCompliment, makeUser } from '@/tests/mocks';
import { AppError } from '@/errors';

type SutTypes = {
  sut: CreateComplimentService
  userRepositorySpy: UserRepositorySpy
  complimentRepositorySpy: ComplimentRepositorySpy
}

const makeSut = (): SutTypes => {
  const userRepositorySpy = new UserRepositorySpy();
  const complimentRepositorySpy = new ComplimentRepositorySpy();
  const sut = new CreateComplimentService(complimentRepositorySpy, userRepositorySpy);

  return {
    sut,
    complimentRepositorySpy,
    userRepositorySpy
  }
}

describe('CreateComplimentService', () => {
  it('should be able to create a new compliment', async () => {
    const { sut, userRepositorySpy } = makeSut();

    const sender = await userRepositorySpy.create(makeUser());
    const receiver = await userRepositorySpy.create(makeUser());

    const compliment = await sut.execute(makeCompliment(sender.id, receiver.id));

    expect(compliment).toHaveProperty('id');
    expect(compliment.user_sender).toEqual(sender.id);
    expect(compliment.user_receiver).toEqual(receiver.id);
  });

  it('should not be able to create a new compliment if user sender and receiver were same person', async () => {
    const { sut, userRepositorySpy } = makeSut();
    const user = await userRepositorySpy.create(makeUser());

    await expect(sut.execute(makeCompliment(user.id, user.id))).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new compliment if user receiver does not exists', async () => {
    const { sut, userRepositorySpy } = makeSut();
    const user = await userRepositorySpy.create(makeUser());

    await expect(sut.execute(makeCompliment(user.id, ''))).rejects.toBeInstanceOf(AppError);
  });
});