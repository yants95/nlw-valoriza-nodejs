import { UserRepository, UserRepositoryInterface } from '@/repositories';
import { AuthenticateDTO } from '@/dtos';

import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
@injectable()
export class AuthenticateUserService {
  constructor (@inject('UserRepository') private readonly userRepository: UserRepositoryInterface) {}

  async execute (data: AuthenticateDTO) {
    const { email, password } = data;

    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new Error('Email/Password incorrect');

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error('Email/Password incorrect');

    // Gerar token
    const token = sign({ email: user.email },
      '4f93ac9d10cb751b8c9c646bc9dbccb9',
      {
        subject: user.id,
        expiresIn: '1d',
      }
    );

    return token;
  }
}
