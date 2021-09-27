import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  static async findAllUsers(req: Request, res: Response) {
    try {
      const userService = new UserService();
      const users = await userService.findAllUsers();
      res.json(users);
    } catch (error) {
      res.json(error.message);
    }
  }

  static async findUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userService = new UserService();
      const user = await userService.findUser(id);
      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, password } = req.body;
      const userService = new UserService();
      const updatedUser = await userService.updateUser(id, { name, password });
      res.json(updatedUser);
    } catch (error) {
      res.json(error.message);
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userService = new UserService();
      const updatedUser = await userService.deleteUser(id);
      res.json(updatedUser);
    } catch (error) {
      res.json(error.message);
    }
  }
}
