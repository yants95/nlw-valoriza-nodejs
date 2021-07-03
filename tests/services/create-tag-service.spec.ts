import 'reflect-metadata';

import { CreateTagService } from '@/services';
import { TagRepositorySpy } from '@/tests/repositories';
import { AppError } from '@/errors';

type SutTypes = {
  sut: CreateTagService
  tagRepositorySpy: TagRepositorySpy
}

const makeSut = (): SutTypes => {
  const tagRepositorySpy = new TagRepositorySpy();
  const sut = new CreateTagService(tagRepositorySpy);

  return {
    sut,
    tagRepositorySpy
  }
}

describe('CreateTagService', () => {
  it('should be able to create a new tag', async () => {
    const { sut } = makeSut();
    const tag = await sut.execute('any_tag');

    expect(tag).toHaveProperty('id');
  });

  it('should not be able to create a new tag with empty name', async () => {
    const { sut } = makeSut();

    await expect(sut.execute('')).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new tag with existing name', async () => {
    const { sut } = makeSut();

    await sut.execute('any_tag');
    await expect(sut.execute('any_tag')).rejects.toBeInstanceOf(AppError);
  });
});