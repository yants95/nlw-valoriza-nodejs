import { container } from 'tsyringe';

import { 
  UserRepositoryInterface, UserRepository, 
  ComplimentRepositoryInterface, ComplimentRepository, 
  TagRepositoryInterface, TagRepository
 } from '@/repositories';

container.registerSingleton<UserRepositoryInterface>('UserRepository', UserRepository);
container.registerSingleton<TagRepositoryInterface>('TagRepository', TagRepository);
container.registerSingleton<ComplimentRepositoryInterface>(
  'ComplimentRepository',
  ComplimentRepository
);