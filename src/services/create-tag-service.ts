import { TagRepositoryInterface } from '@/repositories';

import { injectable, inject } from 'tsyringe';
@injectable()
export class CreateTagService {
  constructor (
    @inject('TagRepository')
    private readonly tagRepository: TagRepositoryInterface
  ) {}

  async execute(name: string) {
    if (!name) throw new Error('Incorrect name!');

    const tagAlreadyExists = await this.tagRepository.findByName(name);

    if (tagAlreadyExists) throw new Error('Tag already exists!');

    return await this.tagRepository.create(name);
  }
}
