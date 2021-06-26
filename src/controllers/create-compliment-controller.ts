import { CreateComplimentService } from '@/services';
import { ComplimentDTO } from '@/dtos';

import { Request, Response } from 'express';
import { container } from 'tsyringe';
export class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const complimentService = container.resolve(CreateComplimentService);

    const complimentObject: ComplimentDTO = {
      ...request.body,
      user_sender: request.user_id
    }

    const compliment = await complimentService.execute(complimentObject);

    return response.json(compliment);
  }
}
