import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/UserSlice.js";
import EventSlice from "../features/EventSlice.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = configureStore(
  {
    reducer: {
        user: UserSlice,
        event: EventSlice
    },
  },
  composeEnhancers(applyMiddleware())
);
