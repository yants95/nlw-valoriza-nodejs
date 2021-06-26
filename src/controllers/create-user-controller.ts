import { CreateUserService } from '@/services';
import { UserRepository } from '@/repositories';

import { Request, Response } from 'express';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const userRepository = new UserRepository();
    const createUserService = new CreateUserService(userRepository);
    const user = await createUserService.execute(request.body);

    return response.json(user);
  }
}
