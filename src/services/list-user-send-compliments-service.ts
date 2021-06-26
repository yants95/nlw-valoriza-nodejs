import { getCustomRepository } from 'typeorm';
import { ComplimentRepository } from '@/repositories/';

export class ListUserSendComplimentsService {
  async execute(sender_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentRepository);
    const compliments = await complimentsRepositories.listSendComplimentsByUser(sender_id);

    return compliments;
  }
}
