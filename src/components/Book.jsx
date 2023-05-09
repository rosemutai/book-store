import { PropTypes } from "prop-types";

const Book = ({ category, title, author }) => {
  return (
    <div className="book">
      <h4>{category}</h4>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" className="bg-black text-white">Delete</button>
    </div>
  );
};

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.array,

};
export default Book