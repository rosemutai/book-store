import { createSlice } from "@reduxjs/toolkit";
import books from '../../books';

const initialState = {
  books: books,
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = state.books.push(action.payload);
    },

    removeBook: (state, action) => {
      const bookId = action.payload
      state.books = state.books.filter((book) => book.id !== bookId.id)
    }
  }

})

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer