import { createSlice } from "@reduxjs/toolkit";

const initialItemState = {
  showItemInfo: false,
  itemInfo: null,
};

const itemSlice = createSlice({
  name: "itemSlice",
  initialState: initialItemState,
  reducers: {
    showSelectedItemInfo(state, action) {
      state.showItemInfo = action.payload.showItemInfo;

      if (action.payload.itemInfo !== "unchanged") {
        state.itemInfo = action.payload.itemInfo;
      }
    },
  },
});

export const itemSliceActions = itemSlice.actions;

export default itemSlice.reducer;
