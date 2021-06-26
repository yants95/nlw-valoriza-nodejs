import { Request, Response } from 'express';
import { CreateTagService } from '@/services';
import { TagRepository } from '@/repositories';

export class CreateTagController {
  async handle(request: Request, response: Response) {
    const tagRepository = new TagRepository();
    const createTagService = new CreateTagService(tagRepository);
    const tag = await createTagService.execute(request.body.name);

    return response.json(tag);
  }
}
