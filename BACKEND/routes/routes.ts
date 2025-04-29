import express, { Request, Response } from "express";

const router = express.Router();

router.get("/music", async (req: Request, res: Response) => {
  try {
    const songsResponse = await fetch(
      `https://itunes.apple.com/lookup?id=1686375523&entity=song`
    );
    const songsData = await songsResponse.json();

    res.json(songsData);
  } catch (err: any) {
    res.status(500).json({ error: err });
  }
});

export default router;
