import express from "express";
import "dotenv/config";
import {
  generateToken,
  getSearchResults,
} from "../controllers/search.controller";
import JWTMiddleware from "../middleware/JWTMiddleware";

const router = express.Router();

// post route to generate JWT on app load
router.post("/token", generateToken);

router.get("/search", JWTMiddleware, getSearchResults);

export default router;
