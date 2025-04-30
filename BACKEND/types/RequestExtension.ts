import { Request } from "express";

// adding decoded to Request type
declare module "express" {
  interface Request {
    decoded?: any;
  }
}
