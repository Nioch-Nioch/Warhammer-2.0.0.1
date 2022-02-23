import { createSlice } from "@reduxjs/toolkit";

const initialItemState = {
  selectedCategoryId: "0",
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState: initialItemState,
  reducers: {
    selectCategory(state, action) {
      state.selectedCategoryId = action.payload.selectedCategoryId;
    },
  },
});

export const categorySliceActions = categorySlice.actions;

export default categorySlice.reducer;
