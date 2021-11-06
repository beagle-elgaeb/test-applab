import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import todoReducer from "./todoSlise";


const store = configureStore({
  reducer: {
    todoItem: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
