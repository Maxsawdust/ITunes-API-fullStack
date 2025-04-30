import { AnimatePresence, motion } from "framer-motion";
import { SearchBar, SearchResults } from "../";
import { useAppSelector } from "../../store/hooks/reduxHooks";

export default function Header() {
  const isSearching = useAppSelector((state) => state.search.isSearching);

  return (
    //
    <motion.header className="min-h-20 h-fit w-full flex flex-col justify-start items-center bg-secondary fixed top-0">
      <SearchBar />

      <AnimatePresence>{isSearching && <SearchResults />}</AnimatePresence>
    </motion.header>
  );
}
