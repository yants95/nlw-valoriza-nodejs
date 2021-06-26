import { TagRepository } from '@/repositories';

export class CreateTagService {
  async execute(name: string) {
    const tagRepository = new TagRepository();

    if (!name) {
      throw new Error('Incorrect name!');
    }

    // SELECT * FROM TAGS WHERE NAME = 'name'
    const tagAlreadyExists = await tagRepository.findByName(name);

    if (tagAlreadyExists) {
      throw new Error('Tag already exists!');
    };

    return await tagRepository.create(name);
  }
}
