import { configureStore } from "@reduxjs/toolkit";
import selectedCategory from "./categorySlice";

const store = configureStore({
  reducer: {
    category: selectedCategory,
  },
});
export default store;
