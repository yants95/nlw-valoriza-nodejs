import { Tag } from '@/entities';
import { TagRepositoryInterface } from '@/repositories';

export class TagRepositorySpy implements TagRepositoryInterface {
  tags: Tag[] = [];

  async create (name: string): Promise<Tag> {
    const tag = new Tag();

    Object.assign(tag, { name });

    this.tags.push(tag);

    return tag;
  }

  async findByName (name: string): Promise<Tag> {
    return this.tags.find(tag => tag.name === name);
  }

  async list (): Promise<Tag[]> {
    return this.tags;
  }
}
