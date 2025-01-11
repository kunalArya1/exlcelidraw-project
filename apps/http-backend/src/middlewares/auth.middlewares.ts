import { NextFunction } from "express";

const { Request, Response, NextFunction } = require("@types/express");

export const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token: any = req.headers;
};
