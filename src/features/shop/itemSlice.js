import { createSlice } from "@reduxjs/toolkit";

const initialItemState = { showItemInfo: false, selectedItem: null };

const itemSlice = createSlice({
  name: "itemSlice",
  initialState: initialItemState,
  reducers: {
    showSelectedItemInfo(state, action) {
      console.log(action.payload);
      state.showItemInfo = action.payload.showItemInfo;
    },
  },
});

export const itemSliceActions = itemSlice.actions;

export default itemSlice.reducer;
