import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authMiddleware } from '../middlewares/authMiddleware';

const users = Router();

users.get('/users', UserController.findAllUsers);
users.get('/users/:id', UserController.findUser);
users.put('/users/:id', authMiddleware, UserController.updateUser);
users.delete('/users/:id', authMiddleware, UserController.deleteUser);

export { users };
