import { useDispatch, useSelector } from "react-redux";
import AddBook from "./AddBook";
import Book from "./Book";
import { removeBook } from "../redux/books/booksSlice";

const Books = () => {
  const books = useSelector((state) => state.books.books);
  let dispatch = useDispatch();

  const deleteBook = (e) => {
    dispatch(removeBook(e.target.id));
  };

  return (
    <div className="">
      <div className="books-list">
        {books && Object.entries(books).map(([index, items]) => (
          <div key={index}>
            {items.map((item) => (
              <Book
                key={item.item_id}
                item_id={item.item_id}
                // category={item.category}
                title={item.title}
                author={item.author}
                onClick={deleteBook}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="form-section">
        <AddBook />
      </div>
    </div>
  );
};

export default Books;
