import { Tag } from '@/entities';
import { TagRepositoryInterface } from '@/repositories';

import { getRepository, Repository } from 'typeorm';

export class TagRepository implements TagRepositoryInterface {
  private repository: Repository<Tag>;

  constructor () {
    this.repository = getRepository(Tag);
  }

  async create (name: string): Promise<Tag> {
    const tag = this.repository.create({ name });

    return await this.repository.save(tag);
  }

  async findByName (name: string): Promise<Tag> {
    return await this.repository.findOne({ name });
  }
}
