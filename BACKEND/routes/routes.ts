import express from "express";
import "dotenv/config";
import {
  generateToken,
  getAlbumSongs,
  getSearchResults,
  queryById,
} from "../controllers/search.controller";
import JWTMiddleware from "../middleware/JWTMiddleware";

const router = express.Router();

// post route to generate JWT on app load
router.post("/token", generateToken);

// route to search API for general content by term and media
router.get("/search", JWTMiddleware, getSearchResults);

// route to search API for one piece of content, filtered by id
router.get("/search/:id", JWTMiddleware, queryById);

// route to get an album from the API by id
router.get("/search/album/:id", JWTMiddleware, queryById);

// route to get songs from a specific album
router.get("/search/album/songs/:id", JWTMiddleware, getAlbumSongs);

export default router;
