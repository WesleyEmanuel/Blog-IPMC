import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { userRepository } from "../repositories/userRepository";

type JwtPayload = {
  id: number;
};

export const authMiddleware = async (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return resp.status(401).json({ erro: "Unauthorized user" });
  }

  const token = authorization.split(" ")[1];

  const { id } = jwt.verify(token, process.env.JWT_PASS ?? "") as JwtPayload;

  const userAuth = await userRepository.findOneBy({ id });

  if (!userAuth) {
    return resp.status(401).json({ erro: "Unauthorized user" });
  }

  next();
};
