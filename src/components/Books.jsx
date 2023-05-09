import { useDispatch, useSelector } from "react-redux";
import AddBook from "./AddBook";
import Book from "./Book"
import { removeBook } from "../redux/books/booksSlice";

const Books = () => {

  const { books } = useSelector((state) => state.books)
  let dispatch = useDispatch();

    const deleteBook = (e) => {
      dispatch(removeBook(e.target.id));
    };

  return (
    <div className="">
      <div className="books-list">
        {Array.from(books).map((book) => {
          return (
            <Book
              key={book.item_id}
              {...book}
              onClick={deleteBook}
            />
          );
        })}
      </div>

      <div className="form-section">
        <AddBook />
      </div>
    </div>
  );
}

export default Books