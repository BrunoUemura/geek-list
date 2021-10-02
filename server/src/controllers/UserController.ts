import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  static async findAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const userService = new UserService();
      const users = await userService.findAllUsers();
      return res.json(users);
    } catch (error) {
      next(error);
    }
  }

  static async findUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userService = new UserService();
      const user = await userService.findUser(id);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  static async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, password } = req.body;
      const userService = new UserService();
      const updatedUser = await userService.updateUser(id, { name, password });
      return res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  }

  static async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userService = new UserService();
      const updatedUser = await userService.deleteUser(id);
      return res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
}
