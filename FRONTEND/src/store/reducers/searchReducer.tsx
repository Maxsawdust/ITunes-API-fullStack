import { createSlice } from "@reduxjs/toolkit";
import SearchResultType from "../../types/SearchResultType";
import MediaQueryType from "../../types/mediaQueryType";

interface searchReducerType {
  isSearching: boolean;
  searchResults: SearchResultType;
  searchTerm: string;
  mediaQuery: MediaQueryType;
}

const initialState: searchReducerType = {
  isSearching: false,
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

export const { setSearching, setSearchResults, setSearchTerm, setMediaQuery } =
  searchSlice.actions;

export default searchSlice.reducer;
