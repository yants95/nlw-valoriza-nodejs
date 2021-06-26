import { Request, Response } from 'express';
import { CreateTagService } from '@/services';
import { container } from 'tsyringe';

export class CreateTagController {
  async handle(request: Request, response: Response) {
    const tagService = container.resolve(CreateTagService);
    const tag = await tagService.execute(request.body.name);

    return response.json(tag);
  }
}
