import { createSlice } from "@reduxjs/toolkit";

const initialItemState = {
  itemsData: null,
  selectedCategory: null,
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState: initialItemState,
  reducers: {
    selectCategory(state, action) {
      state.selectedCategory = action.payload.selectedCategory;

      state.itemsData = state.selectedCategory
        ? action.payload.itemsList.filter(
            (item) => item.categoryId === state.selectedCategory
          )
        : null;
    },
  },
});

export const categorySliceActions = categorySlice.actions;

export default categorySlice.reducer;
