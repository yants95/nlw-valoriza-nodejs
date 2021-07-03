import { TagRepositoryInterface } from '@/repositories';

import { classToPlain } from 'class-transformer';
import { injectable, inject } from 'tsyringe';
@injectable()
export class ListTagsService {
  constructor (
    @inject('TagRepository')
    private readonly tagRepository: TagRepositoryInterface
  ) {}

  async execute() {
    const tags = await this.tagRepository.list();

    return classToPlain(tags);
  }
}
