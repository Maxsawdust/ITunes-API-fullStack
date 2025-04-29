import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SongType } from "../types";

export default function HomePage() {
  const [songs, setSongs] = useState<SongType[]>([]);
  useEffect(() => {
    getMusic();
  }, []);

  const getMusic = async () => {
    // NEEDS REVISING: SONGS TOO SMALL
    try {
      const data = await (
        await fetch("http://localhost:8080/api/music")
      ).json();

      const songs: SongType[] = data.results.slice(1);
      setSongs(songs);
      console.log(data);
    } catch (err: any) {
      console.error(`error ${err.message}`);
    }
  };
  return (
    <div className="flex-1 flex flex-col py-10">
      <div className="w-full flex flex-col items-center gap-4">
        <h1 className="text-[50px]">The Latest Hit Songs</h1>
        <AnimatePresence>
          <motion.div className="h-120 w-[70%] flex border-2 border-white">
            {songs.map((song) => {
              return (
                <img
                  key={song.trackId}
                  src={song.artworkUrl100}
                  className="max-h-50"
                />
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
