import { ComplimentRepository, UserRepository } from '@/repositories';
import { ComplimentDTO } from '@/dtos';

export class CreateComplimentService {
  async execute(data: ComplimentDTO) {
    const { user_receiver, user_sender } = data;

    const complimentRepository = new ComplimentRepository(); 
    const userRepository = new UserRepository();

    if (user_sender === user_receiver) {
      throw new Error('Incorrect User Receiver');
    }

    const userReceiverExists = await userRepository.findById(user_receiver);

    if (!userReceiverExists) {
      throw new Error('User Receiver does not exists!');
    }

    return await complimentRepository.create(data);
  }
}
