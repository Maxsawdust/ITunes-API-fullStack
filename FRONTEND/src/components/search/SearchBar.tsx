import { useAppDispatch, useAppSelector } from "../../store/hooks/reduxHooks";
import {
  setSearching,
  setSearchResults,
  setSearchTerm,
  setMediaQuery,
  setIsFetching,
  setNoResults,
} from "../../store/reducers/searchReducer";
import { useEffect, useRef } from "react";
import MediaQueryType from "../../types/mediaQueryType";
import { useNavigate } from "react-router";
import SearchResultType from "../../types/SearchResultType";
import getResultId from "../../utils/getResultId";
import getResultName from "../../utils/getResultName";
import getResultKind from "../../utils/getResultKind";

export default function SearchBar() {
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const mediaQuery = useAppSelector((state) => state.search.mediaQuery);
  const dispatch = useAppDispatch();
  // using ref to store timeoutId so that it persists between renders
  const fetchTimeoutRef = useRef<number | undefined>(undefined);
  const blurTimeoutRef = useRef<number | undefined>(undefined);

  const isSearching = useAppSelector((state) => state.search.isSearching);

  const navigate = useNavigate();

  useEffect(() => {
    getSearchResults();
  }, [searchTerm, mediaQuery]);

  const handleFocus = () => {
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
    }
    dispatch(setSearching(true));
  };

  const handleBlur = () => {
    blurTimeoutRef.current = setTimeout(
      () => dispatch(setSearching(false)),
      300
    );
  };

  // using timeout here to make sure API calls only happen when the user has stopped typing
  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target instanceof HTMLInputElement) {
      dispatch(setSearchTerm(e.target.value));
    }

    if (e.target instanceof HTMLSelectElement) {
      dispatch(setMediaQuery(e.target.value as MediaQueryType));
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate("/collection");
      dispatch(setSearching(false));
    }
  };

  const getSearchResults = async () => {
    dispatch(setNoResults(false));
    dispatch(setIsFetching(true));

    // clear the previous timeout
    if (fetchTimeoutRef.current) {
      clearTimeout(fetchTimeoutRef.current);
    }

    // set a new timeout
    fetchTimeoutRef.current = setTimeout(async () => {
      try {
        console.log(searchTerm, mediaQuery);
        const response = await fetch(
          `http://localhost:8080/api/search?term=${searchTerm}&media=${mediaQuery}`,
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          const errorMessage = (await response.json()).message;
          throw new Error(errorMessage);
        }

        const searchResults: SearchResultType = await response.json();

        if (searchResults.resultCount === 0) {
          dispatch(setNoResults(true));
          dispatch(setIsFetching(false));
          return;
        }

        const uniformResults = searchResults.results.map((result) => ({
          ...result,
          id: getResultId(result),
          name: getResultName(result),
          kind: getResultKind(result),
        }));

        dispatch(setIsFetching(false));
        dispatch(
          setSearchResults({ ...searchResults, results: uniformResults })
        );
      } catch (err: any) {
        console.error(err.message);
      }
    }, 300);
  };

  return (
    <div
      className={` h-12.5 my-3.75 px-2 flex items-center shadow-[0_0_4px_white] rounded-lg bg-white transition-all duration-200 ${
        isSearching ? "shadow-[0_0_8px_white]" : ""
      }`}>
      <input
        type="text"
        className="w-150 px-4 py-2 text-lg text-black bg-white focus:outline-0 "
        placeholder="Search..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleEnter}
        value={searchTerm}
      />

      <select
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="h-11 px-4 border-l-2 border-gray-200 bg-white text-black ">
        <option value="all">All</option>
        <option value="music">Music</option>
        <option value="movie">Movies</option>
        <option value="podcast">Podcasts</option>
        <option value="audiobook">Audiobooks</option>
        <option value="tvShow">TV Shows</option>
        <option value="software">Software</option>
        <option value="ebook">eBooks</option>
      </select>
    </div>
  );
}
