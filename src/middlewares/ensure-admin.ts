import { UserRepository } from '@/repositories';

import { Request, Response, NextFunction } from 'express';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const userRepository = new UserRepository();

  const { admin } = await userRepository.findById(user_id);

  if (admin) return next();

  return response.status(401).json({ error: 'Unauthorized' });
}
