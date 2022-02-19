import { createSlice } from "@reduxjs/toolkit";

const initialItemState = {
  showItemInfo: false,
  selectedItem: null,
  modalRequired: false,
};

const itemSlice = createSlice({
  name: "itemSlice",
  initialState: initialItemState,
  reducers: {
    showSelectedItemInfo(state, action) {
      state.showItemInfo = action.payload.showItemInfo;
      state.modalRequired = action.payload.modalRequired;
    },
  },
});

export const itemSliceActions = itemSlice.actions;

export default itemSlice.reducer;
