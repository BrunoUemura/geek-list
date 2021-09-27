import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();

export class AuthService {
  async registerUser({ name, email, password }) {
    const userExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userExist) {
      throw new Error("User already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      status: StatusCodes.CREATED,
      message: "User registered successfully",
    };
  }

  async loginUser({ email, password }) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("User not registered");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new Error("Authentication Failed");
    }

    const payload = { id: user.id, email: user.email };
    const expiration = { expiresIn: "1h" };

    const token = jwt.sign(payload, process.env.JWT_SECRET, expiration);

    return {
      status: StatusCodes.OK,
      message: "Authentication Successful",
      token,
    };
  }
}
