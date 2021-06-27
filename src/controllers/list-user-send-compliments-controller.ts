import { Request, Response } from 'express';
import { ListUserSendComplimentsService } from '@/services';
import { container } from 'tsyringe';

export class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const complimentService = container.resolve(ListUserSendComplimentsService);
    const compliments = await complimentService.execute(request.user_id);

    return response.json(compliments);
  }
}
