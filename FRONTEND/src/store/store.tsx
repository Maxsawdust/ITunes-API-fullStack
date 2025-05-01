import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchReducer";
import favouritesReducer from "./reducers/favouritesReducer";

const store = configureStore({
  reducer: {
    search: searchReducer,
    favourites: favouritesReducer,
  },
});

// exporting states for use with custom hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
