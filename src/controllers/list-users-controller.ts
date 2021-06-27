import { Request, Response } from 'express';
import { ListUserService } from '@/services';
import { container } from 'tsyringe';

export class ListUsersController {
  async handle(_: Request, response: Response) {
    const userService = container.resolve(ListUserService);
    const users = await userService.execute();

    return response.json(users);
  }
}
