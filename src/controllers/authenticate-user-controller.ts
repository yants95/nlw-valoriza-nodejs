import { Request, Response } from 'express';
import { AuthenticateUserService } from '@/services';
import { container } from 'tsyringe';

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const authService = container.resolve(AuthenticateUserService);
    const token = await authService.execute(request.body);

    return response.json(token);
  }
}
