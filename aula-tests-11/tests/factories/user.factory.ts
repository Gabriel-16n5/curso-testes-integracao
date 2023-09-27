import prisma from "../../src/database";
import { UserInput } from "../../src/repository";

export const user: UserInput = {
    email: "teste@teste.com.br",
    password: "teste"
  };

export async function createUser(email: string, password: string) {
    return prisma.user.create({
      data: {
            email,
            password
      }
    })
  }