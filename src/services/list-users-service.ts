import { getCustomRepository } from 'typeorm';
import { UserRepository } from '@/repositories';
import { classToPlain } from 'class-transformer';

export class ListUserService {
  async execute() {
    const userRepository = getCustomRepository(UserRepository);

    const users = await userRepository.list();

    return classToPlain(users);
  }
}
