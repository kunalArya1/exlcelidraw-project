import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SCERET } from "@repo/backend-common/config";
import {
  createUserSchema,
  signinSchema,
  CreateRoomSchema,
} from "@repo/common/types";

export const signup = async (req: Request, res: Response) => {
  const parsedData = createUserSchema.safeParse(req.body);
  const { name, email, password } = req.body;
  res.status(200).json({
    message: "You are signup succesfully",
  });
};
export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = jwt.sign({ email: email }, JWT_SCERET);

  res.status(200).json({
    message: "You are signin",
    token: token,
  });
};
export const createRoom = async (req: Request, res: Response) => {};

export const profile = async (req: Request, res: Response) => {
  res.send("Profile Page");
};
