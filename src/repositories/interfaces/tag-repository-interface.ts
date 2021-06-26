import { Tag } from '@/entities';

export interface TagRepositoryInterface {
  create (name: string): Promise<Tag>;
  findByName (name: string): Promise<Tag>;
  list (): Promise<Tag[]>;
}
