import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/books/booksSlice";
import Button from './Button';

const AddBook = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const books = useSelector((state) => state.books.books)

  const submitForm = (e) => {
    e.preventDefault();

    const id = books.length + 1

    dispatch(addBook({ item_id: `item${id}`, title, author }));
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