import { ComplimentDTO } from '@/dtos';
import { Compliment } from '@/entities';
import { ComplimentRepositoryInterface } from '@/repositories';

import { Repository, getRepository } from 'typeorm';

export class ComplimentRepository implements ComplimentRepositoryInterface {
  private readonly repository: Repository<Compliment>;

  constructor () {
    this.repository = getRepository(Compliment);
  }

  async create (data: ComplimentDTO): Promise<Compliment> {
    const compliment = this.repository.create(data);

    return await this.repository.save(compliment);
  }

  async listReceiveComplimentsByUser (receiver_id: string): Promise<Compliment[]> {
    return await this.repository.find({ 
      where: { user_receiver: receiver_id },
      relations: ['userSender', 'userReceiver', 'tag'],
    });
  }

  async listSendComplimentsByUser (sender_id: string): Promise<Compliment[]> {
    return await this.repository.find({ 
      where: { user_sender: sender_id },
      relations: ['userSender', 'userReceiver', 'tag'],
    });
  }
}
