import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

export class UserService {
  private prisma = new PrismaClient();

  async findAllUsers() {
    return await this.prisma.user.findMany();
  }

  async findUser(id: string) {
    return await this.prisma.user.findFirst({
      where: {
        id: id,
      },
    });
  }

  async updateUser(id: string, { name, password }) {
    await this.prisma.user.update({
      where: { id: id },
      data: {
        name,
      },
    });

    return {
      status: StatusCodes.OK,
      message: "User updated successfully",
    };
  }

  async deleteUser(id: string) {
    await this.prisma.user.delete({
      where: {
        id: id,
      },
    });

    return {
      status: StatusCodes.OK,
      message: "User deleted successfully",
    };
  }
}
