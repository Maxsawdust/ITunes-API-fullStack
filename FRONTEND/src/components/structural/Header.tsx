import { AnimatePresence, motion } from "framer-motion";
import { SearchBar, SearchResults } from "../";
import { useAppSelector } from "../../store/hooks/reduxHooks";
import { Link, useLocation } from "react-router";

export default function Header() {
  const isSearching = useAppSelector((state) => state.search.isSearching);
  const pathname = useLocation().pathname;

  return (
    //
    <motion.header
      className={`min-h-20 h-fit w-full flex flex-col justify-start items-center bg-secondary fixed top-0 z-1 ${
        isSearching ? "shadow-md shadow-[#ababab]" : ""
      }`}>
      <Link
        to="/"
        className={`text-xl absolute left-30 top-10 translate-y-[-50%] ${
          pathname == "/" ? "underline" : ""
        }`}>
        Favourites
      </Link>

      <SearchBar />

      <AnimatePresence>{isSearching && <SearchResults />}</AnimatePresence>
    </motion.header>
  );
}
