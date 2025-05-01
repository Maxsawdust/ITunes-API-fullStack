import { createSlice } from "@reduxjs/toolkit";
import ResultType from "../../types/resultsType";

interface FavouritesReducerType {
  favourites: ResultType[];
}

const initialState: FavouritesReducerType = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      state.favourites.push(action.payload);
    },

    removeFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (favourite) => favourite.id !== action.payload.id
      );
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
