import { ComplimentRepositoryInterface } from '@/repositories';

import { injectable, inject } from 'tsyringe';

@injectable()
export class ListUserReceiveComplimentsService {
  constructor (
    @inject('ComplimentRepository')
    private readonly complimentRepository: ComplimentRepositoryInterface
  ) {}

  async execute(receiver_id: string) {
    return await this.complimentRepository.listReceiveComplimentsByUser(receiver_id);
  }
}
