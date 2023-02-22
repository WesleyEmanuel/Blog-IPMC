import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";

export class UserController {
  async create(req: Request, resp: Response) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return resp.status(400).json({ error: "All fields are mandatory" });
    }

    const userExists = await userRepository.findOneBy({ email });

    if (userExists) {
      return resp.status(400).json({ error: "E-mail already registered" });
    }

    try {
      const hashPassword = await bcrypt.hash(password, 10);

      const newUser = userRepository.create({
        name,
        email,
        password: hashPassword,
      });

      await userRepository.save(newUser);

      const { password: _, ...user } = newUser;

      return resp.status(201).json(user);
    } catch (error) {
      return resp.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAll(req: Request, resp: Response) {
    const users = await userRepository.find();

    resp.status(200).json(users);
  }

  async update(req: Request, resp: Response) {
    const { id } = req.params;

    const { name, email, password } = req.body;

    const user = await userRepository.findOneBy({ id: parseInt(id) });

    if (!user) {
      return resp.status(400).json({ error: "User not found" });
    }

    return resp.status(200).json(user);
  }

  async delete(req: Request, resp: Response) {
    const { id } = req.params;

    const user = await userRepository.findOneBy({ id: parseInt(id) });

    if (!user) {
      return resp.status(400).json({ error: "User not found" });
    }

    await userRepository.delete(id);

    resp.status(200).json({ message: "User deleted successfully" });
  }
}
