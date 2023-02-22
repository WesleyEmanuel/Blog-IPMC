import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export class LoginController {
  async login(req: Request, resp: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return resp.status(400).json({ error: "All fields are mandatory" });
    }

    const user = await userRepository.findOneBy({ email });

    if (!user) {
      return resp.status(400).json({ error: "User not found" });
    }

    const verifyPass = await bcrypt.compare(password, user.password);

    if (!verifyPass) {
      return resp.status(400).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? "", {
      expiresIn: "8h",
    });

    const { password: _, ...userLogin } = user;
    return resp.status(200).json({
      user: userLogin,
      token,
    });
  }
}
