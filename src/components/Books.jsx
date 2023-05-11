/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import { removeABook, fetchBooks } from "../redux/books/booksSlice";

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch()

  const deleteBook = (e) => {
    dispatch(removeABook(e.target.id))
  }

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="h">
      <div className="books-list">
        {books && Array.from(books).map((item) => {
          return (
            <Book
                key={item.item_id}
                item_id={item.item_id}
                title={item.title}
                author={item.author}
                onClick={deleteBook}
              />
          )
        })}
      </div>

      
    </div>
  );
};

export default Books;
