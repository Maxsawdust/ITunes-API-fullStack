import { motion } from "framer-motion";
import { useAppSelector } from "../../store/hooks/reduxHooks";
import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function SearchResults() {
  const searchResults = useAppSelector((state) => state.search.searchResults);
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const [undeterminedDisplay, setUndeterminedDisplay] =
    useState<React.ReactNode | null>(null);

  /* useEffect displays "Loading..." while getting search results, and makes use of a timeout
   * to display "No results found..." after a short delay, if no results have been found
   */
  useEffect(() => {
    setUndeterminedDisplay(
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-lg font-semibold">
        Loading...
      </motion.p>
    );

    setTimeout(() => {
      if (searchTerm !== "" && searchResults.results.length === 0) {
        setUndeterminedDisplay(
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg font-semibold">
            No Results found for "{searchTerm}"
          </motion.p>
        );
      }
    }, 500);
  }, [searchTerm]);

  return (
    // motion components from framer-motion to control animation of this div
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 200, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="w-175 py-4">
        {searchResults.results.length > 0 ? (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg font-semibold">
              Top Results:
            </motion.p>

            <ul className="mt-2 px-4">
              {searchResults.results.slice(0, 5).map((result, index) => {
                return (
                  <motion.li
                    key={`${result.id}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="list-disc list-inside">
                    <Link
                      to={`/collection/${result.artistId || result.trackId}`}>
                      {result.collectionName || result.trackName}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </>
        ) : searchTerm !== "" ? (
          undeterminedDisplay
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg font-semibold">
            Enter a term to begin searching!
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
