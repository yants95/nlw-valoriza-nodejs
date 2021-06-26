import { CreateUserService } from '@/services';

import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const userService = container.resolve(CreateUserService);
    const user = await userService.execute(request.body);

    return response.json(user);
  }
}
