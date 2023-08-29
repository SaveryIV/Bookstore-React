import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookList = state.bookList.contact(action.payload);
    },

    removeBook: (state, action) => {
      state.bookList = state.bookList.filter((book) => book !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
