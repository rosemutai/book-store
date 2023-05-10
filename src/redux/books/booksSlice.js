import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [],
  isLoading: false,
}

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KJOKBZ7x4p98Ki10OPZI/books'

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios(url)
    return await response.data
  } catch (error) {
    console.log(error)
  }
})

export const addNewBook = createAsyncThunk('books/addNewBook', async (obj) => {

  const newBook = { ...obj, item_id: uuidv4() }

  try {
    const res = await axios.post(url, newBook)
    console.log(res.data)

  } catch (error) {
    throw new Error('Failed to add book.');
  }

})

export const BooksSlice = createSlice({
  name: 'books',
  initialState,
  // reducers: {
  //   addBook: (state, action) => {
  //     state.books.push(action.payload);
  //   },

  //   removeBook: (state, action) => {
  //     const bookId = action.payload
  //     state.books = state.books.filter((book) => book.item_id !== bookId)
  //   },
  // },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true
      })

      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false
        state.books = action.payload
      })

      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false
      })

      .addCase(addNewBook.pending, (state) => {
        state.isLoading = true
      })

      .addCase(addNewBook.fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false
        state.books = action.payload;
      })

      .addCase(addNewBook.rejected, (state) => {
        state.isLoading = false
      })
  }

})

export const { addBook, removeBook } = BooksSlice.actions;

export default BooksSlice.reducer