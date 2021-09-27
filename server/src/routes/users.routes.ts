import { Router, Request, Response } from "express";
import { UserController } from "../controllers/UserController";

const users = Router();

users.get("/users", UserController.findAllUsers);
users.get("/users/:id", UserController.findUser);
users.put("/users/:id", UserController.updateUser);
users.delete("/users/:id", UserController.deleteUser);

export { users };
