import { useSelector } from "react-redux";
import AddBook from "./AddBook";
import Book from "./Book"

const Books = () => {

  const { books } = useSelector((state) => state.books)
  return (
    <div className="">
      <div className="books-list">
        {books.map((book) => {
          return (
            <div key={book.title}>
              <Book
                category={book.category}
                title={book.title}
                author={book.author}
              />
            </div>
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