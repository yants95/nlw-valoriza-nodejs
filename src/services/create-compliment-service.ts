import { getCustomRepository } from 'typeorm';
import { ComplimentRepository, UserRepository } from '@/repositories';
interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

export class CreateComplimentService {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IComplimentRequest) {
    const ComplimentRepositories = getCustomRepository(ComplimentRepository);
    const userRepository = getCustomRepository(UserRepository);

    if (user_sender === user_receiver) {
      throw new Error('Incorrect User Receiver');
    }

    const userReceiverExists = await userRepository.findById(user_receiver);

    if (!userReceiverExists) {
      throw new Error('User Receiver does not exists!');
    }

    const compliment = ComplimentRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await ComplimentRepositories.save(compliment);

    return compliment;
  }
}
