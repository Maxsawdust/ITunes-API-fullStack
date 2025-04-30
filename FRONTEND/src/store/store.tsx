import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchReducer";

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

// exporting states for use with custom hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
