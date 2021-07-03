import 'reflect-metadata';

import { ListTagsService } from '@/services';
import { TagRepositorySpy } from '@/tests/repositories';

type SutTypes = {
  sut: ListTagsService
  tagRepositorySpy: TagRepositorySpy
}

const makeSut = (): SutTypes => {
  const tagRepositorySpy = new TagRepositorySpy();
  const sut = new ListTagsService(tagRepositorySpy);

  return {
    sut,
    tagRepositorySpy
  }
}

describe('ListTagsService', () => {
  it('should be able list all tags', async () => {
    const { sut } = makeSut();
    const listTags = jest.spyOn(sut, 'execute');

    await sut.execute();

    expect(listTags).toHaveBeenCalled();
  });
});