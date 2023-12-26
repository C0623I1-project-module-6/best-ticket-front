import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/UserSlice.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = configureStore(
  {
    reducer: {
        user: UserSlice
    },
  },
  composeEnhancers(applyMiddleware())
);
