import 'reflect-metadata';

import { ListUserSendComplimentsService } from '@/services';
import { ComplimentRepositorySpy } from '@/tests/repositories';

type SutTypes = {
  sut: ListUserSendComplimentsService
  complimentRepositorySpy: ComplimentRepositorySpy
}

const makeSut = (): SutTypes => {
  const complimentRepositorySpy = new ComplimentRepositorySpy();
  const sut = new ListUserSendComplimentsService(complimentRepositorySpy);

  return {
    sut,
    complimentRepositorySpy
  }
}

describe('ListUserSendComplimentsService', () => {
  it('should be able list compliments send by user', async () => {
    const { sut } = makeSut();
    const listCompliments = jest.spyOn(sut, 'execute');

    await sut.execute('any_sender_id');

    expect(listCompliments).toHaveBeenCalled();
  });
});