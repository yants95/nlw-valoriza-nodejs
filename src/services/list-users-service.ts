import { UserRepositoryInterface } from '@/repositories';

import { classToPlain } from 'class-transformer';
import { injectable, inject } from 'tsyringe';

@injectable()
export class ListUserService {
  constructor (
    @inject('UserRepository')
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute() {
    const users = await this.userRepository.list();

    return classToPlain(users);
  }
}
