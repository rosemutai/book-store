import AddBook from "./AddBook";
import Book from "./Book"

const arrBooks = [
  {
    category: "Fiction",
    title: "The Red Lights",
    author: "Rose Roberts",
    comments: ["Great Book", "Love it!"],
  },

  {
    category: "Science Fiction",
    title: "Dune",
    author: "Frank Herbert",
    comments: ["Great Book", "Love it!"],
  },

  {
    category: "Econmy",
    title: "Capital in the Twenty-First Century",
    author: "Suzanne Collins",
    comments: ["Great Book", "Love it!"],
  },
];

const Books = () => {
  return (
    <div className="">
      <div className="books-list">
        {arrBooks.map((book) => {
          return (
            <div key={book.title}>
              <Book
                category={book.category}
                title={book.title}
                author={book.author}
                comments={book.comments}
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