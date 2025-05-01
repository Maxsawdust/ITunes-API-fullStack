import { useAppSelector } from "../store/hooks/reduxHooks";
import { easeIn, motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ResultCard } from "../components";
import ResultType from "../types/resultsType";
export default function FavouritesPage() {
  const favourites = useAppSelector((state) => state.favourites.favourites);
  const [categoryToDisplay, setCategoryToDisplay] = useState<string>("all");
  const [favsToDisplay, setFavsToDisplay] = useState<ResultType[]>([]);

  useEffect(() => {
    if (categoryToDisplay === "all") {
      setFavsToDisplay(favourites);
    } else {
      setFavsToDisplay(
        favourites.filter((favourite) => favourite.kind === categoryToDisplay)
      );
    }
  }, [categoryToDisplay, favourites]);

  return (
    <div className="flex-1 flex flex-col  gap-5 py-10 px-30">
      {/* HEADING */}
      <div className="">
        <motion.h1
          initial={{
            x: -75,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: easeIn,
          }}
          className="text-4xl font-semibold">
          Your favourites
        </motion.h1>
        <motion.h2
          initial={{
            x: -75,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: easeIn,
            delay: 0.1,
          }}
          className="text-xl text-gray-300">
          Begin searching and find something you like to add it to your
          favourites!
        </motion.h2>
      </div>

      <div className="h-1 w-200 bg-secondary" />

      {/* SELECT */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          ease: easeIn,
        }}
        className="">
        <select
          className="text-xl px-4 py-2 rounded-lg shadow-[0_0_4px_white] bg-white text-black"
          onChange={(e) => setCategoryToDisplay(e.target.value)}>
          <option value="all">All</option>
          <option value="song">Music</option>
          <option value="feature-movie">Movies</option>
          <option value="podcast">Podcasts</option>
          <option value="audiobook">Audiobooks</option>
          <option value="tv-episode">TV Shows</option>
          <option value="software">Software</option>
          <option value="ebook">eBooks</option>
        </select>
      </motion.div>

      {/* FAVS DISPLAY */}
      <div className="flex flex-col gap-5">
        {favsToDisplay.length > 0 ? (
          <AnimatePresence mode="wait">
            {favsToDisplay.map((fav, index) => {
              return <ResultCard key={fav.id} index={index} result={fav} />;
            })}
          </AnimatePresence>
        ) : (
          <div className="">
            <h1 className="text-4xl font-semibold">There's nothing here!</h1>
            <h2 className="text-xl text-gray-300">
              Try browsing our selection of {categoryToDisplay}s
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
