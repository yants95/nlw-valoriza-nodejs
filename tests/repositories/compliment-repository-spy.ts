import { ComplimentDTO } from '@/dtos';
import { Compliment } from '@/entities';
import { ComplimentRepositoryInterface } from '@/repositories';

export class ComplimentRepositorySpy implements ComplimentRepositoryInterface {
  compliments: Compliment[] = [];

  async create (data: ComplimentDTO): Promise<Compliment> {
    const compliment = new Compliment();

    Object.assign(compliment, { ...data });

    this.compliments.push(compliment);

    return compliment;
  }

  async listReceiveComplimentsByUser (receiver_id: string): Promise<Compliment[]> {
    return this.compliments.filter(compliment => compliment.user_receiver === receiver_id);
  }

  async listSendComplimentsByUser (sender_id: string): Promise<Compliment[]> {
    return this.compliments.filter(compliment => compliment.user_sender === sender_id);
  }
}
