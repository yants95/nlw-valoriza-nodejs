import { Request, Response } from 'express';
import { ListUserReceiveComplimentsService } from '@/services';
import { container } from 'tsyringe';

export class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const complimentService = container.resolve(ListUserReceiveComplimentsService);
    const compliments = await complimentService.execute(request.user_id);

    return response.json(compliments);
  }
}
