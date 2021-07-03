import { UserDTO } from '@/dtos';
import { User } from '@/entities';
import { UserRepositoryInterface } from '@/repositories';

export class UserRepositorySpy implements UserRepositoryInterface {
  users: User[] = [];

  async create (data: UserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { ...data });

    this.users.push(user);

    return user;
  }

  async findById(user_id: string): Promise<User> {
    return this.users.find(user => user.id === user_id);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find(user => user.email === email);
  }

  async list(): Promise<User[]> {
    return this.users;
  }
}