import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/booksSlice";

const Book = ({ item_id, category, title, author }) => {
  
  let dispatch = useDispatch();

  return (
    <div className="book">
      <h4>{category}</h4>
      <h2>{title}</h2>
      <p>{author}</p>
      <button
        className="bg-black text-white"
        onClick={() => dispatch(removeBook(item_id))}
      >Remove</button>

    </div>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.array,
};
export default Book