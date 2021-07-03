import 'reflect-metadata';

import { ListUserReceiveComplimentsService } from '@/services';
import { ComplimentRepositorySpy } from '@/tests/repositories';

type SutTypes = {
  sut: ListUserReceiveComplimentsService
  complimentRepositorySpy: ComplimentRepositorySpy
}

const makeSut = (): SutTypes => {
  const complimentRepositorySpy = new ComplimentRepositorySpy();
  const sut = new ListUserReceiveComplimentsService(complimentRepositorySpy);

  return {
    sut,
    complimentRepositorySpy
  }
}

describe('ListUserReceiveComplimentsService', () => {
  it('should be able list compliments receive by user', async () => {
    const { sut } = makeSut();
    const listCompliments = jest.spyOn(sut, 'execute');

    await sut.execute('any_receiver_id');

    expect(listCompliments).toHaveBeenCalled();
  });
});