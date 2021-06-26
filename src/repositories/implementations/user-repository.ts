import { User } from '@/entities';
import { UserRepositoryInterface } from '@/repositories';
import { UserDTO } from '@/dtos';

import { getRepository, Repository } from 'typeorm';

export class UserRepository implements UserRepositoryInterface {
  private repository: Repository<User>;

  constructor () {
    this.repository = getRepository(User);
  }

  async create (data: UserDTO): Promise<User> {
    const user = this.repository.create(data);

    return await this.repository.save(user);
  }

  async findById (user_id: string): Promise<User> {
    return await this.repository.findOne(user_id);
  }

  async findByEmail (email: string): Promise<User> {
    return await this.repository.findOne({ email });
  }

  async list (): Promise<User[]> {
    return await this.repository.find();
  }
}
