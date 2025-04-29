import { Link, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const [isSearchBarDisplayed, setIsSearchBarDisplayed] = useState(false);
  const pathname = useLocation().pathname;

  const displaySearchBar = () => {
    setIsSearchBarDisplayed(!isSearchBarDisplayed);
  };

  return (
    <div className="min-h-13.5 px-5 flex justify-center items-center gap-10 bg-secondary">
      {/* Route links */}
      <div className="flex-2 flex justify-end gap-10">
        <Link to="/" className={pathname === "/" ? "underline" : ""}>
          Home
        </Link>
        <Link to="/music" className={pathname === "/music" ? "underline" : ""}>
          Music
        </Link>
        <Link
          to="/podcasts"
          className={pathname === "/podcasts" ? "underline" : ""}>
          Podcasts
        </Link>
        <Link
          to="/audiobooks"
          className={pathname === "/audiobooks" ? "underline" : ""}>
          Audiobooks
        </Link>
        <Link
          to="/movies"
          className={pathname === "/movies" ? "underline" : ""}>
          Movies
        </Link>
        <Link to="/shows" className={pathname === "/shows" ? "underline" : ""}>
          TV Shows
        </Link>
        <Link
          to="/software"
          className={pathname === "/software" ? "underline" : ""}>
          Software
        </Link>
      </div>

      {/* search bar stuff */}
      <div className="min-h-8 min-w-100 flex-1 flex items-center gap-2">
        {/* search button */}
        <button
          className="h-[25px] w-[25px] cursor-pointer"
          onClick={displaySearchBar}>
          <IoSearch className="w-full h-full" />
        </button>

        {/* framer-motion components to animate search bar */}
        {/* AnimatePresence handles exit animations */}
        <AnimatePresence>
          {isSearchBarDisplayed && <SearchBar />}
        </AnimatePresence>
      </div>
    </div>
  );
}
