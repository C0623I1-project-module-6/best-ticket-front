import {applyMiddleware, compose, configureStore} from "@reduxjs/toolkit";
import UserSlice from "../features/UserSlice.js";
import EventSlice from "../features/EventSlice.js";
import AdminSlice from "../features/AdminSlice.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = configureStore(
  {
    reducer: {
      user: UserSlice,
      event: EventSlice,
      admin: AdminSlice
    },
  },
  composeEnhancers(applyMiddleware())
);
