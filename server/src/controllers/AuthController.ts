import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
  static async registerUser(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const authService = new AuthService();
      const user = await authService.registerUser({ name, email, password });
      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  }

  static async loginUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const authService = new AuthService();
      const user = await authService.loginUser({ email, password });
      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  }
}
