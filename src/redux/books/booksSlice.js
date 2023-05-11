import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [],
  isLoading: false,
}

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/M7CSX9j8jMgRuO6kDbwV/books'

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios(url)
    const result = response.data
    const dataArray = Object.keys(result).map((key) => ({
      item_id: key,
      ...result[key][0]
    }))

    return dataArray

  } catch (error) {
    throw new Error('Failed to fetch books.');
  }
})

export const addNewBook = createAsyncThunk('books/addNewBook', async (obj, thunkAPI) => {
  const newBook = { ...obj, item_id: uuidv4() }
  try {
    await axios.post(url, newBook)
    thunkAPI.dispatch(fetchBooks())
    const res =  thunkAPI.getState().books
    return res
  } catch (error) {
    throw new Error('Failed to add book.');
  }
})

export const removeABook = createAsyncThunk('books/deleteBook', async (id, thunkAPI) => {
  try {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/M7CSX9j8jMgRuO6kDbwV/books/${id}`)
    thunkAPI.dispatch(fetchBooks())
    const res = thunkAPI.getState().books
    return res 
  } catch (error) {
    throw new Error('Failed to delete book.');
  }
})

export const BooksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true
      })

      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload
      })

      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false
      })

      .addCase(addNewBook.pending, (state) => {
        state.isLoading = true
      })

      .addCase(addNewBook.fulfilled, (state, action) => action.payload)

      .addCase(addNewBook.rejected, (state) => {
        state.isLoading = false
      })

      .addCase(removeABook.pending, (state) => {
        state.isLoading = false
      })

      .addCase(removeABook.fulfilled, (state, action) => action.payload )

      .addCase(removeABook.rejected, (state) => {
        state.isLoading = false
      })
  }

})

export const { addBook, removeBook } = BooksSlice.actions;

export default BooksSlice.reducer