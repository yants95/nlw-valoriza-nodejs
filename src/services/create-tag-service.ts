import { getCustomRepository } from 'typeorm';
import { TagRepository } from '@/repositories';

export class CreateTagService {
  async execute(name: string) {
    const tagRepository = getCustomRepository(TagRepository);

    if (!name) {
      throw new Error('Incorrect name!');
    }

    // SELECT * FROM TAGS WHERE NAME = 'name'
    const tagAlreadyExists = await tagRepository.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error('Tag already exists!');
    }

    const tag = tagRepository.create({
      name,
    });

    await tagRepository.save(tag);

    return tag;
  }
}
