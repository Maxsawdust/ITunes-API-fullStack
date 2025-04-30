import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const generateToken = async (req: Request, res: Response) => {
  try {
    // get secret from .env
    const secret = process.env.JWT_SECRET;
    // throw an error if it's not there
    if (!secret) {
      throw new Error("JWT_SECRET not found in environment variables");
    }

    // sign the token
    const token = jwt.sign({ app: "music-search", iat: Date.now() }, secret, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    res.status(200).json({ message: "Token generated successfully" });
  } catch (err: any) {
    res.status(500).json({ message: "Failed to create token: Server error" });
  }
};

export const getSearchResults = async (req: Request, res: Response) => {
  try {
    // get term and media from query
    const { term, media } = req.query;

    // send a get request to ITunes API with term and media
    const response = await fetch(
      `https://itunes.apple.com/search?term=${term}&media=${media}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch from iTunes API");
    }

    const data = await response.json();
    res.json(data);
  } catch (err: any) {
    res
      .status(500)
      .json({ message: "Failed to get search results from ITunes" });
  }
};
