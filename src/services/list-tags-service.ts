import { TagRepository } from '@/repositories';

import { classToPlain } from 'class-transformer';
export class ListTagsService {
  async execute() {
    const tagRepository = new TagRepository();

    const tags = await tagRepository.list();

    return classToPlain(tags);
  }
}
