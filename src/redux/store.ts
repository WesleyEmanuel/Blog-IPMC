import { configureStore } from "@reduxjs/toolkit";
import loggedUserSlice from "./loggedUserSlice";

const store = configureStore({
  reducer: {
    loggedUser: loggedUserSlice,
  },
});

export default store;
