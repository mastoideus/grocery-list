import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    listItems: [],
  },
  reducers: {
    addItem(state, action) {
      state.listItems.push(action.payload);
    },
    deleteItem(state, action) {
      const itemIndex = state.listItems.findIndex(
        (item) => item === action.payload
      );
      state.listItems.splice(itemIndex, 1);
    },
    editItem(state, action) {
      let editedItemIndex = state.listItems.findIndex(
        (item) => item === action.payload.item
      );
      state.listItems[editedItemIndex] = action.payload.newText;
    },
  },
});

export const listActions = listSlice.actions;

export default listSlice;
