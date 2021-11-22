import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./list-reducer";

const store = configureStore({
  reducer: { list: listSlice.reducer },
});

export default store;
