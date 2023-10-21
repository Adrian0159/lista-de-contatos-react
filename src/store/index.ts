import { configureStore } from "@reduxjs/toolkit";

import tarefasReducer from "./reducers/contatos";

const store = configureStore({
  reducer: {
    contatos: tarefasReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
