/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const link = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CvBh4bn51z9TawsTZP52/books/';

const initialState = {
  books: [],
  isLoading: false,
  error: false,
  isSuccessful: false,
};

const changeToObjectData = (data) => {
  const newDataArray = [];
  data.forEach((element) => {
    const newObject = {
      id: element[0],
      title: element[1][0].title,
      author: element[1][0].author,
      category: element[1][0].category,
    };
    newDataArray.push(newObject);
  });
  return newDataArray;
};

export const getBooksData = createAsyncThunk('books/getBooksData', async () => {
  try {
    const dataStream = await axios(link);
    let data = Object.entries(dataStream.data);
    data = changeToObjectData(data);
    return data;
  } catch (error) {
    return error;
  }
});

export const addBook = createAsyncThunk(
  'books/addBook',
  async ({ id, title, author }) => {
    try {
      const dataStream = await axios.post(link, {
        item_id: id,
        title,
        author,
        category: 'fiction',
      });
      return dataStream;
    } catch (err) {
      return err;
    }
  },
);

export const deleteBookFromApi = createAsyncThunk('books/deleteBookFromApi', async (id) => {
  try {
    await axios.delete(link + id);
    return id;
  } catch (err) {
    return err;
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBooksData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBooksData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(getBooksData.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    builder.addCase(addBook.pending, (state) => {
      state.isSuccessful = false;
    });
    builder.addCase(addBook.fulfilled, (state) => {
      state.isSuccessful = true;
    });
    builder.addCase(addBook.rejected, (state) => {
      state.isSuccessful = false;
    });
    builder.addCase(deleteBookFromApi.pending, (state) => {
      state.isSuccessful = false;
    });
    builder.addCase(deleteBookFromApi.fulfilled, (state) => {
      state.isSuccessful = true;
    });
    builder.addCase(deleteBookFromApi.rejected, (state) => {
      state.isSuccessful = false;
    });
  },
});

export default bookSlice.reducer;
