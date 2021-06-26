import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '@/repositories';
import { getCustomRepository } from 'typeorm';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const userRepository = getCustomRepository(UserRepository);

  const { admin } = await userRepository.findById(user_id);

  // Verificar se usuario admin

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: 'Unauthorized',
  });
}
