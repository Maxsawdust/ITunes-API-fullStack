import { createSlice } from "@reduxjs/toolkit";
import SearchResultType from "../../types/SearchResultType";
import MediaQueryType from "../../types/mediaQueryType";

interface searchReducerType {
  isSearching: boolean;
  isFetching: boolean;
  noResults: boolean;
  searchResults: SearchResultType;
  searchTerm: string;
  mediaQuery: MediaQueryType;
}

const initialState: searchReducerType = {
  isSearching: false,
  isFetching: false,
  noResults: false,
  searchResults: {
    resultCount: 0,
    results: [],
  },
  searchTerm: "",
  mediaQuery: "all",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearching: (state, action) => {
      state.isSearching = action.payload;
    },

    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },

    setNoResults: (state, action) => {
      state.noResults = action.payload;
    },

    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setMediaQuery: (state, action) => {
      state.mediaQuery = action.payload;
    },
  },
});

export const {
  setSearching,
  setIsFetching,
  setSearchResults,
  setSearchTerm,
  setMediaQuery,
  setNoResults,
} = searchSlice.actions;

export default searchSlice.reducer;
