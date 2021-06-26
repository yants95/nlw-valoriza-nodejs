import { UserRepositoryInterface } from '@/repositories';
import { UserDTO } from '@/dtos';

import { hash } from 'bcryptjs';
import { injectable, inject } from 'tsyringe';
@injectable()
export class CreateUserService {
  constructor (
    @inject('UserRepository')
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute(data: UserDTO) {
    const { email, password } = data;

    if (!email) {
      throw new Error('Email incorrect');
    }

    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const userObject: UserDTO = {
      ...data,
      password: await hash(password, 8)
    };

    return await this.userRepository.create(userObject);
  }
}
