import { createSlice } from "@reduxjs/toolkit";
import ResultType from "../../types/resultsType";
import { SongType } from "../../types";

export type FavouriteItem = ResultType | SongType;

interface FavouritesReducerType {
  favourites: FavouriteItem[];
}

const savedFavourites = sessionStorage.getItem("favourites");

const initialState: FavouritesReducerType = {
  favourites: savedFavourites ? JSON.parse(savedFavourites) : [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      // update global state
      state.favourites.push(action.payload);
      // add to session storage
      sessionStorage.setItem(
        "favourites",
        JSON.stringify([...state.favourites])
      );
    },

    removeFromFavourites: (state, action) => {
      // remove from array
      const updatedFavourites = state.favourites.filter(
        (favourite) => favourite.id !== action.payload.id
      );
      // update global states
      state.favourites = updatedFavourites;
      // remove from session storage
      sessionStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
