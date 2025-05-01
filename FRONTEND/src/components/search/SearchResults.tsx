import { motion } from "framer-motion";
import { useAppSelector } from "../../store/hooks/reduxHooks";
import { Link } from "react-router";
import getResultName from "../../utils/getResultName";
import { useRef } from "react";

export default function SearchResults() {
  const searchResults = useAppSelector((state) => state.search.searchResults);
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const isFetching = useAppSelector((state) => state.search.isFetching);
  const noResults = useAppSelector((state) => state.search.noResults);

  const contentRef = useRef<React.ReactNode>(null);

  // rendering different messages based on different searchResult states.
  // used Ref to store messages

  if (isFetching) {
    contentRef.current = (
      <>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg font-semibold">
          Loading..{" "}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-md font-semibold">
          Please wait.
        </motion.p>
      </>
    );
  } else if (!isFetching && !searchTerm) {
    contentRef.current = (
      <>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg font-semibold">
          Enter a term to begin searching!
        </motion.p>
      </>
    );
  } else if (!isFetching && noResults) {
    contentRef.current = (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-lg font-semibold">
        No results found for {searchTerm}
      </motion.p>
    );
  } else if (!isFetching && searchResults.resultCount > 0) {
    contentRef.current = (
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
            const resultName = getResultName(result);
            return (
              <motion.li
                key={`${result.id}-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="list-disc list-inside">
                <Link to={`/collection/${result.id}`}>
                  {resultName} - {result.artistName}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </>
    );
  }

  return (
    // motion components from framer-motion to control animation of this div
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 200, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="w-175 py-4">{contentRef.current}</div>
    </motion.div>
  );
}
