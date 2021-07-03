import { AppError } from '@/errors';
import { TagRepositoryInterface } from '@/repositories';

import { injectable, inject } from 'tsyringe';
@injectable()
export class CreateTagService {
  constructor (
    @inject('TagRepository')
    private readonly tagRepository: TagRepositoryInterface
  ) {}

  async execute(name: string) {
    if (!name) throw new AppError('Incorrect name!');

    const tagAlreadyExists = await this.tagRepository.findByName(name);

    if (tagAlreadyExists) throw new AppError('Tag already exists!');

    return await this.tagRepository.create(name);
  }
}
