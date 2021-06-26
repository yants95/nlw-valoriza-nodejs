import { Request, Response } from "express";
import { ListUserService } from "../services/list-users-service";

export class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersService = new ListUserService();

    const users = await listUsersService.execute();

    return response.json(users);
  }
}
