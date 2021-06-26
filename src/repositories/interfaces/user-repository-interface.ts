import { UserDTO } from '@/dtos';
import { User } from '@/entities';

export interface UserRepositoryInterface {
  create (data: UserDTO): Promise<User>;
  findById (user_id: string): Promise<User>;
  findByEmail (email: string): Promise<User>;
  list (): Promise<User[]>;
}
