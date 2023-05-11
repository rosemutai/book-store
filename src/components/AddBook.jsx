import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addNewBook } from '../redux/books/booksSlice';
import Button from './Button';

const AddBook = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(addNewBook({ title, author, category: "" }));

  }

  return (
    <div className="add-book-form mb-20">
      <h3 className="form-title font-bold text-gray-500/60 my-2">
        ADD NEW BOOK
      </h3>
      <form className="form flex">
        <input
          type="text"
          id="title-input"
          placeholder="Book title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className="border border-slate-200 w-7/12 px-2 mr-6 focus:outline-0 focus:shadow-md"
        />

        <input
          type="text"
          id="author-input"
          placeholder="Author"
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
          className="border border-slate-200 w-3/12 py-1 mr-3 px-2 rounded-sm focus:outline-0 focus:shadow-md"
        />

        <Button
          text="ADD BOOK"
          onClick={submitForm}
          classname="bg-turquoise text-white px-3 ml-auto py-1 rounded-sm text-xs px-8 text-center"
        />
      </form>
    </div>
  );
}

export default AddBook