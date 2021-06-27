import { Request, Response } from 'express';
import { ListTagsService } from '@/services';
import { container } from 'tsyringe';

export class ListTagsController {
  async handle(_: Request, response: Response) {
    const tagService = container.resolve(ListTagsService);
    const tags = await tagService.execute();

    return response.json(tags);
  }
}
