import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/booksSlice";

const AddBook = () => {

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    const item_id = Math.floor(Math.random(0) * 1000)
    const title = e.target.elements.title.value
    const author = e.target.elements.author.value;

    dispatch(addBook({ item_id, title, author }));
  }

  return (
    <div className="add-book-form">
      <h3 className="form-title">AddBook</h3>
      <form className="form" onSubmit={submitForm}>
        <input
          type="text"
          id="title-input"
          placeholder="Book title"
          name="title"
          className="border border-slate-200"
        />

        <input
          type="text"
          id="author-input"
          placeholder="Author"
          name="author"
          className="border border-slate-200"
        />

        <button type="submit" className="bg-turquoise text-white">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default AddBook