import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addNewBook, fetchBooks } from '../redux/books/booksSlice';
import Button from './Button';

const AddBook = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(addNewBook({ title, author, category: "" }));
    dispatch(fetchBooks())
  }

  return (
    <div className="add-book-form">
      <h3 className="form-title">AddBook</h3>
      <form className="form">
        <input
          type="text"
          id="title-input"
          placeholder="Book title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className="border border-slate-200"
        />

        <input
          type="text"
          id="author-input"
          placeholder="Author"
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
          className="border border-slate-200"
        />

        <Button text="ADD BOOK" onClick={submitForm} classname="bg-turquoise text-white px-3" />
      </form>
    </div>
  );
}

export default AddBook