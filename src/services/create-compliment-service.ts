import { ComplimentRepositoryInterface, UserRepositoryInterface } from '@/repositories';
import { ComplimentDTO } from '@/dtos';

import { injectable, inject } from 'tsyringe';

@injectable()
export class CreateComplimentService {
  constructor (
    @inject('ComplimentRepository')
    private readonly complimentRepository: ComplimentRepositoryInterface,
    @inject('UserRepository')
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute(data: ComplimentDTO) {
    const { user_receiver, user_sender } = data;

    if (user_sender === user_receiver) {
      throw new Error('Incorrect User Receiver');
    }

    const userReceiverExists = await this.userRepository.findById(user_receiver);

    if (!userReceiverExists) {
      throw new Error('User Receiver does not exists!');
    }

    return await this.complimentRepository.create(data);
  }
}
