import { getCustomRepository } from 'typeorm';
import { ComplimentRepository } from '@/repositories';

export class ListUserReceiveComplimentsService {
  async execute(receiver_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentRepository);
    const compliments = await complimentsRepositories.listReceiveComplimentsByUser(receiver_id);

    return compliments;
  }
}
