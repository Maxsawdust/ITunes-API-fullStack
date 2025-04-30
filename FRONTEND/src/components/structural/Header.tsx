import { AnimatePresence, motion } from "framer-motion";
import { SearchBar, SearchResults } from "../";
import { useAppSelector } from "../../store/hooks/reduxHooks";

export default function Header() {
  const isSearching = useAppSelector((state) => state.search.isSearching);

  return (
    //
    <motion.header className="min-h-20 h-fit flex flex-col justify-start items-center bg-secondary relative">
      <SearchBar />

      <AnimatePresence>{isSearching && <SearchResults />}</AnimatePresence>
    </motion.header>
  );
}
