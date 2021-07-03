import { ComplimentDTO } from '@/dtos';
import faker from 'faker';

export const makeCompliment = (user_sender?: string, user_receiver?: string): ComplimentDTO => ({
  tag_id: faker.datatype.uuid(),
  user_sender,
  user_receiver,
  message: faker.name.findName()
});
