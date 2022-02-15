import { configureStore } from "@reduxjs/toolkit";
import selectedCategory from "../features/shop/categorySlice";
import selectedItem from "../features/shop/itemSlice";

const store = configureStore({
  reducer: {
    category: selectedCategory,
    item: selectedItem,
  },
});
export default store;
