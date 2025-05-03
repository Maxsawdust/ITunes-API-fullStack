import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export default async function JWTMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // get token from cookies
    const token = req.cookies.token;
    const secret = process.env.JWT_SECRET;

    // check if the secret exists
    if (!secret) {
      throw new Error("JWT_SECRET not found in environment variables");
    }

    // check if the token exists
    if (!token) {
      res.status(401).json({ message: "Failed auth: No token" });
      return;
    }

    const decoded = jwt.verify(token, secret);

    req.decoded = decoded;

    next();
  } catch (err: any) {
    res.status(403).json({ message: "Failed auth: Invalid token" });
  }
}
