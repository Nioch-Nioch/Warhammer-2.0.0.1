import { configureStore } from "@reduxjs/toolkit";
import selectedCategory from "./categorySlice";
import selectedItem from "./itemSlice";

const store = configureStore({
  reducer: {
    category: selectedCategory,
    item: selectedItem,
  },
});
export default store;
