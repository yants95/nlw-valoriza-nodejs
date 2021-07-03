import { UserDTO } from '@/dtos';
import faker from 'faker';

export const makeUser = (): UserDTO => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  admin: faker.datatype.boolean()
});
