import { ComplimentRepositoryInterface } from '@/repositories';

import { injectable, inject } from 'tsyringe';

@injectable()
export class ListUserSendComplimentsService {
  constructor (
    @inject('ComplimentRepository')
    private readonly complimentRepository: ComplimentRepositoryInterface
  ) {}

  async execute(sender_id: string) {
    return await this.complimentRepository.listSendComplimentsByUser(sender_id);
  }
}
