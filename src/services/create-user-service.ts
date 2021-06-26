import { UserRepository } from '@/repositories';
import { UserDTO } from '@/dtos';

import { hash } from 'bcryptjs';
export class CreateUserService {
  async execute(data: UserDTO) {
    const { email, password } = data;

    const userRepository = new UserRepository();

    if (!email) {
      throw new Error('Email incorrect');
    }

    const userAlreadyExists = await userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const userObject: UserDTO = {
      ...data,
      password: await hash(password, 8)
    };

    return await userRepository.create(userObject);
  }
}
