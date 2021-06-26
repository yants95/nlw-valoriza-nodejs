import { ComplimentDTO } from '@/dtos';
import { Compliment } from '@/entities';

export interface ComplimentRepositoryInterface {
  create (data: ComplimentDTO): Promise<Compliment>;
  listReceiveComplimentsByUser (receiver_id: string): Promise<Compliment[]>;
  listSendComplimentsByUser (sender_id: string): Promise<Compliment[]>;
}
